import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
            <span className="text-white font-semibold text-lg">Phone Unlock Pro</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#form" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition">Start Unlock</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-blue-100" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2 text-blue-100">
            <a href="#features" className="block">Features</a>
            <a href="#how" className="block">How it works</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#faq" className="block">FAQ</a>
            <a href="#form" className="block px-4 py-2 rounded-lg bg-blue-500 text-white text-center">Start Unlock</a>
          </div>
        )}
      </div>
    </header>
  );
}
