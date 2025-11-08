import React from 'react';
import { Code, Smartphone, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Applications',
    desc: 'Scalable, secure, and fast web apps tailored to your business goals.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Experiences',
    desc: 'Delightful cross‑platform apps that feel right at home on any device.',
  },
  {
    icon: Globe,
    title: 'Websites & Landing Pages',
    desc: 'Modern marketing sites that convert visitors into customers.',
  },
  {
    icon: Sparkles,
    title: 'UI/UX & Branding',
    desc: 'Playful yet professional visuals that your customers will love.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">What we do</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">End‑to‑end product development with a friendly, transparent process.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-amber-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
