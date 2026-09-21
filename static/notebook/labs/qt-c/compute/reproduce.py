"""Reproduce QT-C from its preserved 432-row snapshot and frozen parameter contract.

No downloads, account access or workspace writes. Adapted from the inspected
qt-c-data/compute_qt_c.py (frozen version QT-C-inputs-20260921-v1).
Only input loading/output packaging is replaced: this export contains the
selected CSV, not the remote 1.4 MB all-industry source archive.
Usage: python compute/reproduce.py --out rerun
"""
from __future__ import annotations
import argparse, csv, hashlib, json, math, platform
from pathlib import Path
from datetime import datetime, timezone
import numpy as np

ROOT=Path(__file__).resolve().parents[1]
CSV_NAME="BusEq-value-weighted-monthly-199001-202512.csv"
CSV_SHA="72dd0f35d9437d268971de8553827a5c7a4f85ebcf9712c0c1b85ea2ec7cfa74"

def dump(path, obj, compact=False):
    Path(path).write_text(json.dumps(obj,ensure_ascii=False,allow_nan=False,
        indent=None if compact else 2,separators=(",",":") if compact else None)+"\n",encoding="utf-8")

def load():
    cfg=json.loads((ROOT/"data/experiment-config.json").read_text(encoding="utf-8"))
    path=ROOT/"data"/CSV_NAME
    if hashlib.sha256(path.read_bytes()).hexdigest()!=CSV_SHA:
        raise ValueError("Frozen CSV byte identity differs; do not silently update this lesson.")
    rows=list(csv.DictReader(path.open(encoding="utf-8",newline="")))
    expected=[f"{y}{m:02d}" for y in range(1990,2026) for m in range(1,13)]
    if [a["month"] for a in rows]!=expected or len(rows)!=cfg["dataset"]["expected_months"]:
        raise ValueError("Sample months differ.")
    r=np.array([float(a["BusEq_percent"])/cfg["dataset"]["percent_divisor"] for a in rows])
    if not np.isfinite(r).all(): raise ValueError("Non-finite return")
    for i,a in enumerate(rows):
        if float(a["BusEq_percent"]) in cfg["dataset"]["missing_codes"]: raise ValueError("Missing sentinel")
        if int(a["source_line"])!=775+i: raise ValueError("Source line mismatch")
        if not math.isclose(r[i],float(a["return_decimal"]),abs_tol=1e-15): raise ValueError("Unit mismatch")
        if not math.isclose(-r[i],float(a["loss_decimal"]),abs_tol=1e-15): raise ValueError("Sign mismatch")
    return cfg,rows,r

def tail_measure(losses,p,weights=None):
    x=np.asarray(losses,dtype=float)
    if x.ndim!=1 or not len(x) or not np.isfinite(x).all() or not 0<p<1:
        raise ValueError("Finite one-dimensional losses and 0<p<1 required.")
    equal=weights is None
    w=np.full(len(x),1/len(x)) if equal else np.asarray(weights,dtype=float)
    if w.shape!=x.shape or not np.isfinite(w).all() or (w<0).any() or not math.isclose(float(w.sum()),1,rel_tol=0,abs_tol=1e-12):
        raise ValueError("Invalid probability weights; no implicit normalization.")
    ix=np.argsort(x,kind="stable"); a=x[ix]; ww=w[ix]
    right=np.arange(1,len(x)+1)/len(x) if equal else np.cumsum(ww)
    right[-1]=1.; left=np.r_[0.,right[:-1]]
    qi=min(int(np.searchsorted(right,p,side="left")),len(x)-1); q=float(a[qi])
    portions=np.maximum(0.,right-np.maximum(left,p))
    integrated=float(np.dot(a,portions)/(1-p))
    above=x>q; at=x==q
    above_mass=math.fsum(w[above].tolist()); atom=math.fsum(w[at].tolist())
    boundary=1-p-above_mass
    if abs(boundary)<1e-14: boundary=0.
    if boundary< -1e-12 or boundary>atom+1e-12: raise ArithmeticError("Invalid boundary mass")
    es=(math.fsum((x[above]*w[above]).tolist())+boundary*q)/(1-p)
    if not math.isclose(es,integrated,rel_tol=1e-11,abs_tol=1e-12): raise ArithmeticError("ES identities disagree")
    return {"p":p,"VaR":q,"ES":es,"ES_quantile_integral_check":integrated,
      "upper_tail_probability":1-p,"strictly_above_VaR_probability":above_mass,
      "VaR_atom_probability":atom,"included_VaR_atom_probability":boundary,
      "included_fraction_of_VaR_atom":boundary/atom if atom else 0.,
      "naive_conditional_mean_L_ge_VaR":float(np.dot(x[x>=q],w[x>=q])/w[x>=q].sum()),
      "strictly_above_indices_zero_based":np.flatnonzero(above).tolist(),
      "at_VaR_indices_zero_based":np.flatnonzero(at).tolist()}

