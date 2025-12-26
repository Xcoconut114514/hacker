import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Pixel Art Infinity Symbol Simulation */}
      <div className="w-32 h-16 relative">
        <svg viewBox="0 0 64 32" className="w-full h-full fill-current">
            <defs>
                <linearGradient id="pixel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d946ef" /> {/* Pink */}
                    <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan */}
                </linearGradient>
            </defs>
            {/* Left Loop */}
            <rect x="8" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.8" />
            <rect x="4" y="8" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="4" y="12" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="4" y="16" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="8" y="20" width="4" height="4" fill="url(#pixel-grad)" opacity="0.8" />
            <rect x="12" y="24" width="4" height="4" fill="url(#pixel-grad)" opacity="0.7" />
            <rect x="16" y="24" width="4" height="4" fill="url(#pixel-grad)" opacity="0.6" />
            <rect x="20" y="20" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            <rect x="24" y="16" width="4" height="4" fill="url(#pixel-grad)" opacity="0.4" />
            
            {/* Center Cross */}
            <rect x="28" y="12" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            <rect x="32" y="12" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            
            {/* Right Loop */}
            <rect x="36" y="16" width="4" height="4" fill="url(#pixel-grad)" opacity="0.4" />
            <rect x="40" y="20" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            <rect x="44" y="24" width="4" height="4" fill="url(#pixel-grad)" opacity="0.6" />
            <rect x="48" y="24" width="4" height="4" fill="url(#pixel-grad)" opacity="0.7" />
            <rect x="52" y="20" width="4" height="4" fill="url(#pixel-grad)" opacity="0.8" />
            <rect x="56" y="16" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="56" y="12" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="56" y="8" width="4" height="4" fill="url(#pixel-grad)" opacity="0.9" />
            <rect x="52" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.8" />
            <rect x="48" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.7" />
            <rect x="44" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.6" />
            <rect x="40" y="8" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            <rect x="36" y="12" width="4" height="4" fill="url(#pixel-grad)" opacity="0.4" />
            
             {/* Left Loop Top (Completing the cross) */}
            <rect x="24" y="8" width="4" height="4" fill="url(#pixel-grad)" opacity="0.5" />
            <rect x="20" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.6" />
            <rect x="16" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.7" />
            <rect x="12" y="4" width="4" height="4" fill="url(#pixel-grad)" opacity="0.7" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="font-pixel text-2xl tracking-widest text-gray-200">
        WebPsy Labs
      </div>
    </div>
  );
};