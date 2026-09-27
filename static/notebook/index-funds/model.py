"""Reproduce the explicit weighting/fee examples and their standalone charts."""
from pathlib import Path
import csv,json
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import font_manager
from matplotlib.ticker import FuncFormatter

P=Path(__file__).resolve().parent
font=Path('C:/Windows/Fonts/msyh.ttc')
if font.exists():
    font_manager.fontManager.addfont(str(font))
    plt.rcParams['font.family']=font_manager.FontProperties(fname=str(font)).get_name()
plt.rcParams.update({'font.size':11,'axes.unicode_minus':False,'svg.fonttype':'path','figure.facecolor':'#fafbf8','axes.facecolor':'#fafbf8','text.color':'#253e35','axes.labelcolor':'#617268','xtick.color':'#617268','ytick.color':'#617268'})
data=json.loads((P/'inputs.json').read_text(encoding='utf-8'))
rows=[]
for kind,start in [('cap',[.4,.3,.2,.1]),('equal',[.25]*4)]:
    before=np.array(start)*10000
    drift=before*np.array([1.4,.9,1,1.1])
    for stage in range(3):
        values=before if stage==0 else (np.full(4,drift.sum()/4) if stage==2 and kind=='equal' else drift)
        for i,v in enumerate(values):rows.append([kind,stage,chr(65+i),float(v),float(v/values.sum()),float(values.sum()),''])
fees=data['fee_example']['rates']
for year in range(21):
    for fee in fees:rows.append(['fees',year,str(fee),10000*(1.06*(1-fee))**year,'','',fee])
with (P/'calculations.csv').open('w',encoding='utf-8',newline='') as f:
    w=csv.writer(f);w.writerow(['example','stage_or_year','asset_or_fee','value_usd','weight','portfolio_value_usd','annual_fee']);w.writerows(rows)

snap=data['concentration']; top=snap['top_ten']; colors=['#24664f','#5986a1','#b47550']
fig,left=plt.subplots(figsize=(8,5.6))
fig.subplots_adjust(left=.24,right=.90,top=.76,bottom=.14)
bar_colors=['#24664f' if v['industry']=='Semiconductors' else '#7aa88d' if v['sector']=='Information Technology' else '#b47550' if v['sector']=='Communication Services' else '#a6b199' for v in top]
left.barh(np.arange(10),[v['weight_percent'] for v in top],height=.57,color=bar_colors)
left.set_yticks(np.arange(10),[v['ticker_label'] for v in top],fontsize=16)
left.invert_yaxis();left.set_xlim(0,8.6)
for i,v in enumerate(top):left.text(v['weight_percent']+.13,i,f"{v['weight_percent']:.1f}%",va='center',fontsize=16)
left.xaxis.set_major_formatter(FuncFormatter(lambda x,p:f'{x:g}%'))
left.set_xticks([0,2,4,6,8])
left.set_axisbelow(True);left.grid(axis='x',color='#dce3da',lw=.6);left.tick_params(axis='both',length=0,pad=7)
for spine in left.spines.values():spine.set_visible(False)
fig.text(.04,.95,'VOO 前十大持股公司',fontsize=18,weight='bold',va='top')
fig.text(.04,.855,'2026-06-30 · 占基金净资产 · 前十合计 37.9%',fontsize=12,color='#617268',va='top')
fig.text(.04,.025,'GOOGL 与 GOOG 按 Alphabet 一家公司合并。',fontsize=10,color='#617268',va='bottom')
fig.savefig(P/'voo-concentration.svg');plt.close(fig)

fig,ax=plt.subplots(figsize=(10,6));fig.subplots_adjust(left=.12,right=.94,top=.80,bottom=.16)
t=np.arange(21)
for fee,color in zip(fees,colors):
    values=10000*(1.06*(1-fee))**t
    ax.plot(t,values,color=color,lw=2.5,label=f'年度费用率 {fee*100:.2f}%')
    ax.scatter([20],[values[-1]],s=22,color=color,zorder=3)
ax.set_xlim(0,20.5);ax.set_ylim(9000,33000);ax.set_xticks([0,5,10,15,20]);ax.set_xlabel('持有年数',labelpad=10)
ax.yaxis.set_major_formatter(FuncFormatter(lambda x,p:f'{x:,.0f}'))
ax.set_ylabel('资金金额（美元）',labelpad=12);ax.grid(color='#dce3da',lw=.65);ax.set_axisbelow(True)
for spine in ax.spines.values():spine.set_visible(False)
ax.tick_params(length=0,pad=8)
fig.text(.04,.96,'相同投资回报，不同持续费用',fontsize=17,weight='bold',va='top')
fig.text(.04,.865,'初始 10,000 美元，费用前年收益率固定为 6%',fontsize=11,color='#617268',va='top')
ax.legend(loc='upper left',frameon=False,fontsize=10)
fig.savefig(P/'fees.svg');plt.close(fig)
print(json.dumps({'fee_20y':[10000*(1.06*(1-f))**20 for f in fees],'equal_drift':[3500/11000,2250/11000,2500/11000,2750/11000]},ensure_ascii=True))
