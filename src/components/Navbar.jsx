import React from 'react';
import { Rocket, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Flames Softworks</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Phone size={16} />
              <span>Book a call</span>
            </a>
          </nav>
          <a href="#contact" className="md:hidden inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
