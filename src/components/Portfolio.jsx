import React from 'react';

const projects = [
  {
    title: 'Warm Minimalist Living Room',
    img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Sculptural Dining Nook',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Light-Filled Kitchen',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Serene Bedroom Suite',
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d94?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Modern Workspace',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Boutique Lobby',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-3 text-neutral-600">A glimpse into homes and spaces we have transformed.</p>
          </div>
          <a href="#contact" className="px-4 py-2 rounded-md border border-neutral-300 text-sm font-medium hover:border-neutral-900">Request Portfolio PDF</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <figure key={i} className="group rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform" loading="lazy" />
              </div>
              <figcaption className="p-4 flex items-center justify-between">
                <span className="font-medium">{p.title}</span>
                <span className="text-xs text-neutral-500">Interior Design</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
