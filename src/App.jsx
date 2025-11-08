import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Flames Softworks. All rights reserved.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Built with care • Cheerful and professional
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
