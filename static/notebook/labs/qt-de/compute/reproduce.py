"""QT-D/E sandbox/reference reproduction. No network or connected-workspace actions.
Run: python compute/reproduce.py
Outputs data/results.json and data/selection-arrays.npz within this package.
Forecast algebra and PCG64 call order follow the frozen QT-D pilot. Strict BH
is adopted for the lesson; the original <= rule is computed separately.
"""
from __future__ import annotations
import csv, json, math, platform, hashlib
from pathlib import Path
from fractions import Fraction as F
import numpy as np
ROOT=Path(__file__).resolve().parents[1]

def dump(path: Path, obj):
    path.write_text(json.dumps(obj,ensure_ascii=False,indent=2,allow_nan=False)+'\n',encoding='utf-8')

def pack(x):
    if isinstance(x,F): return {'exact':str(x),'decimal':float(x)}
    if isinstance(x,dict): return {str(k):pack(v) for k,v in x.items()}
    if isinstance(x,(list,tuple)): return [pack(v) for v in x]
    return x

def score(y,pred,benchmark):
    y,pred,benchmark=map(lambda x:np.asarray(x,dtype=float),(y,pred,benchmark))
    if not (y.shape==pred.shape==benchmark.shape) or not y.size: raise ValueError('Nonempty equal shapes required')
    if not all(np.isfinite(x).all() for x in (y,pred,benchmark)): raise ValueError('Finite values required')
    den=float(np.sum((y-benchmark)**2)); sse=float(np.sum((y-pred)**2))
    return {'n':int(len(y)), 'rmse_decimal':float(np.sqrt(sse/len(y))),
            'mae_decimal':float(np.mean(np.abs(y-pred))), 'sse_decimal_squared':sse,
            'benchmark_sse_decimal_squared':den,'r2_os_vs_expanding_mean':1-sse/den if den>0 else None}

def fit_at(r,target,p,lam,future_scaling=False):
    r=np.asarray(r,float)
    if not np.isfinite(r).all() or p<1 or p>12 or target<=12 or target>=len(r) or lam<0: raise ValueError('Invalid fit inputs')
    train_idx=np.arange(12,target)
    x=r[train_idx[:,None]-np.arange(1,p+1)]; y=r[train_idx]
    pool=r[np.arange(12,len(r))[:,None]-np.arange(1,p+1)] if future_scaling else x
    mean=pool.mean(axis=0); sd=pool.std(axis=0,ddof=0)
    if np.any(sd==0): raise ValueError('Pilot requires nonconstant features')
    z=(x-mean)/sd; z0=(r[target-np.arange(1,p+1)]-mean)/sd
    zmean=z.mean(axis=0); ym=float(y.mean()); zc=z-zmean; yc=y-ym
    beta=np.linalg.lstsq(zc,yc,rcond=None)[0] if lam==0 else np.linalg.solve(zc.T@zc+len(y)*lam*np.eye(p),zc.T@yc)
    pred=float(ym+(z0-zmean)@beta); residual=y-(ym+zc@beta)
    return {'prediction':pred,'n_train':len(y),'train_mean_y':ym,
            'scaler_mean':mean.tolist(),'scaler_sd':sd.tolist(),'train_z_mean':zmean.tolist(),
            'beta_standardized':beta.tolist(),'beta_norm':float(np.linalg.norm(beta)),
            'intercept_on_scaled_features':float(ym-zmean@beta),'new_features':r[target-np.arange(1,p+1)].tolist(),
            'new_z':z0.tolist(),'train_rmse':float(np.sqrt(np.mean(residual**2))),
            'train_objective':float(np.mean(residual**2)+lam*(beta@beta)),
            'gram_over_n':(zc.T@zc/len(y)).tolist(),'cross_over_n':(zc.T@yc/len(y)).tolist()}

