import React from 'react';
import AshcroftMonogram from './AshcroftMonogram';

interface LogoProps {
  variant?: 'navy-gold' | 'graphite-ivory' | 'white-gold' | 'gold-navy';
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AshcroftLogoStacked({ 
  variant = 'navy-gold',
  withTagline = false,
  size = 'md',
  className = '' 
}: LogoProps) {
  const sizes = {
    sm: { iconSize: 48, fontSize: 'text-base', taglineSize: 'text-[9px]' },
    md: { iconSize: 64, fontSize: 'text-xl', taglineSize: 'text-[10px]' },
    lg: { iconSize: 80, fontSize: 'text-3xl', taglineSize: 'text-xs' },
  };

  const colors = {
    'navy-gold': { 
      icon: '#C9A33B', 
      text: '#0C1625',
      tagline: '#0C1625'
    },
    'graphite-ivory': { 
      icon: '#C9A33B', 
      text: '#1A1A1A',
      tagline: '#1A1A1A'
    },
    'white-gold': { 
      icon: '#C9A33B', 
      text: '#FFFFFF',
      tagline: '#FFFFFF'
    },
    'gold-navy': { 
      icon: '#C9A33B', 
      text: '#0C1625',
      tagline: '#C9A33B'
    },
  };

  const currentSize = sizes[size];
  const currentColors = colors[variant];

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <AshcroftMonogram 
        size={currentSize.iconSize} 
        color={currentColors.icon}
      />
      <div className="flex flex-col items-center">
        <div 
          className={`${currentSize.fontSize} leading-none tracking-wider text-center`}
          style={{ 
            color: currentColors.text,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}
        >
          ASHCROFT
        </div>
        <div 
          className={`${currentSize.fontSize} leading-none tracking-wider opacity-60 mt-1 text-center`}
          style={{ 
            color: currentColors.text,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}
        >
          DIGITAL SOLUTIONS
        </div>
        {withTagline && (
          <div 
            className={`${currentSize.taglineSize} leading-none mt-3 opacity-50 text-center`}
            style={{ 
              color: currentColors.tagline,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.15em'
            }}
          >
            DESIGN. AUTOMATE. SCALE.
          </div>
        )}
      </div>
    </div>
  );
}