def describe(r,months,cfg):
    r=np.asarray(r,dtype=float)
    return {"n":len(r),"start":months[0],"end":months[-1],"unit":"monthly decimal return; not annualized",
      "sample_mean":float(r.mean()),"sample_standard_deviation":float(r.std(ddof=cfg["sample_sd_ddof"])),
      "sample_variance":float(r.var(ddof=cfg["sample_sd_ddof"])),
      "empirical_distribution_standard_deviation":float(r.std(ddof=0)),
      "minimum":{"value":float(r.min()),"months":[months[i] for i in np.flatnonzero(r==r.min())]},
      "maximum":{"value":float(r.max()),"months":[months[i] for i in np.flatnonzero(r==r.max())]},
      "return_quantiles":{str(p):float(np.quantile(r,p,method=cfg["quantile_method"])) for p in cfg["return_quantile_levels"]},
      "loss_tail_measures":[tail_measure(-r,p) for p in cfg["tail_levels"]]}

def payoff_model(p,cfg):
    x=np.asarray(cfg["payoffs_usd"],dtype=float); p=np.asarray(p,dtype=float)
    m=float(np.dot(x,p)); second=float(np.dot(x*x,p))
    return {"payoffs_usd":x.tolist(),"probabilities":p.tolist(),"mean_usd":m,
       "second_moment_usd_squared":second,"variance_usd_squared":second-m*m,"sd_usd":math.sqrt(second-m*m)}

def mc(cfg):
    base=payoff_model(cfg["probabilities"],cfg); stress=payoff_model(cfg["stress_probabilities"],cfg)
    sizes=cfg["sample_sizes"]; nmax=max(sizes)
    u=np.random.Generator(np.random.PCG64(cfg["reference_seed"])).random(nmax)
    reference={}
    for name,model in [("base",base),("stress",stress)]:
        cdf=np.cumsum(model["probabilities"]); cdf[-1]=1.
        states=np.searchsorted(cdf,u,side="right"); x=np.asarray(model["payoffs_usd"])[states]
        samples=[]
        for n in sizes:
            sample=x[:n]; estimate=float(sample.mean())
            se=float(sample.std(ddof=cfg["sample_sd_ddof"])/math.sqrt(n)); half=cfg["coverage_interval_z"]*se
            samples.append({"n":n,"state_counts":np.bincount(states[:n],minlength=4).tolist(),"estimate_usd":estimate,
              "error_relative_to_simulated_model_usd":estimate-model["mean_usd"],
              "error_relative_to_base_model_usd":estimate-base["mean_usd"],
              "estimated_SE_usd":se,"theoretical_SE_usd":model["sd_usd"]/math.sqrt(n),
              "CLT_95_interval_usd":[estimate-half,estimate+half],
              "interval_contains_simulated_model_mean":estimate-half<=model["mean_usd"]<=estimate+half})
        running=np.cumsum(x)/np.arange(1,nmax+1)
        ss=np.cumsum(x*x)-np.arange(1,nmax+1)*running**2
        ses=np.sqrt(np.maximum(ss[1:],0.)/np.arange(1,nmax)/np.arange(2,nmax+1))
        reference[name]={"model":model,"sample_sizes":samples,"full_state_indices":states.tolist(),
          "running_mean_n_1_to_nmax":running.tolist(),"running_estimated_SE_n_2_to_nmax":ses.tolist()}
    R=cfg["coverage_repetitions"]; rng=np.random.Generator(np.random.PCG64(cfg["coverage_seed"]))
    means={n:[] for n in sizes}; ses={n:[] for n in sizes}
    cdf=np.cumsum(base["probabilities"]); cdf[-1]=1.; values=np.asarray(base["payoffs_usd"])
    for start in range(0,R,cfg["coverage_chunk_rows"]):
        nr=min(cfg["coverage_chunk_rows"],R-start)
        uu=rng.random((nr,nmax)); xx=values[np.searchsorted(cdf,uu,side="right")]
        for n in sizes:
            a=xx[:,:n]; means[n].append(a.mean(axis=1))
            ses[n].append(a.std(axis=1,ddof=cfg["sample_sd_ddof"])/math.sqrt(n))
    coverage=[]
    for n in sizes:
        m=np.concatenate(means[n]); s=np.concatenate(ses[n])
        lo=m-cfg["coverage_interval_z"]*s; hi=m+cfg["coverage_interval_z"]*s
        hit=(lo<=base["mean_usd"])&(base["mean_usd"]<=hi); c=float(hit.mean())
        coverage.append({"n":n,"R":R,"coverage_count":int(hit.sum()),"coverage_rate":c,
          "coverage_MC_standard_error":math.sqrt(c*(1-c)/R),
          "empirical_bias_usd":float(m.mean()-base["mean_usd"]),
          "empirical_RMSE_usd":float(np.sqrt(np.mean((m-base["mean_usd"])**2))),
          "replicate_mean_SD_usd":float(m.std(ddof=1)),"mean_estimated_SE_usd":float(s.mean()),
          "theoretical_SE_usd":base["sd_usd"]/math.sqrt(n),
          "replicate_means_usd":m.tolist(),"replicate_estimated_SE_usd":s.tolist(),
          "replicate_interval_lower_usd":lo.tolist(),"replicate_interval_upper_usd":hi.tolist(),
          "replicate_covered":hit.tolist()})
    return {"experiment_id":cfg["experiment_id"],"config":cfg,"reference":reference,
      "reference_uniforms":u.tolist(),"coverage":coverage,
      "model_mean_difference_stress_minus_base_usd":stress["mean_usd"]-base["mean_usd"]}

