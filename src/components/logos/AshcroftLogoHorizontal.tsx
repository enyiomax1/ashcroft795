import React from 'react';
import AshcroftMonogram from './AshcroftMonogram';

interface LogoProps {
  variant?: 'navy-gold' | 'graphite-ivory' | 'white-gold' | 'gold-navy';
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AshcroftLogoHorizontal({ 
  variant = 'navy-gold',
  withTagline = false,
  size = 'md',
  className = '' 
}: LogoProps) {
  const sizes = {
    sm: { height: 32, iconSize: 32, fontSize: 'text-sm', taglineSize: 'text-[9px]' },
    md: { height: 48, iconSize: 48, fontSize: 'text-lg', taglineSize: 'text-[10px]' },
    lg: { height: 64, iconSize: 64, fontSize: 'text-2xl', taglineSize: 'text-xs' },
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
    <div className={`flex items-center gap-4 ${className}`}>
      <AshcroftMonogram 
        size={currentSize.iconSize} 
        color={currentColors.icon}
      />
      <div className="flex flex-col justify-center">
        <div 
          className={`${currentSize.fontSize} leading-none tracking-wider`}
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
          className={`${currentSize.fontSize} leading-none tracking-wider opacity-60 mt-0.5`}
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
            className={`${currentSize.taglineSize} leading-none mt-2 opacity-50`}
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
