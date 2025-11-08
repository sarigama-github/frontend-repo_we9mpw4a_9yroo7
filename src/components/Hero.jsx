import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 py-20 lg:py-28">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-black/10 dark:ring-white/10">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for new projects</span>
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Modern, cheerful and professional software for your business
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
                We craft delightful digital products—websites, apps, and platforms—combining robust engineering with playful, human-centered design.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-amber-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
                  Start a project
                </a>
                <a href="#work" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">
                  See our work
                </a>
              </div>
            </div>
            <div className="lg:col-span-6"></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
};

export default Hero;
