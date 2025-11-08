import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something great</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Tell us about your idea and we’ll get back within 1 business day.</p>
        </div>
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Project details</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" />
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="inline-flex items-center gap-2"><Mail size={16} /> hello@flamessoftworks.com</span>
                <span className="inline-flex items-center gap-2"><Phone size={16} /> +1 (555) 012‑3456</span>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-amber-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
                <Send size={16} /> Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
