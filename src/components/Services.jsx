import React from 'react';
import { Home, MapPin, Star } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-5 w-5" />,
    title: 'Full-Service Interior Design',
    desc: 'End-to-end design for renovations, new builds, and room makeovers including sourcing and project management.'
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Space Planning & Layouts',
    desc: 'Functional floor plans that maximize natural light, flow, and everyday usability for homes and boutique spaces.'
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Styling & Procurement',
    desc: 'Curated furnishings, art, and decor tailored to your style and budget, installed to perfection.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services</h2>
          <p className="mt-3 text-neutral-600">Thoughtful, detail-driven design tailored to your lifestyle and vision.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-amber-100 text-amber-700 grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex gap-1 text-amber-500" aria-hidden>
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
                <Star size={16} fill="#f59e0b" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
