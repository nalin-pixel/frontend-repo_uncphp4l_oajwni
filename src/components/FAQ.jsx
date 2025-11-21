export default function FAQ(){
  const faqs = [
    {q:"Is this legal?", a:"Yes. We follow compliant methods and respect device ownership laws in your region."},
    {q:"How long does it take?", a:"Many complete within hours. You'll be kept updated by email."},
    {q:"What if it doesn't work?", a:"We provide a clear refund policy when eligibility requirements are met."},
    {q:"Do I lose my data?", a:"Our process is designed to keep your data safe whenever possible."},
  ];
  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center">FAQ</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <div className="text-white font-semibold">{f.q}</div>
              <p className="text-blue-200/80 text-sm mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