def bootstrap_design(series,kind,cfg,ell=None):
    series=np.asarray(series); n=len(series); B=cfg["repetitions"]
    if kind=="iid":
        seed=cfg["iid_seed"]; idx=np.random.Generator(np.random.PCG64(seed)).integers(0,n,size=(B,n),dtype=np.int64)
        starts=None; boundaries=None; center=float(series.mean()); exactse=float(series.std(ddof=0)/math.sqrt(n))
        multiplicities=np.ones(n,dtype=int)
    elif kind=="moving_block":
        if ell is None or not isinstance(ell,int) or ell<1 or ell>n or n%ell:
            raise ValueError("This frozen design requires positive integral ell dividing n.")
        seed=cfg["moving_block_seed"]; k=math.ceil(n/ell)
        starts=np.random.Generator(np.random.PCG64(seed)).integers(0,n-ell+1,size=(B,k),dtype=np.int64)
        idx=(starts[:,:,None]+np.arange(ell)[None,None,:]).reshape(B,-1)[:,:n]
        if not np.all(np.diff(idx.reshape(B,k,ell),axis=2)==1): raise ArithmeticError("Block order")
        sums=np.convolve(series,np.ones(ell),mode="valid")
        center=float(k*sums.mean()/n); exactse=float(math.sqrt(k*sums.var(ddof=0))/n)
        boundaries=list(range(0,n,ell))+[n]
        multiplicities=np.convolve(np.ones(n-ell+1,dtype=int),np.ones(ell,dtype=int))
    else: raise ValueError("Unknown bootstrap design")
    means=series[idx].mean(axis=1); se=float(means.std(ddof=cfg["se_ddof"]))
    interval=np.quantile(means,cfg["percentile_levels"],method=cfg["percentile_method"])
    return {"method":kind,"block_length":ell,"B":B,"seed":seed,"n":n,
      "original_sample_mean":float(series.mean()),"bootstrap_mean_of_means":float(means.mean()),
      "bootstrap_SE":se,"percentile_95_interval":interval.tolist(),
      "exact_conditional_resampling_center":center,"exact_conditional_resampling_SE":exactse,
      "finite_B_SE_relative_difference_from_exact_conditional":se/exactse-1.,
      "resampling_center_minus_original_mean":center-float(series.mean()),
      "bootstrap_replicate_means":means.tolist(),"first_replicate_indices_zero_based":idx[0].tolist(),
      "first_replicate_values":series[idx[0]].tolist(),
      "first_replicate_block_starts_zero_based":starts[0].tolist() if starts is not None else None,
      "first_replicate_block_boundary_positions":boundaries,
      "edge_multiplicities":multiplicities.tolist()}

