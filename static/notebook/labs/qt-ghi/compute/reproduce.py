"""Reproduce frozen QT-GHI model inputs and export all 12 paired error designs.
No network calls. Python >=3.10, NumPy, SciPy. Numeric defaults only from frozen JSON.
The previously executed 54-check support suite is not called or re-labelled here.
"""
from pathlib import Path
from fractions import Fraction as F
from itertools import product
import csv,json,math,sys,platform,hashlib
import numpy as np
import scipy
from scipy.special import ndtr
from scipy.integrate import quad
R=Path(__file__).resolve().parents[1]
def dump(p,d):
 p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(d,ensure_ascii=False,indent=2,allow_nan=False)+'\n',encoding='utf-8')
def rows(p,data):
 with p.open('w',encoding='utf-8',newline='') as h:
  w=csv.DictWriter(h,fieldnames=list(data[0]));w.writeheader();w.writerows(data)
def stat(v):
 return dict(n=len(v),mean=float(v.mean()),sample_sd=float(v.std(ddof=1)),mean_mc_se=float(v.std(ddof=1)/math.sqrt(len(v))),mse_to_zero=float(np.mean(v*v)),mse_mc_se=float((v*v).std(ddof=1)/math.sqrt(len(v))),q05=float(np.quantile(v,.05,method='linear')),q95=float(np.quantile(v,.95,method='linear')))
def call(s,k,r,sig,tau):
 s=np.asarray(s,dtype=float)
 if np.any(s<=0) or sig<=0:raise ValueError('positive S and sigma required')
 if tau<=0:return np.maximum(s-k,0),(s>k).astype(float)
 d1=(np.log(s/k)+(r+sig*sig/2)*tau)/(sig*math.sqrt(tau));d2=d1-sig*math.sqrt(tau)
 return s*ndtr(d1)-k*math.exp(-r*tau)*ndtr(d2),ndtr(d1)
def ledger(paths,cfg,bps):
 p,n1=paths.shape;n=n1-1;dt=cfg['T_years']/n;r=cfg['r_lend_equals_borrow'];sig=cfg['sigma'];k=cfg['K'];m=cfg['multiplier'];c=bps/1e4
 prem=float(call(cfg['S0'],k,r,sig,cfg['T_years'])[0])*m
 cash=np.full(p,prem);q=np.zeros(p);fv=np.zeros(p);cost=np.zeros(p);out=[];residual=0.
 for j in range(n+1):
  start=cash.copy();cash=cash*math.exp(r*dt) if j else cash
  interest=cash-start;s=paths[:,j];before=cash.copy();before_q=q.copy()
  target=m*call(s,k,r,sig,cfg['T_years']-j*dt)[1] if j<n else np.zeros(p)
  trade=target-q;fee=c*s*np.abs(trade);fill=s*(1+c*np.sign(trade));wealth=before+q*s
  cash-=s*trade+fee;q=target
  residual=max(residual,float(np.max(np.abs(cash+q*s-wealth+fee))))
  fv+=fee*math.exp(r*(cfg['T_years']-j*dt));cost+=fee
  payoff=m*np.maximum(s-k,0) if j==n else np.zeros(p)
  out.append(dict(step=j,time_years=j*dt,model_mid=float(s[0]),target_shares=float(q[0]),shares_before=float(before_q[0]),filled_shares=float(trade[0]),assumed_fill_price=float(fill[0]),cash_before_interest=float(start[0]),interest=float(interest[0]),cash_before_trade=float(before[0]),half_spread_cost=float(fee[0]),cash_after_trade=float(cash[0]),shares_after=float(q[0]),payoff=float(payoff[0]),cash_after_payoff=float(cash[0]-payoff[0]),external_flow=0.0))
 error=cash-m*np.maximum(paths[:,-1]-k,0)
 return error,cost,fv,out,residual

