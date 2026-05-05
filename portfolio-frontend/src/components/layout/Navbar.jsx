import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="font-display font-bold text-xl text-primary tracking-tighter pointer-events-auto cursor-pointer">
        MONOLITHIC
      </div>
      <div className="flex gap-6 pointer-events-auto">
        {['ABOUT', 'WORK', 'APPROACH', 'CONTACT'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="font-mono text-xs text-secondary hover:text-primary transition-colors tracking-widest uppercase"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
