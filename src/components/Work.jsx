import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'Data‑rich insights with real‑time charts and role‑based access.',
    link: '#',
    tags: ['React', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'E‑commerce Platform',
    desc: 'High‑conversion storefront with secure payments and admin tools.',
    link: '#',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Mobile Booking App',
    desc: 'Cross‑platform app with push notifications and offline mode.',
    link: '#',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-24 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected work</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">A peek at projects we loved building with our clients.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 hover:shadow-md transition-shadow">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30" />
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
                </div>
                <ExternalLink className="text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white transition" size={18} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
