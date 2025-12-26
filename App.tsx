import React from 'react';
import { Logo } from './components/Logo';

const recruitmentButtons = [
  {
    label: 'Sponsor Recruitment',
    description: 'Support cross-disciplinary innovation and gain visibility, speaking opportunities, and collaboration rights.',
    actionText: 'Become a Sponsor'
  },
  {
    label: 'Guest Speaker Recruitment',
    description: 'We invite researchers, speakers, workshop hosts, and practitioners to contribute sessions and dialogues.',
    actionText: 'Apply as Guest Speaker'
  },
  {
    label: 'Co-Builder Recruitment',
    description: 'Join our long-term builder network — developers, designers, researchers, and community organizers.',
    actionText: 'Join as Co-Builder'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col text-white selection:bg-white selection:text-black">
      
      {/* Background Image - Restored bg.png */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Dark overlay to ensure text contrast */}
        <div 
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/bg.png')" }}
        ></div>
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

        {/* Right Column: Recruitment Buttons */}
        <div className="flex-1 w-full md:w-2/5 flex flex-col items-center md:items-end justify-center relative mt-16 md:mt-0 z-30">
          <div className="flex flex-col gap-6 w-full max-w-sm md:max-w-none md:w-auto">
            {recruitmentButtons.map((btn, index) => (
              <div key={index} className="group relative flex items-center justify-end">
                
                {/* Tooltip / Description (Left side on desktop) */}
                <div className="absolute right-0 top-full mt-4 md:mt-0 md:top-1/2 md:-translate-y-1/2 md:right-full md:mr-6 w-full md:w-72 p-4 bg-black/90 border border-gray-700 rounded-sm text-sm text-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <p className="mb-2 leading-relaxed">{btn.description}</p>
                  <div className="flex items-center text-xs text-white font-semibold uppercase tracking-wider">
                    <span className="mr-2">👉</span> {btn.actionText}
                  </div>
                </div>

                {/* Button */}
                <button className="w-full md:w-auto px-8 py-4 border border-gray-600 bg-black/40 text-white font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-widest text-sm backdrop-blur-sm text-center md:text-right">
                  {btn.label}
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
