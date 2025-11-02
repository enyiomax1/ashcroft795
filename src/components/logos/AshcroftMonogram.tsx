import React from 'react';

interface MonogramProps {
  size?: number;
  color?: string;
  bgColor?: string;
  className?: string;
  transparent?: boolean;
}

export default function AshcroftMonogram({ 
  size = 48, 
  color = '#EAC16D',
  bgColor = '#0D1D2D',
  className = '',
  transparent = false
}: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 956 956"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background - can be transparent */}
      {!transparent && (
        <path 
          transform="translate(0)" 
          d="m0 0h956v956h-956z" 
          fill={bgColor}
        />
      )}
      
      {/* Main gold monogram */}
      <path 
        transform="translate(463,127)" 
        d="m0 0h40l6 2 12 23 14 27 52 104 10 19 29 58 9 19 8 16 11 21 9 19 10 19 16 32 10 19 35 70 10 19 23 46 10 19 10 21 9 17 13 28 8 16 20 41 10 19 5 10h-3l-12-11-13-10-12-10-9-7-12-10-9-7-14-11-20-15-18-13-14-10-18-13-19-13-17-12-17-11-22-14-23-15-10-7-6 1-22 12-32 17-29 15-34 18-27 14-22 12-29 15-22 12-39 20-22 12-21 11-16 8-33 17-51 27-24 13-5 3-4 1h-56l-1-3 56-112 11-23 10-21 10-19 45-90 11-23 18-37 10-19 24-50 25-50 11-23 9-17 11-23 11-22 10-19 19-39 32-64 9-17 21-42 5-9z" 
        fill={color}
      />
      
      {/* Dark accent detail */}
      <path 
        transform="translate(479,201)" 
        d="m0 0h2l22 44 10 19 10 20 10 19 21 42 10 19 19 38 10 19 14 27 15 30 11 23 10 20 10 19 10 20 9 17 8 16 11 21v3l-5-2v-2l-4-2-12-9-20-14-45-30-34-21-29-17-21-12-23-13-24-13-18-10-23-13-28-15-36-20 1-6 8-16 10-19 11-23 9-17 9-19 8-16 17-33 9-17 16-32 9-19z" 
        fill={transparent ? 'rgba(13, 29, 45, 0.3)' : bgColor}
      />
      
      {/* Bottom accent detail */}
      <path 
        transform="translate(345,469)" 
        d="m0 0 4 2 21 13 24 14 20 12 24 15 19 12 19 13 13 9 14 10 18 13 10 7-5 4-29 15-51 27-28 15-15 8-16 8-29 15-22 12-17 9-16 8-31 16-22 12-27 14-20 11-4-1 13-25 11-23 31-62 9-17 11-23 28-56 12-25 10-19 11-23 9-19z" 
        fill={transparent ? 'rgba(13, 29, 45, 0.3)' : bgColor}
      />
    </svg>
  );
}
