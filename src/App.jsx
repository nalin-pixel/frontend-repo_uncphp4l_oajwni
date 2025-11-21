import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UnlockForm from './components/UnlockForm'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UnlockForm />
      <FAQ />
      <footer className="py-10 border-t border-white/10 bg-slate-900/80 text-center">
        <p className="text-sm text-blue-200/60">© {new Date().getFullYear()} Phone Unlock Pro. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