def forecast(records,cfg):
    r=np.array([float(x['return_decimal']) for x in records]); months=[x['month'] for x in records]
    val=np.arange(months.index('201001'),months.index('201912')+1)
    test=np.arange(months.index('202001'),months.index('202512')+1)
    vb=np.array([r[12:t].mean() for t in val]); tb=np.array([r[12:t].mean() for t in test])
    ledger=[]; series={}
    for p in cfg['p_grid']:
        for lam in cfg['lambda_grid']:
            key=f'p{p}-l{lam:g}'
            fits=[fit_at(r,int(t),p,lam) for t in val]
            predictions=np.array([v['prediction'] for v in fits])
            ledger.append({'key':key,'p':p,'lambda':lam,**score(r[val],predictions,vb),
                           'mean_train_rmse_decimal':float(np.mean([v['train_rmse'] for v in fits])),
                           'mean_beta_norm':float(np.mean([v['beta_norm'] for v in fits]))})
            series[key]={'validation_predictions':predictions.tolist(),'validation_fits':fits}
    best=min(ledger,key=lambda x:(x['sse_decimal_squared'],x['p'],x['lambda']))
    bases={'zero':score(r[val],np.zeros(len(val)),vb),'expanding_mean':score(r[val],vb,vb)}
    overall=min([(bases['zero']['sse_decimal_squared'],'zero'),(bases['expanding_mean']['sse_decimal_squared'],'expanding_mean'),(best['sse_decimal_squared'],best['key'])])[1]
    fits=[fit_at(r,int(t),best['p'],best['lambda']) for t in test]
    tp=np.array([f['prediction'] for f in fits])
    controls={}
    for lam in [0.,.1]:
        f=[fit_at(r,int(t),12,lam,True) for t in val]
        past=series[f'p12-l{lam:g}']['validation_predictions']; future=[v['prediction'] for v in f]
        controls[f'{lam:g}']={'lambda':lam,'p':12,'training_only_scaling':score(r[val],past,vb),
            'invalid_future_scaling':score(r[val],future,vb),'future_predictions':future,'future_fits':f,
            'max_abs_prediction_difference_decimal':float(np.max(np.abs(np.asarray(past)-future)))}
    scaling=[]
    for p,lam in [(1,10.),(12,.1),(12,0.)]:
        t=int(val[0]); original=fit_at(r,t,p,lam)['prediction']; changed=fit_at(100*r,t,p,lam)['prediction']/100
        scaling.append({'p':p,'lambda':lam,'target':'201001','base_prediction':original,'rescaled_X_y_back_to_decimal':changed,'abs_difference':abs(original-changed)})
    return {'config':cfg,'validation_candidate_ledger':ledger,'validation_baselines':bases,
        'regression_grid_winner':{'key':best['key'],'p':best['p'],'lambda':best['lambda']},'overall_selected':overall,
        'validation_months':[months[i] for i in val],'validation_observed':r[val].tolist(),'validation_mean_baseline':vb.tolist(),
        'historical_evaluation_scores':{'selected_ridge':score(r[test],tp,tb),'expanding_mean':score(r[test],tb,tb),'zero':score(r[test],np.zeros(len(test)),tb)},
        'evaluation_rows':[{'month':months[t],'observed':float(r[t]),'prediction':float(tp[i]),'expanding_mean':float(tb[i]),'train_target_end':months[t-1]} for i,t in enumerate(test)],
        'evaluation_selected_fits':fits,'series':series,'future_scaling_controls':controls,'unit_rescaling_checks':scaling,
        'interpretation':'冻结版本上的教学历史重放；不是未经研究者看过的保留数据，也不证明可交易或因果。'}

def tail_p(z):
    z=np.asarray(z); return np.fromiter((.5*math.erfc(float(x)/math.sqrt(2)) for x in z.flat),dtype=float,count=z.size).reshape(z.shape)

