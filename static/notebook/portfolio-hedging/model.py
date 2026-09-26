"""Reproduce dated return estimates and stated portfolio pressure scenarios.

Run with Python, NumPy and pandas. All inputs are adjacent to this file.
Scenario prices, costs and portfolio quantities are assumptions, not forecasts.
The securities risk scan illustrates a method and is not a broker PM quotation.
"""
from pathlib import Path
import json, math
import numpy as np
import pandas as pd

P=Path(__file__).resolve().parent

def put(s,k,t,r,q,sigma,n=400):
    if t<=0:return max(k-s,0.)
    dt=t/n;u=math.exp(sigma*math.sqrt(dt));d=1/u
    p=(math.exp((r-q)*dt)-d)/(u-d)
    if not 0<p<1:raise ValueError('invalid CRR probability')
    a=np.maximum(k-s*np.exp((2*np.arange(n+1)-n)*math.log(u)),0)
    for j in range(n-1,-1,-1):
        a=math.exp(-r*dt)*((1-p)*a[:-1]+p*a[1:])
        a=np.maximum(a,k-s*np.exp((2*np.arange(j+1)-j)*math.log(u)))
    return float(a[0])

def calibrate(inp):
    o=inp['option'];s=inp['observations']['VOO'];target=inp['observations']['put'];lo,hi=.02,1.
    for _ in range(50):
        mid=(lo+hi)/2
        if put(s,o['strike'],o['days']/365,o['r'],o['q'],mid,o['steps'])<target:lo=mid
        else:hi=mid
    return (lo+hi)/2

def beta_data(inp):
    h=pd.read_csv(P/'history.csv',index_col='date',parse_dates=True)
    ret=h[['VOO','AMZN','GOOGL']].pct_change().dropna()
    ret['RF']=h['RF'].reindex(ret.index)
    modes=[{'id':'d1','label':'近一年 · 日频'},{'id':'d3','label':'近两年 · 日频'},{'id':'w3','label':'近两年 · 周频'}]
    rows={};pbetas={};pfits={};audit=[]
    for mode in modes:
        mid=mode['id'];start=inp['history']['windows'][mid]
        r=ret.copy()
        if mid=='w3':r=(1+r).resample('W-FRI').prod()-1
        r=r.loc[(r.index>start)&(r.index<=inp['history']['cutoff'])].dropna()
        rows[mid]={}
        x=r.VOO-r.RF
        for sym in ['AMZN','GOOGL']:
            y=r[sym]-r.RF
            cov=float(np.cov(x,y,ddof=1)[0,1]);var=float(np.var(x,ddof=1))
            beta=cov/var;intercept=float(y.mean()-beta*x.mean());r2=float(np.corrcoef(x,y)[0,1]**2)
            vol=float(y.std(ddof=1));resvol=float((y-intercept-beta*x).std(ddof=1))
            result={'beta':beta,'intercept_pct':intercept*100,'alpha_per_period':intercept,'r2':r2,'n':len(x),
                    'volatility_pct':100*vol,'residual_volatility_pct':100*resvol,'volatility_reduction':1-resvol/vol,
                    'start':str(r.index[0].date()),'end':str(r.index[-1].date()),
                    'covariance':cov,'market_variance':var,
                    'sharpe_per_period':float(y.mean()/y.std(ddof=1)),
                    'points':[{'x':float(a*100),'y':float(b*100),'date':str(t.date())} for t,a,b in zip(r.index,x,y)]}
            rows[mid][sym]=result
            audit.append({'mode':mid,'symbol':sym,**{k:v for k,v in result.items() if k!='points'}})
        val={s:inp['base_shares'][s]*inp['observations'][s] for s in inp['base_shares']}
        pbetas[mid]=(val['VOO']+sum(val[s]*rows[mid][s]['beta'] for s in ['AMZN','GOOGL']))/inp['capital']
        y=sum(val[s]/inp['capital']*(r[s]-r.RF) for s in val)
        alpha=float(y.mean()-pbetas[mid]*x.mean());vol=float(y.std(ddof=1))
        resvol=float((y-alpha-pbetas[mid]*x).std(ddof=1));pr2=float(np.corrcoef(x,y)[0,1]**2)
        pfits[mid]={'beta':pbetas[mid],'r2':pr2,'volatility_pct':vol*100,'residual_volatility_pct':resvol*100,'volatility_reduction':1-resvol/vol,
                    'identity':'按本例当前权重组合历史超额收益，现金收益取RF；样本内连续头寸抵销市场分量，未计交易成本，非实际策略回测'}
    return {'modes':modes,'tickers':['AMZN','GOOGL'],'rows':rows,'portfolio_beta':pbetas,'portfolio_fit':pfits},audit

