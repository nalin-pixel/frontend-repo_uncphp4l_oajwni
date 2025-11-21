export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] h-72 rounded-full bg-blue-500/10 blur-3xl"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Unlock your phone safely, legally, and fast
            </h1>
            <p className="mt-4 text-blue-100/90 text-lg">
              Remove carrier locks, activation locks, and screen locks for top brands with expert support. No tech skills required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#form" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition shadow">
                Start your unlock
              </a>
              <a href="#how" className="px-5 py-3 rounded-xl border border-white/10 text-blue-100 hover:bg-white/5 transition">
                See how it works
              </a>
            </div>
            <p className="mt-6 text-blue-200/70 text-sm">24/7 support • Refund guarantee • Secure process</p>
          </div>
          <div className="relative">
            <img src="/phone-hero.png" alt="Unlock" className="w-full max-w-md mx-auto drop-shadow-[0_20px_60px_rgba(59,130,246,0.3)]"/>
            <div className="absolute -z-10 top-10 right-10 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