def bh(p,truth,q=.05,strict=True):
    p=np.asarray(p,dtype=float)
    if p.ndim==1:p=p[None,:]
    if not p.size or not np.isfinite(p).all() or np.any((p<0)|(p>1)) or not 0<q<1:raise ValueError('Invalid BH input')
    order=np.argsort(p,axis=1); ordered=np.take_along_axis(p,order,axis=1); ranks=np.arange(1,p.shape[1]+1);threshold=q*ranks/p.shape[1]
    hit=ordered<threshold if strict else ordered<=threshold
    k=np.max(np.where(hit,ranks,0),axis=1);rej=ranks<=k[:,None]
    truth=np.asarray(truth,bool);v=(rej&truth[order]).sum(axis=1);r=rej.sum(axis=1);fdp=v/np.maximum(r,1)
    return {'k':k,'false_rejections':v,'fdp':fdp,'ordered_p':ordered,'equal_rank_threshold_count':int(np.count_nonzero(ordered==threshold)),
        'summary':{'mean_fdp_fdr_estimate':float(fdp.mean()),'mc_se_fdr_estimate':float(fdp.std(ddof=1)/np.sqrt(len(fdp))) if len(fdp)>1 else None,
                   'probability_any_false_rejection':float(np.mean(v>0)), 'mean_rejections':float(r.mean()),'mean_true_discoveries':float((r-v).mean())}}

def selection(cfg):
    b=cfg['B']; maxm=max(cfg['m_grid']); n=cfg['n_development'];sig=cfg['sigma'];a=cfg['alpha']
    rng=np.random.Generator(np.random.PCG64(cfg['seed_all_null']))
    dev=rng.standard_normal((b,maxm));hold=rng.standard_normal((b,maxm));pall=tail_p(dev);scale=sig/math.sqrt(n)
    allnull=[]; arrays={};equal=[]
    for m in cfg['m_grid']:
        p=pall[:,:m];best=np.argmax(dev[:,:m],axis=1);vd=dev[np.arange(b),best]*scale;vh=hold[np.arange(b),best]*scale
        naive=np.any(p<=a,axis=1);bonf=np.any(p<=a/m,axis=1)
        strict=bh(p,np.ones(m,bool),a,True);inclusive=bh(p,np.ones(m,bool),a,False)
        assert np.array_equal(strict['k'],inclusive['k'])
        equal.append({'design':f'all-null-M{m}','rank_threshold_comparisons':int(p.size),'equal_count':strict['equal_rank_threshold_count'],'same_rejections':bool(np.array_equal(strict['k'],inclusive['k']))})
        allnull.append({'m':m,'naive_fwer_estimate':float(naive.mean()),'naive_fwer_exact':float(1-(1-a)**m),
            'naive_fwer_mcse':float(naive.std(ddof=1)/math.sqrt(b)),'bonferroni_fwer_estimate':float(bonf.mean()),
            'bonferroni_fwer_exact':float(1-(1-a/m)**m),'bonferroni_fwer_mcse':float(bonf.std(ddof=1)/math.sqrt(b)),
            'selected_development_mean':float(vd.mean()),'selected_holdout_mean':float(vh.mean()),'selected_holdout_mcse':float(vh.std(ddof=1)/math.sqrt(b)),
            'bh_strict':strict['summary'],'bh_inclusive_original':inclusive['summary'],
            'first_replica':{'p_values':p[0].tolist(),'development_means':(dev[0,:m]*scale).tolist(),'holdout_means':(hold[0,:m]*scale).tolist(),'winner_zero_based':int(best[0])}})
        arrays[f'M{m}_selected_dev']=vd;arrays[f'M{m}_selected_hold']=vh;arrays[f'M{m}_winner']=best;arrays[f'M{m}_bh_R']=strict['k'];arrays[f'M{m}_bh_FDP']=strict['fdp']
    rng2=np.random.Generator(np.random.PCG64(cfg['seed_mixed']));mc=cfg['mixed']; mix=rng2.standard_normal((b,mc['m']))
    mix[:,:mc['signals']]+=math.sqrt(n)*mc['signal_mu']/sig;truth=np.arange(mc['m'])>=mc['signals'];pm=tail_p(mix)
    strict=bh(pm,truth,a,True);inclusive=bh(pm,truth,a,False)
    assert np.array_equal(strict['k'],inclusive['k'])
    equal.append({'design':'mixed-M100','rank_threshold_comparisons':int(pm.size),'equal_count':strict['equal_rank_threshold_count'],'same_rejections':bool(np.array_equal(strict['k'],inclusive['k']))})
    arrays['mixed_R']=strict['k'];arrays['mixed_V']=strict['false_rejections'];arrays['mixed_FDP']=strict['fdp']
    arrays['all_null_first20_dev_z']=dev[:20];arrays['all_null_first20_hold_z']=hold[:20];arrays['mixed_first20_p']=pm[:20]
    np.savez_compressed(ROOT/'data/selection-arrays.npz',**arrays)
    # Browser views retain complete 5000-replicate winning means, not invented monthly paths.
    views={str(m):{'development':arrays[f'M{m}_selected_dev'].tolist(),'holdout':arrays[f'M{m}_selected_hold'].tolist()} for m in cfg['m_grid']}
    return {'config':cfg,'all_null':allnull,'mixed':{'config':mc,'bh_strict':strict['summary'],'bh_inclusive_original':inclusive['summary'],
        'first_replica':{'p_values':pm[0].tolist(),'null_flags':truth.tolist(),'rejection_count':int(strict['k'][0])},
        'replicate_R':strict['k'].tolist(),'replicate_V':strict['false_rejections'].tolist(),'replicate_FDP':strict['fdp'].tolist()},
        'bh_equality_audit':equal,'views':views,
        'equality_example':{'p_values':[.025,.06],'q':.05,'strict_R':int(bh([.025,.06],[True,True],.05,True)['k'][0]),'inclusive_R':int(bh([.025,.06],[True,True],.05,False)['k'][0])}}