def bootstrap(r,cfg):
    a=cfg["ar1"]; rng=np.random.Generator(np.random.PCG64(a["seed"]))
    x0=float(rng.standard_normal()); eps=rng.standard_normal(a["n"])*math.sqrt(a["innovation_variance"])
    x=np.empty(a["n"]); prev=x0
    for i,e in enumerate(eps): x[i]=a["rho"]*prev+e; prev=x[i]
    n=len(x); rho=a["rho"]
    exact=(n+2*math.fsum((n-h)*rho**h for h in range(1,n)))/n**2
    ar={"config":a,"X0":x0,"innovations":eps.tolist(),"X1_to_Xn":x.tolist(),
      "sample_mean":float(x.mean()),"sample_sd":float(x.std(ddof=1)),"model_mean":0.,"model_marginal_variance":1.,
      "exact_finite_n_sample_mean_variance":exact,"exact_finite_n_sample_mean_SE":math.sqrt(exact),
      "iid_counterfactual_SE_for_variance_1":1/math.sqrt(n)}
    series={}
    for name,values in [("French_BusEq",r),("simulated_AR1",x)]:
        series[name]={"unit":"monthly decimal return" if name=="French_BusEq" else "dimensionless simulated variable",
          "designs":[bootstrap_design(values,"iid",cfg)]+[bootstrap_design(values,"moving_block",cfg,l) for l in cfg["block_lengths"]]}
    return {"experiment_id":cfg["experiment_id"],"config":cfg,"AR1":ar,"series":series}

def calculate():
    cfg,rows,r=load(); months=[a["month"] for a in rows]
    desc=describe(r,months,cfg["returns"]); windows=[]
    for begin,end in cfg["dataset"]["sample_windows"]:
        ix=[i for i,m in enumerate(months) if begin<=m<=end]
        windows.append(describe(r[ix],[months[i] for i in ix],cfg["returns"]))
    worst=int(np.argmin(r)); keep=[i for i in range(len(r)) if i!=worst]
    atom=cfg["returns"]["atom_example"]
    return {"version":cfg["version"],"content_version":"2026-09-21-QT-C-draft-v1",
      "recomputed_at_utc":datetime.now(timezone.utc).isoformat(),
      "environment":{"python":platform.python_version(),"numpy":np.__version__,"platform":platform.platform(),
        "rng":"numpy.random.Generator(PCG64)"},
      "dataset":{**cfg["dataset"],"history_identity":"202607当前CIZ整段重建历史；非逐月当时可见vintage",
        "first_source_line":775,"last_source_line":1206,"selected_rows":432,"missing_removed":0,
        "original_archive_included":False,"selected_csv_bytes_verified":True},
      "records":[{"month":a["month"],"percent":float(a["BusEq_percent"]),"r":float(r[i]),
        "loss":float(-r[i]),"source_line":int(a["source_line"])} for i,a in enumerate(rows)],
      "returns":{"config":cfg["returns"],"default":desc,"window_sensitivity":windows,
        "atom_example":{"inputs":atom,"outputs":tail_measure(atom["losses"],atom["p"],atom["probabilities"])},
        "delete_one_worst_month_sensitivity":{"identity":"只作具名教学扰动，不改变主样本或bootstrap",
          "removed_month":months[worst],"removed_return":float(r[worst]),
          "statistics":describe(r[keep],[months[i] for i in keep],cfg["returns"])}},
      "Monte_Carlo":mc(cfg["monte_carlo"]),"bootstrap":bootstrap(r,cfg["bootstrap"])}

def compact_results(obj):
    omit={"records","reference_uniforms","full_state_indices","running_mean_n_1_to_nmax",
      "running_estimated_SE_n_2_to_nmax","replicate_means_usd","replicate_estimated_SE_usd",
      "replicate_interval_lower_usd","replicate_interval_upper_usd","replicate_covered","bootstrap_replicate_means",
      "first_replicate_indices_zero_based","first_replicate_values","first_replicate_block_starts_zero_based",
      "first_replicate_block_boundary_positions","innovations","X1_to_Xn","edge_multiplicities",
      "strictly_above_indices_zero_based","at_VaR_indices_zero_based"}
    if isinstance(obj,dict): return {k:compact_results(v) for k,v in obj.items() if k not in omit}
    if isinstance(obj,list): return [compact_results(v) for v in obj]
    return obj

def main():
    ap=argparse.ArgumentParser(description=__doc__); ap.add_argument("--out",type=Path,default=ROOT/"data")
    args=ap.parse_args(); args.out.mkdir(parents=True,exist_ok=True)
    result=calculate()
    dump(args.out/"results.json",result,compact=True)
    dump(args.out/"result-summary.json",compact_results(result))
    print(json.dumps({"n":len(result["records"]),"mean":result["returns"]["default"]["sample_mean"],
        "coverage":[x["coverage_count"] for x in result["Monte_Carlo"]["coverage"]],
        "output":str(args.out)},ensure_ascii=False))
if __name__=="__main__": main()
