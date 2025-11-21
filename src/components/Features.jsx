import { Shield, Zap, Globe, CreditCard } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Shield, title: "Secure & Verified", desc: "Trusted methods with clear status updates and refund policy." },
    { icon: Zap, title: "Fast Turnaround", desc: "Most requests processed within hours, not days." },
    { icon: Globe, title: "Worldwide Support", desc: "We handle devices and carriers across regions." },
    { icon: CreditCard, title: "Simple Pricing", desc: "Transparent fees with no hidden costs." },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center">Why choose us</h2>
        <p className="text-blue-200/80 text-center mt-2">Better experience than the other site, with clarity and speed.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