def main():
 cfg=json.loads((R/'data/qt-ghi-shared-experiments.json').read_text());ex={e['id']:e for e in cfg['experiments']};dif=ex['EXP-QT15-17-DIFFUSION-01'];hc=ex['EXP-HEDGE-01'];contract=hc['contract'];N,n=dif['rng']['shape']
 # One and only one draw, no previous draws. The actual host package version is recorded.
 z=np.random.Generator(np.random.PCG64(dif['rng']['seed'])).standard_normal(tuple(dif['rng']['shape']))
 np.savez_compressed(R/'data/shared-normal-array.npz',normal=z)
 dw=z/math.sqrt(n);W=np.column_stack([np.zeros(N),np.cumsum(dw,axis=1)]);u=np.arange(n+1)/n
 pc=dif['gbm_P_illustration'];terminal=pc['S0']*np.exp(pc['mu_P']-.5*pc['sigma']**2+pc['sigma']*W[:,-1])
 grids=[]
 for k in dif['nested_intervals']:
  d=dw.reshape(N,k,n//k).sum(2);w=W[:,::n//k];qv=(d*d).sum(1);left=(w[:,:-1]*d).sum(1);right=(w[:,1:]*d).sum(1);target=.5*(W[:,-1]**2-1)
  euler=pc['S0']*np.prod(1+pc['mu_P']/k+pc['sigma']*d,axis=1)
  grids.append(dict(steps=k,first_qv=float(qv[0]),mean_qv=float(qv.mean()),sample_variance=float(qv.var(ddof=1)),theory_variance=2/k,left=float(left[0]),right=float(right[0]),integral=float(target[0]),integral_mse=float(np.mean((left-target)**2)),theory_mse=1/(2*k),euler_rmse=float(np.sqrt(np.mean((euler-terminal)**2))),euler_nonpositive=int((euler<=0).sum()),telescoping_max_residual=float(np.max(np.abs(2*left-(W[:,-1]**2-qv)))),right_left_max_residual=float(np.max(np.abs(right-left-qv)))))
 t=contract['T_years']*u;r=contract['r_lend_equals_borrow'];sig=contract['sigma'];T=contract['T_years'];S=contract['S0']*np.exp((r-sig*sig/2)*t[None,:]+sig*math.sqrt(T)*W)
 first=[dict(grid_index=j,t_Brownian=float(u[j]),W=float(W[0,j]),GBM_P_one_year=float(pc['S0']*math.exp((pc['mu_P']-pc['sigma']**2/2)*u[j]+pc['sigma']*W[0,j])),t_hedge_years=float(t[j]),hedge_Q_model_price=float(S[0,j])) for j in range(n+1)]
 rows(R/'data/common-first-path.csv',first)
 errors={};hs=[];ledgers={}
 for k in hc['comparison_grid']['intervals']:
  prices=S[:,::n//k];base=None
  for bps in hc['comparison_grid']['half_spread_bps']:
   err,cost,fv,ld,res=ledger(prices,contract,bps);key=f'n{k}_c{bps}';errors[key]=err;ledgers[key]=ld
   if bps==0:base=err.copy()
   st=stat(err);st['rmse']=math.sqrt(st['mse_to_zero'])
   hs.append(dict(design=key,intervals=k,half_spread_bps=bps,**st,mean_nominal_cost=float(cost.mean()),mean_terminal_cost=float(fv.mean()),cash_balance_max_residual=res,cost_identity_max_residual=float(np.max(np.abs(base-err-fv)))))
 np.savez_compressed(R/'data/hedge-errors.npz',**errors)
 # Public, readable full export; identical row index is used for all twelve columns.
 with (R/'data/hedge-errors.csv').open('w',newline='',encoding='utf-8') as h:
  w=csv.writer(h);w.writerow(['path_index']+list(errors));w.writerows([[i]+[format(errors[key][i],'.17g') for key in errors] for i in range(N)])
 allv=np.concatenate(list(errors.values()));lo=25*math.floor(float(allv.min())/25);hi=25*math.ceil(float(allv.max())/25)
 edges=np.arange(lo,hi+25,25,dtype=float);hist={key:np.histogram(err,bins=edges)[0].tolist() for key,err in errors.items()}
 dump(R/'data/hedge-histograms.json',dict(unit='USD',bin_edges=edges.tolist(),closure='[left,right), final bin includes right endpoint',counts=hist,total_per_design=N,underflow={k:0 for k in errors},overflow={k:0 for k in errors},source='Full exported same-index errors, not interpolated quantiles'))
 paired=errors['n256_c5']**2-errors['n64_c5']**2
 hand=ledger(np.asarray([hc['short_hand_path']['prices']],float),contract,hc['short_hand_path']['half_spread_bps'])
 rows(R/'data/hand-path-ledger.csv',hand[3]);rows(R/'data/default-first-path-ledger.csv',ledgers[f"n{hc['default_display']['intervals']}_c{hc['default_display']['half_spread_bps']}"])
 # A bounded sanity check of the pricing formula, not a continuous-market theorem.
 price,delta=call(contract['S0'],contract['K'],r,sig,T);threshold=(math.log(contract['K']/contract['S0'])-(r-sig*sig/2)*T)/(sig*math.sqrt(T))
 integ=math.exp(-r*T)*quad(lambda y:(contract['S0']*math.exp((r-sig*sig/2)*T+sig*math.sqrt(T)*y)-contract['K'])*math.exp(-y*y/2)/math.sqrt(2*math.pi),threshold,12,epsabs=1e-11)[0]
 epsilon=1e-3;fd=(call(contract['S0']+epsilon,contract['K'],r,sig,T)[0]-call(contract['S0']-epsilon,contract['K'],r,sig,T)[0])/(2*epsilon)
 mi=ex['EXP-QT13-MARKOV-01']['inputs'];P=np.array(mi['transition_matrix']);accuracy=F(str(mi['observation_accuracy']));prior=F(str(mi['prior_H_plus']));histories=[]
 for k in [1,2,3]:
  for signs in product('+-',repeat=k):
   q=prior
   for a in signs:q=(accuracy*q/(accuracy*q+(1-accuracy)*(1-q))) if a=='+' else ((1-accuracy)*q/((1-accuracy)*q+accuracy*(1-q)))
   pred=(1-accuracy)+(2*accuracy-1)*q
   histories.append(dict(history=''.join(signs),posterior_exact=str(q),predictive_exact=str(pred),posterior=float(q),predictive=float(pred)))
 # Use all actually read ID/time records, not reconstructed arrival distributions.
 tr=list(csv.DictReader((R/'data/ethbtc-trade-times.csv').open()))
 us=np.array([int(x['timestamp_microseconds']) for x in tr],dtype=np.int64)
 sec=(us-1735776000000000)//1_000_000
 seconds=np.bincount(sec,minlength=3600);counts=np.bincount(sec//60,minlength=60)
 waits=np.diff(us)/1_000_000
 minute_reference=np.array([int(row['count']) for row in csv.DictReader((R/'data/ethbtc-counts-one-minute.csv').open())])
 if not np.array_equal(counts,minute_reference): raise ValueError('Frozen minute count mismatch')
 edges_wait=np.array([0,.001,.01,.1,1,5,10,30,max(60.,math.ceil(float(waits.max())))]);positive=waits[waits>0]
 arrival=dict(minute_counts=counts.tolist(),second_counts=seconds.tolist(),n=len(tr),mean=float(counts.mean()),sample_variance=float(counts.var(ddof=1)),fano=float(counts.var(ddof=1)/counts.mean()),lambda_per_second=len(tr)/3600,
    seconds_summary_source='Recomputed from complete 3291-row ID/time projection of the connected frozen CSV',
    one_second=dict(mean=float(seconds.mean()),sample_variance=float(seconds.var(ddof=1)),zero_bins=int((seconds==0).sum()),bins=3600),
    interior_waits=dict(n=len(waits),zero_gaps=int((waits==0).sum()),mean_seconds=float(waits.mean()),max_seconds=float(waits.max())),
    waiting_histogram=dict(zero_atom=int((waits==0).sum()),positive_bin_edges=edges_wait.tolist(),counts=np.histogram(positive,bins=edges_wait)[0].tolist(),closure='positive first bin (0,right); subsequent [left,right), final includes right',total=len(waits)))
 rows(R/'data/ethbtc-counts-one-second.csv',[dict(second_from_0000_UTC=i,count=int(v)) for i,v in enumerate(seconds)])
 rows(R/'data/ethbtc-interior-waits.csv',[dict(previous_trade_id=tr[i]['trade_id'],trade_id=tr[i+1]['trade_id'],gap_microseconds=int(us[i+1]-us[i]),gap_seconds=float(waits[i])) for i in range(len(waits))])
 result=dict(status='author_export_from_lead_frozen_inputs',runtime=dict(python=platform.python_version(),numpy=np.__version__,scipy=scipy.__version__),seed=dif['rng']['seed'],shape=[N,n],markov=dict(P=P.tolist(),P2=(P@P).tolist(),histories=histories),arrival=arrival,diffusion=dict(grids=grids,terminal=stat(terminal),theory_mean=pc['S0']*math.exp(pc['mu_P']),log_drift=pc['mu_P']-pc['sigma']**2/2),hedge=hs,paired=dict(mean=float(paired.mean()),mc_se=float(paired.std(ddof=1)/math.sqrt(N)),n=N,unit='USD^2'),hand=hand[3],pricing=dict(closed=float(price),integral=integ,delta=float(delta),finite_difference_delta=float(fd)),research=dict(metric_example=dict(actual=[1,2,3],predicted=[0,1,2],past_mean=[0,.5,1],initial_history=[0],variance_R2=1,SSE_R2_exact='17/29',MSE=1),HTZ=dict(H=.1,loss=[1.45,1.16,.83],fRNN_vs_original=1-.83/1.16,fRNN_vs_model=1-.83/1.45,frequency=[.5,1,2,4],frequency_loss=[1.11,.65,.46,.52],last_relative_change=.52/.46-1,V0=.235**2,integrated_variance_t0=.235**2*45/365)))
 dump(R/'data/results.json',result);dump(R/'data/first-path-ledgers.json',ledgers)
 print(json.dumps(dict(runtime=result['runtime'],errors=[len(errors),N],pricing=result['pricing'],paired=result['paired'],hand_error=hand[0][0],mean_variance=[arrival['mean'],arrival['sample_variance']]),indent=2))
if __name__=='__main__':main()