def commission(q,execution_price):
    if q==0:return F(0)
    return min(F(1,100)*execution_price*abs(q),max(F(1),F(5,1000)*abs(q)))

def continuous(mu=F(15,1000),rho=F(0),cap=F(4,5),cash_min=F(1,5),kappa=F(2,1000)):
    w0=F(1,2);sig=F(1,10);gamma=F(2);a=gamma*sig**2;eff=mu-rho
    if not 0<=kappa<1 or cap<0 or cash_min<0:raise ValueError('Invalid budget inputs')
    if 1-kappa*w0<cash_min:return {'feasible':False}
    upper_cash=(1-kappa*w0-cash_min)/(1-kappa) if cash_min>1-w0 else (1+kappa*w0-cash_min)/(1+kappa)
    upper=min(cap,upper_cash)
    x=(eff-kappa)/a if eff-a*w0>kappa else ((eff+kappa)/a if eff-a*w0<-kappa else w0)
    x=max(F(0),min(upper,x));cost=kappa*abs(x-w0);cash=1-x-cost
    nominal=mu*x-cost;worst=eff*x-cost;penalty=a*x*x/2
    return {'feasible':True,'input':{'mu':mu,'rho':rho,'cap':cap,'cash_min':cash_min,'kappa':kappa,'w0':w0,'sigma':sig,'gamma':gamma,'rf':F(0)},
        'upper':upper,'x':x,'cost':cost,'cash':cash,'post_cost_wealth':1-cost,'post_weight_risky':x/(1-cost),'post_weight_cash':cash/(1-cost),
        'nominal_expected_net_return':nominal,'worst_expected_net_return':worst,'risk_penalty':penalty,'objective':worst-penalty,
        'no_trade_mu_band':[a*w0-kappa,a*w0+kappa], 'w0_feasible_interior':0<w0<upper}

