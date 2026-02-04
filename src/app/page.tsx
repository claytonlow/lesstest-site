import React from 'react';
import { CheckCircle2, Zap, Layout, ArrowRight, Github } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">LessTest</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#docs" className="hover:text-indigo-600 transition-colors">Docs</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-8 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v1.0 is now live
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Testing that scales, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            without the weight.
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          The automated testing framework that actually works for developers. 
          Clean, fast, and minimal configuration for modern web apps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <Github className="w-5 h-5" />
            Star on GitHub
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="px-8 py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineered for speed</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Everything you need to test at the speed of thought, without the boilerplate.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Zero Config", desc: "Drop into any repo and run. We auto-detect your setup so you don't have to." },
              { icon: Layout, title: "Parallelized", desc: "Execute hundreds of tests in seconds. Build-in distribution across all CPU cores." },
              { icon: CheckCircle2, title: "Human Readable", desc: "Clear, concise logs that tell you exactly what failed and why—no digging required." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 max-w-7xl mx-auto mt-12 text-center text-slate-400 text-sm">
        <p>© 2026 LessTest Framework. Built for efficiency.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
