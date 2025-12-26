import React from 'react';
import { Logo } from './components/Logo';
import { GradientOrb } from './components/GradientOrb';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col text-white selection:bg-white selection:text-black">
      
      {/* Background Image - Dark Abstract Wireframe/Void Style */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Dark overlay to ensure text contrast */}
        <img 
          src="/bg.jpg"
          alt="Dark Void Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Header / Logo */}
      <header className="w-full p-6 md:p-12 flex justify-end z-20">
        <Logo />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pb-12 z-10 w-full max-w-8xl mx-auto">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full md:w-3/5 flex flex-col justify-center mt-8 md:mt-0 relative">
          
          {/* Decorative vertical line */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          {/* Title Group */}
          <div className="mb-12 md:mb-20 space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
              Hacker Retreat
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl opacity-90">
              Hacker Retreat is a collaborative experimental residency for AI builders, Web3 architects, researchers, bio-hackers, and creators.
            </p>
          </div>

          {/* Topics List */}
          <div className="space-y-6">
            <div className="group">
                <p className="text-xl md:text-3xl text-gray-400 font-light group-hover:text-white transition-colors duration-300">
                  AI & Agentic Future
                </p>
                <div className="h-[1px] w-0 group-hover:w-24 bg-white transition-all duration-500 mt-2"></div>
            </div>
            <div className="group">
                <p className="text-xl md:text-3xl text-gray-400 font-light group-hover:text-white transition-colors duration-300">
                  Web3 & Networked Civilization
                </p>
                <div className="h-[1px] w-0 group-hover:w-24 bg-white transition-all duration-500 mt-2"></div>
            </div>
            <div className="group">
                <p className="text-xl md:text-3xl text-gray-400 font-light group-hover:text-white transition-colors duration-300">
                  Biohacking & Longevity
                </p>
                <div className="h-[1px] w-0 group-hover:w-24 bg-white transition-all duration-500 mt-2"></div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-12 md:pt-16">
            <p className="text-lg md:text-xl text-gray-400 font-normal mb-2 tracking-wide">
              Chiang Mai · January–February 2026
            </p>
            <p className="text-lg md:text-xl text-white italic font-medium">
              Sponsor opportunities now open
            </p>
          </div>
        </div>

        {/* Right Column: Orb */}
        <div className="flex-1 w-full md:w-2/5 flex flex-col items-center md:items-end justify-center relative mt-12 md:mt-0">
          
          {/* The Gradient Orb */}
          <div className="w-full flex justify-center md:justify-end pr-0 md:pr-12">
             <GradientOrb />
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;