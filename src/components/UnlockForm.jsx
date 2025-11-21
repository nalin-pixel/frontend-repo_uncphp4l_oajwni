import { useState } from "react";

const BRANDS = ["Apple", "Samsung", "Google", "Huawei", "Xiaomi", "Other"];
const ISSUES = [
  "Carrier Lock",
  "Activation Lock / iCloud",
  "Screen Lock / FRP",
  "Network Blacklist",
  "Other"
];

export default function UnlockForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);

  const [data, setData] = useState({
    brand: "",
    model: "",
    issue: "",
    imei: "",
    region: "",
    name: "",
    email: "",
    notes: "",
  });

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async () => {
    setLoading(true);
    setDone(null);
    try {
      const res = await fetch(`${backend}/api/unlock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      setDone({ ok: true, id: json.id, message: json.message });
      setStep(4);
    } catch (e) {
      setDone({ ok: false, message: e.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 text-xs text-blue-200/80">
      {[1,2,3,4].map((i) => (
        <div key={i} className={`h-1 rounded-full transition-all ${
          i <= step ? "bg-blue-500 w-10" : "bg-white/10 w-6"
        }`} />
      ))}
    </div>
  );

  return (
    <section id="form" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Start your unlock</h2>
            <StepIndicator />
          </div>

          {step === 1 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Brand</label>
                <select
                  className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white"
                  value={data.brand}
                  onChange={(e)=>setData({...data, brand:e.target.value})}
                >
                  <option value="">Select brand</option>
                  {BRANDS.map((b)=> <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Model</label>
                <input className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" placeholder="e.g., iPhone 14 Pro"
                  value={data.model} onChange={(e)=>setData({...data, model:e.target.value})}/>
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Issue</label>
                <select
                  className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white"
                  value={data.issue}
                  onChange={(e)=>setData({...data, issue:e.target.value})}
                >
                  <option value="">Select issue</option>
                  {ISSUES.map((b)=> <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">IMEI / Serial</label>
                <input className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" placeholder="15-digit IMEI or serial"
                  value={data.imei} onChange={(e)=>setData({...data, imei:e.target.value})}/>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button disabled className="px-4 py-2 rounded-lg border border-white/10 text-blue-200/70">Back</button>
                <button onClick={next} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400">Next</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Region / Carrier</label>
                <input className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" placeholder="e.g., AT&T USA, O2 UK, etc."
                  value={data.region} onChange={(e)=>setData({...data, region:e.target.value})}/>
              </div>
              <div>
                <label className="block text-sm text-blue-200/80 mb-1">Additional notes</label>
                <textarea className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" rows={4} placeholder="Describe anything important"
                  value={data.notes} onChange={(e)=>setData({...data, notes:e.target.value})}/>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={prev} className="px-4 py-2 rounded-lg border border-white/10 text-blue-200/90">Back</button>
                <button onClick={next} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400">Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200/80 mb-1">Full name</label>
                  <input className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" placeholder="Your name"
                    value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
                </div>
                <div>
                  <label className="block text-sm text-blue-200/80 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 text-white" placeholder="you@example.com"
                    value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/60 border border-white/10 p-4 text-sm text-blue-200/80">
                <div className="font-medium text-white mb-2">Summary</div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  <li><span className="text-white">Brand:</span> {data.brand || '-'} </li>
                  <li><span className="text-white">Model:</span> {data.model || '-'} </li>
                  <li><span className="text-white">Issue:</span> {data.issue || '-'} </li>
                  <li><span className="text-white">IMEI:</span> {data.imei || '-'} </li>
                  <li><span className="text-white">Region:</span> {data.region || '-'} </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={prev} className="px-4 py-2 rounded-lg border border-white/10 text-blue-200/90">Back</button>
                <button disabled={loading} onClick={submit} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400">
                  {loading ? 'Submitting...' : 'Submit request'}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mt-6">
              {done?.ok ? (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-green-200">
                  <div className="text-white font-semibold">Request submitted</div>
                  <p className="text-sm mt-1">{done.message}</p>
                  <p className="text-xs mt-2 opacity-75">Reference ID: {done.id}</p>
                </div>
              ) : (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
                  <div className="text-white font-semibold">Something went wrong</div>
                  <p className="text-sm mt-1">{done?.message || 'Please try again.'}</p>
                </div>
              )}
              <div className="mt-6 flex items-center justify-end">
                <button onClick={() => { setStep(1); setData({ brand:"", model:"", issue:"", imei:"", region:"", name:"", email:"", notes:""}); setDone(null); }}
                  className="px-4 py-2 rounded-lg border border-white/10 text-blue-200/90">New request</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
