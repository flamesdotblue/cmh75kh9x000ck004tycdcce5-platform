import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s design your dream space</h2>
            <p className="mt-3 text-neutral-600">Tell us a bit about your project. We typically reply within one business day.</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-neutral-700" />
                <a href="tel:+1234567890" className="hover:text-amber-600">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-neutral-700" />
                <a href="mailto:hello@auruminteriors.com" className="hover:text-amber-600">hello@auruminteriors.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-neutral-700" />
                <span>427 Mercer Ave, Suite 12, San Francisco, CA</span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                <div className="text-2xl font-semibold">200+</div>
                <div className="text-sm text-neutral-600">Projects</div>
              </div>
              <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                <div className="text-2xl font-semibold">8 yrs</div>
                <div className="text-sm text-neutral-600">Experience</div>
              </div>
              <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                <div className="text-2xl font-semibold">4.9/5</div>
                <div className="text-sm text-neutral-600">Client Rating</div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">First name</label>
                <input type="text" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Alex" />
              </div>
              <div>
                <label className="text-sm font-medium">Last name</label>
                <input type="text" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Morgan" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Project details</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell us about your space, timeline, and budget"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800">
              Send Inquiry
            </button>
            <p className="mt-3 text-xs text-neutral-500">We respect your privacy. Your information will never be shared.</p>
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-600 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aurum Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#portfolio" className="hover:text-neutral-900">Portfolio</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
