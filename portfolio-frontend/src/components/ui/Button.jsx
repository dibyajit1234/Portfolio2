import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-body text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-pill px-6 py-3";
  
  const variants = {
    primary: "bg-primary text-[#0A0A0A] hover:bg-opacity-90",
    secondary: "bg-transparent text-primary border border-[rgba(255,255,255,0.1)] hover:bg-primary hover:text-[#0A0A0A]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