def integer(mu=F(2,1000),rho=F(0),cash_min=F(2000),cap=80,mode='spread_and_commission'):
    if cap<0 or cap>80 or int(cap)!=cap or cash_min<0:raise ValueError('Invalid integer inputs')
    if mode not in ['no_cost','spread_only','spread_and_commission']:raise ValueError('Invalid mode')
    wealth=F(10000);mid=F(100);ask=F(2001,20);sig=F(2,100);gamma=F(10);rows=[]
    for q in range(cap+1):
        spread=q*(ask-mid) if mode!='no_cost' else F(0);fee=commission(q,ask) if mode=='spread_and_commission' else F(0)
        cost=spread+fee;cash=wealth-q*mid-cost;x=q*mid/wealth;pen=wealth*gamma*x*x*sig*sig/2
        ev=q*mid*mu-cost;worst=q*mid*(mu-rho)-cost;term=[cash+q*mid*(1+mu-sig),cash+q*mid*(1+mu+sig)]
        row={'q':q,'feasible':cash>=cash_min,'spread':spread,'commission':fee,'cost':cost,'cash':cash,'x':x,'post_cost_wealth':wealth-cost,
             'post_weight_risky':q*mid/(wealth-cost),'expected_gross_pnl':q*mid*mu,'nominal_expected_net_pnl':ev,'worst_expected_net_pnl':worst,
             'risk_penalty_dollars':pen,'objective_dollars':worst-pen,'terminal_mid_wealth':term,'returns_prewealth':[(v-wealth)/wealth for v in term]}
        assert cash+q*mid==wealth-cost
        rows.append(row)
    feasible=[x for x in rows if x['feasible']]
    if not feasible:return {'feasible':False,'rows':rows}
    obj=max(x['objective_dollars'] for x in feasible);win=[x['q'] for x in feasible if x['objective_dollars']==obj]
    return {'feasible':True,'input':{'mu':mu,'rho':rho,'cash_min':cash_min,'cap':cap,'mode':mode,'wealth':wealth,'mid':mid,'ask':ask,'sigma':sig,'gamma':gamma,'rf':0},
            'optimal_q_all_ties':win,'display_q':win[0],'largest_feasible_q':max(x['q'] for x in feasible),'objective':obj,'rows':rows}

def cost_results():
    return pack({'continuous':{'default':continuous(),'cap06':continuous(cap=F(3,5)),'box004':continuous(rho=F(4,1000)),
                               'w0_infeasible':continuous(cash_min=F(4,5))},
        'integer':{'default':integer(),'no_cost':integer(mode='no_cost'),'spread_only':integer(mode='spread_only'),'low_mu':integer(mu=F(12,10000)),
                   'box0006':integer(rho=F(6,10000)),'cap10':integer(cap=10),'cash9000':integer(cash_min=F(9000))},
        'official_commission_examples':[{'q':q,'price':price,'commission':commission(q,price)} for q,price in [(100,F(25)),(1000,F(25)),(1000,F(1,4)),(10,F(1,5))]]})

def main():
    c=json.loads((ROOT/'shared_inputs.json').read_text(encoding='utf-8'))
    path=ROOT/'data/BusEq-value-weighted-monthly-199001-202512.csv'; records=list(csv.DictReader(path.open(encoding='utf-8')))
    expected=[f'{y}{m:02}' for y in range(1990,2026) for m in range(1,13)]
    if [x['month'] for x in records]!=expected:raise ValueError('Unexpected dates')
    if hashlib.sha256(path.read_bytes()).hexdigest()!=c['dataset']['transport_sha256']:raise ValueError('Frozen data changed')
    result={'version':c['content_version'],'environment':{'python':platform.python_version(),'numpy':np.__version__,'rng':'Generator(PCG64)'},
            'records':records,'forecast':forecast(records,c['forecast']),'selection':selection(c['selection']),'cost':cost_results()}
    dump(ROOT/'data/results.json',result)
    print(json.dumps({'overall_winner':result['forecast']['overall_selected'],'bh_equalities':sum(x['equal_count'] for x in result['selection']['bh_equality_audit']),
         'integer_winners':result['cost']['integer']['default']['optimal_q_all_ties'],'bytes':(ROOT/'data/results.json').stat().st_size},ensure_ascii=False))
if __name__=='__main__':main()