def requirements(shares,puts,prices,option_value,days,sigma,inp):
    o=inp['option'];k=o['strike'];v=prices['VOO'];cover=min(shares['VOO'],100*puts)
    eq=sum(shares[s]*prices[s] for s in shares)
    other=sum(shares[s]*prices[s] for s in ['AMZN','GOOGL'])
    ordinary=.25*(other+(shares['VOO']-cover)*v)+cover*min(.1*k+max(v-k,0),.25*v)
    scan=0.
    for move in np.linspace(-.08,.06,10):
        for vf in [.25,1.,1.75]:
            new=put(v*(1+move),k,days/365,o['r'],o['q'],sigma*vf,o['steps']) if puts else 0
            pnl=shares['VOO']*v*move+100*puts*(new-option_value)
            scan=max(scan,-pnl)
    scan=max(scan,puts*min(37.5,100*option_value))+.15*other
    return {'sec_initial':.5*eq,'sec_maintenance':ordinary,'sec_scan':scan}

def scenarios():
    return [
      {'id':'market_down','label':'市场回落','description':'30日设定：VOO −10%，AMZN −15%，GOOGL −14%；波动率升至基准的1.5倍。','voo':[0,-.04,-.08,-.10],'amzn':[0,-.07,-.12,-.15],'googl':[0,-.05,-.11,-.14],'vol':[1,1.25,1.4,1.5]},
      {'id':'market_up','label':'市场上涨','description':'30日设定：VOO +10%，AMZN +16%，GOOGL +14%；波动率降至基准的0.8倍。','voo':[0,.04,.07,.10],'amzn':[0,.06,.11,.16],'googl':[0,.05,.10,.14],'vol':[1,.9,.85,.8]},
      {'id':'company_down','label':'个股承压','description':'假设GOOGL经营兑现受挫：30日GOOGL −25%，VOO不变，AMZN +2%。这是未来压力设定。','voo':[0,-.01,0,0],'amzn':[0,-.02,.01,.02],'googl':[0,-.10,-.18,-.25],'vol':[1,1.1,1.1,1]},
      {'id':'rise_fall','label':'先涨后跌','description':'VOO先涨10%，最终跌5%；与“先跌后回升”使用相同终点价格、期限与波动率。','voo':[0,.10,.04,-.05],'amzn':[0,.16,.05,-.08],'googl':[0,.14,.04,-.07],'vol':[1,.8,1.1,1.3]},
      {'id':'fall_rise','label':'先跌后回升','description':'VOO先跌10%，最终跌5%；终点与“先涨后跌”相同，观察途中现金。','voo':[0,-.10,-.07,-.05],'amzn':[0,-.15,-.10,-.08],'googl':[0,-.14,-.10,-.07],'vol':[1,1.5,1.4,1.3]},
      {'id':'stress','label':'共同压力','description':'30日设定：VOO −25%，AMZN −40%，GOOGL −35%，波动率升至2倍；期货保证金参考自第10日起提高50%。','voo':[0,-.10,-.18,-.25],'amzn':[0,-.18,-.3,-.4],'googl':[0,-.16,-.27,-.35],'vol':[1,1.5,1.8,2]}
    ]

