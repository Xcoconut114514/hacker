import React from 'react';

export const GradientOrb: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] max-h-[500px] flex items-center justify-center pointer-events-none select-none">
      
      {/* Orbit Rings (SVG) */}
      <div className="absolute inset-[-20%] animate-[spin_60s_linear_infinite] opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-gray-500 fill-none" strokeWidth="0.2">
             <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
             <ellipse cx="50" cy="50" rx="45" ry="10" transform="rotate(-15 50 50)" />
             <ellipse cx="50" cy="50" rx="35" ry="35" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Main Dark Sphere */}
      <div className="relative w-[70%] h-[70%] rounded-full bg-black shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)] overflow-hidden">
        {/* Sphere Gradient / Shading */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-black opacity-90"></div>
        
        {/* Top Highlight (Star/Reflection) */}
        <div className="absolute top-[20%] left-[20%] w-[20%] h-[20%] bg-white blur-[20px] opacity-20 rounded-full"></div>
        
        {/* Subtle grid lines on sphere */}
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, transparent 40%, rgba(255,255,255,0.1) 41%, transparent 42%)`,
            backgroundSize: '100% 100%'
        }}></div>
         <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.5) 20px)`,
        }}></div>
      </div>
      
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50 blur-3xl mix-blend-overlay"></div>
    </div>
  );
};