import logoImage from 'figma:asset/14cce238a57995f1442999e447493256f58f72c5.png';

interface AshcroftSymbolProps {
  variant?: 'dark' | 'light'; // dark = gold symbol, light = navy symbol
  size?: number;
}

export default function AshcroftSymbol({ variant = 'dark', size = 45 }: AshcroftSymbolProps) {
  return (
    <div 
      className="relative overflow-hidden flex items-center justify-center"
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
      }}
    >
      <img
        src={logoImage}
        alt="Ashcroft Digital Solutions"
        className="w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          objectPosition: variant === 'dark' ? '8% center' : '58% center',
          transform: 'scale(4.5)',
        }}
      />
    </div>
  );
}
