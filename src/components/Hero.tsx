import React from 'react';
import { CalendarDays } from 'lucide-react';

const Hero = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-24 pb-12 lg:pt-40 overflow-hidden">
      {/* Abstract background graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-200/50 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold tracking-wider uppercase mb-6 border border-gray-200">
            Presented by JCOML Salem 1.0
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-4 uppercase">
            BUB EXPO <span className="text-primary block mt-2">2026</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">
            3-Day Mega Business Expo
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-lg text-gray-600 mb-6 font-medium">
            <CalendarDays className="w-5 h-5 text-primary" />
            <span>This August</span>
            <span className="text-gray-300">|</span>
            <span>Salem</span>
          </div>

          <div className="p-6 bg-gray-50 border-l-4 border-primary rounded-r-2xl mb-8 w-full max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold mb-2">Build UR Business</h2>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Shop &bull; Discover &bull; Experience &bull; Connect
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_4px_10px_rgba(255,107,0,0.4)] hover:-translate-y-1 transition-all active:translate-y-0 text-center"
            >
              Book Stall
            </button>
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(17,17,17,0.2)] hover:shadow-[0_4px_10px_rgba(17,17,17,0.3)] hover:-translate-y-1 transition-all active:translate-y-0 hover:bg-primary text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-full max-w-md aspect-square bg-gray-100 rounded-full flex items-center justify-center p-12 shadow-2xl border-4 border-white">
            <div className="absolute inset-0 border-2 border-primary rounded-full rounded-tr-none rotate-45 opacity-20"></div>
            {/* Logo representation */}
            <div className="text-center">
              <span className="font-heading font-black text-[120px] leading-none tracking-tighter text-foreground block">BUB</span>
              <span className="font-heading font-bold text-5xl tracking-widest text-primary block mt-[-10px]">EXPO</span>
              <span className="font-sans font-bold text-sm tracking-[0.3em] text-gray-500 block mt-4">SALEM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
