import React from 'react';

export function Card({ title, description, imageUrl, tags = [], className = '' }) {
  return (
    <div className={`bg-background border-b border-[rgba(255,255,255,0.05)] group flex flex-col md:flex-row ${className}`}>
      {imageUrl && (
        <div className="w-full md:w-1/2 lg:w-3/5 aspect-[16/9] md:aspect-auto md:min-h-[500px] bg-background overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-[1000ms] ease-[0.16,1,0.3,1]"
          />
        </div>
      )}
      <div className="p-10 md:p-16 w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center bg-background">
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span key={i} className="font-mono text-[10px] uppercase tracking-widest text-secondary border border-[rgba(255,255,255,0.1)] px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-none tracking-tight">{title}</h3>
        <p className="font-body text-secondary text-lg leading-relaxed max-w-md">{description}</p>
      </div>
    </div>
  );
}
