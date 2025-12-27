import React from 'react';

// Social Media Data
const socialLinks = [
  {
    name: 'Concept',
    url: 'https://docs.google.com/presentation/d/18hqGIXaT9Nyma8GhTiMR7kpm7l0HqL5uxIbRzEARCe0/edit?usp=sharing',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
      </svg>
    ), // File/Doc icon for Concept/Slides
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/uniclub_1968?igsh=cHhxaTFmY2d6amR0&utm_source=qr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TON',
    url: 'https://t.me/+hcJ97ZnmLVZhNDQ1',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.15-.04-.22-.02-.09.02-1.51.96-4.27 2.82-.4.27-.76.4-1.08.39-.35-.01-1.03-.2-1.54-.35-.62-.19-1.12-.29-1.08-.62.02-.17.26-.35.7-.53 2.75-1.2 4.58-1.99 5.5-2.37 2.62-1.09 3.17-1.28 3.52-1.28.08 0 .25.02.36.11.09.08.12.19.13.27 0 .09.01.27 0 .44z"/>
      </svg>
    ), // Using Telegram/TON style plane
  },
  {
    name: 'X',
    url: 'https://x.com/SolarArk_2048',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Luma',
    url: 'https://luma.com/user/webpsy',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3a6.05 6.05 0 0 1-8.6 0 6.05 6.05 0 0 1 0-8.6 6.05 6.05 0 0 1 8.6 0 6.05 6.05 0 0 1 0 8.6z" />
        <circle cx="15.5" cy="8.5" r="1.5" />
      </svg>
    ), // Abstract simplified Luma/event icon (Circle with internal moon/sun vibe)
  }
];

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
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/bg.png')" }}
        ></div>
      </div>

      {/* Main Content Area - Moved UP by changing justifyContent and adding top padding */}
      <main className="flex-1 flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 pt-16 md:pt-24 z-10 w-full max-w-8xl mx-auto relative">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full md:w-3/5 flex flex-col justify-start relative">
          
          {/* Decorative vertical line */}
          <div className="absolute left-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          {/* Title Group */}
          <div className="mb-12 md:mb-16 space-y-6">
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

          {/* Footer Info & Socials */}
          <div className="pt-12 md:pt-24 mt-auto">
            <div className="mb-8">
                <p className="text-lg md:text-xl text-gray-400 font-normal mb-2 tracking-wide">
                Chiang Mai · January–February 2026
                </p>
                <p className="text-lg md:text-xl text-white italic font-medium">
                Sponsor opportunities now open
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-8 items-center pb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 flex flex-col items-center gap-2 group"
                  aria-label={link.name}
                >
                  <div className="p-2 border border-transparent group-hover:border-white/20 rounded-full transition-all bg-black/20 backdrop-blur-sm">
                    {link.icon}
                  </div>
                  {/* Optional Label on hover if needed, keeping it clean for now */}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Recruitment Buttons */}
        <div className="flex-1 w-full md:w-2/5 flex flex-col items-center md:items-end justify-start relative mt-12 md:mt-2 z-30">
          <div className="flex flex-col gap-6 w-full max-w-sm md:max-w-none md:w-auto sticky top-24">
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