def build():
    inp=json.loads((P/'inputs.json').read_text(encoding='utf-8-sig'));obs=inp['observations'];o=inp['option'];fu=inp['future'];fees=inp['fees_assumed'];capital=inp['capital']
    beta,audit=beta_data(inp);sigma=calibrate(inp)
    exact=(beta['portfolio_beta']['d1']-inp['beta_target'])*capital/(obs['MES']*fu['multiplier'])
    n=max(1,int(math.floor(exact+.5)))
    smaller=max(1,n-1)
    q=inp['base_shares'];base_value=sum(q[s]*obs[s] for s in q)
    strategies=[
      {'id':'A','label':'维持','description':'按基础组合继续持有','shares':q.copy(),'puts':0,'futures':0},
      {'id':'B','label':'减持','description':'少持有50股GOOGL，留作现金','shares':{**q,'GOOGL':q['GOOGL']-50},'puts':0,'futures':0},
      {'id':'C','label':'MES','description':f'卖出{n}张MES，调整市场暴露','shares':q.copy(),'puts':0,'futures':n},
      {'id':'D','label':'Put','description':'买入1张VOO Put','shares':q.copy(),'puts':1,'futures':0},
      {'id':'E','label':'搭配','description':f'卖出{smaller}张MES＋买入1张Put','shares':q.copy(),'puts':1,'futures':smaller}]
    for st in strategies:
        fee=(fees['stock_adjustment'] if st['id']=='B' else 0)+st['puts']*fees['option_per_contract']+st['futures']*fees['future_per_contract']
        st['opening_fees']=fee
        st['opening_cash']=capital-sum(st['shares'][s]*obs[s] for s in q)-100*st['puts']*obs['put']-fee
        st['holdings']=' · '.join([f'{s} {st["shares"][s]}股' for s in q]+[f'Put {st["puts"]}张',f'MES空头 {st["futures"]}张'])
        st['opening_requirements']=requirements(st['shares'],st['puts'],obs,obs['put'],o['days'],sigma,inp)
    results={};flat=[]
    scens=scenarios()
    for sc in scens:
        results[sc['id']]={}
        for st in strategies:
            cf=st['futures']*fu['cash_per_contract'];cs=st['opening_cash']-cf
            path=[];previous_f=obs['MES'];cum_transfer=0.;total_fut_pnl=0.
            for i,day in enumerate([0,10,20,30]):
                prices={s:obs[s]*(1+sc[s.lower()][i]) for s in q};future=obs['MES']*(1+sc['voo'][i])
                pvalue=obs['put'] if i==0 else put(prices['VOO'],o['strike'],(o['days']-day)/365,o['r'],o['q'],sigma*sc['vol'][i],o['steps'])
                variation=-st['futures']*fu['multiplier']*(future-previous_f)
                cf+=variation;total_fut_pnl+=variation;previous_f=future
                margin_scale=1.5 if sc['id']=='stress' and i>0 else 1.
                need_i=st['futures']*fu['initial']*margin_scale;need_m=st['futures']*fu['maintenance']*margin_scale
                before=cf;transfer=max(0.,need_i-cf) if cf<need_m else 0.
                cs-=transfer;cf+=transfer;cum_transfer+=transfer
                nav=cs+cf+sum(st['shares'][s]*prices[s] for s in q)+100*st['puts']*pvalue
                assert cs>=0
                path.append({'day':day,'nav':nav,'cash':cs+cf,'securities_cash':cs,'futures_cash':cf,'transfer':transfer,'variation':variation,'futures_before_transfer':before,'futures_initial':need_i,'futures_maintenance':need_m,'put_price':pvalue,'prices':prices,'future':future})
            contrib=[{'label':s,'value':st['shares'][s]*(prices[s]-obs[s])} for s in q]
            contrib += [{'label':'Put','value':st['puts']*100*(pvalue-obs['put'])},{'label':'MES','value':total_fut_pnl},{'label':'费用','value':-st['opening_fees']}]
            pnl=sum(x['value'] for x in contrib)
            assert abs(capital+pnl-nav)<1e-7
            req=requirements(st['shares'],st['puts'],prices,pvalue,o['days']-30,sigma*sc['vol'][-1],inp)
            res={'pnl':pnl,'ending_nav':nav,'cash':cs+cf,'initial_margin':req['sec_initial']+need_i,'maintenance_margin':req['sec_maintenance']+need_m,
                 'margin_scan':req['sec_scan']+need_m,'peak_transfer':cum_transfer,'contributions':contrib,'path':path,
                 'securities_initial':req['sec_initial'],'securities_maintenance':req['sec_maintenance'],'securities_scan':req['sec_scan'],
                 'futures_initial':need_i,'futures_maintenance':need_m,'min_total_cash':min(x['cash'] for x in path),
                 'cash_after_futures_reserve':cs+cf-need_i,'notes':['情景幅度与增量费用为设定；先建立方案，再经历所选30日价格路径。','普通保证金使用公开规则示例；风险扫描为证券分组压力加期货维持要求，不是券商PM预估。']}
            results[sc['id']][st['id']]=res
            flat.append({'scenario':sc['id'],'strategy':st['id'],**{k:v for k,v in res.items() if not isinstance(v,(dict,list))}})
    data={'asof':inp['observed_at'],'capital':capital,'base_shares':q,'prices':obs,'base_cash':capital-base_value,'beta':beta,'strategies':strategies,
          'scenarios':[{k:s[k] for k in ['id','label','description']} for s in scens], 'results':results,
          'hedge':{'target_beta':inp['beta_target'],'exact_contracts':exact,'chosen_contracts':n,'smaller_contracts':smaller,'beta_after_chosen':beta['portfolio_beta']['d1']-n*obs['MES']*5/capital},
          'option_model':{'sigma':sigma,'calibrated_price':put(obs['VOO'],o['strike'],o['days']/365,o['r'],o['q'],sigma,o['steps'])}}
    (P/'data.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'),allow_nan=False),encoding='utf8')
    (P/'calculation-results.json').write_text(json.dumps({'inputs':inp,'beta':audit,'strategies':strategies,'scenarios':scens,'results':results},ensure_ascii=False,indent=2,allow_nan=False),encoding='utf8')
    pd.DataFrame(flat).to_csv(P/'calculation-results.csv',index=False)
    summary={'prices':obs,'base_cash':data['base_cash'],'beta':[{k:v for k,v in a.items() if k not in ['start','end']} for a in audit], 'portfolio_beta':beta['portfolio_beta'],'hedge':data['hedge'],'sigma':sigma,'scenario_rows':flat}
    (P/'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf8')
    print(json.dumps({'base_cash':data['base_cash'],'portfolio_beta':beta['portfolio_beta'],'hedge':data['hedge'],'scenario_rows':[{'scenario':f['scenario'],'strategy':f['strategy'],'pnl':round(f['pnl'],2),'cash':round(f['cash'],2),'transfer':round(f['peak_transfer'],2)} for f in flat]},ensure_ascii=False,indent=2))

if __name__=='__main__':build()
