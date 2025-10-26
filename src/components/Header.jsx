import React from 'react';
import { Home, Phone } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-amber-500 text-white grid place-items-center shadow-sm">
            <Home size={18} />
          </div>
          <span className="font-semibold tracking-tight">Aurum Interiors</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-amber-600 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors">
          <Phone size={16} />
          Book a Consult
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-28 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Timeless interiors crafted for how you live
            </h1>
            <p className="mt-5 text-neutral-600 max-w-xl">
              From concept to completion, we design elevated, functional spaces that reflect your taste and elevate everyday living.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="px-5 py-3 rounded-md bg-amber-500 text-white font-medium shadow-sm hover:bg-amber-600 transition-colors">View Portfolio</a>
              <a href="#services" className="px-5 py-3 rounded-md border border-neutral-300 font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors">Our Services</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex -space-x-2">
                <img alt="client" src="https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=200&auto=format&fit=crop" className="h-8 w-8 rounded-full object-cover border border-white" loading="lazy" />
                <img alt="client" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" className="h-8 w-8 rounded-full object-cover border border-white" loading="lazy" />
                <img alt="client" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop" className="h-8 w-8 rounded-full object-cover border border-white" loading="lazy" />
              </div>
              <span>Trusted by 200+ homeowners & brands</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1505692952032-9f33f66e5250?q=80&w=1600&auto=format&fit=crop"
                alt="Modern living room interior with warm tones"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-40 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1582582494700-66c0b2a0f6b5?q=80&w=800&auto=format&fit=crop"
                alt="Marble kitchen counter detail"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Header() {
  return (
    <header>
      <Nav />
      <Hero />
    </header>
  );
}
