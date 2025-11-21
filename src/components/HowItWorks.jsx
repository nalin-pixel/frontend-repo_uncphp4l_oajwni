export default function HowItWorks() {
  const steps = [
    { title: "Tell us about your device", desc: "Brand, model, issue, and IMEI/serial to verify eligibility." },
    { title: "We confirm options", desc: "You'll receive email updates with exact steps and pricing." },
    { title: "We process the unlock", desc: "Follow clear instructions. Most complete within hours." },
    { title: "Enjoy your unlocked phone", desc: "Use any carrier or restore access while keeping your data safe." },
  ];

  return (
    <section id="how" className="py-20 bg-slate-900/95">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <div className="text-blue-400 font-semibold">Step {i+1}</div>
              <h3 className="text-white mt-1 font-semibold">{s.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
