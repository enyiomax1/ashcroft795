import logoImage from 'figma:asset/11411d6e6044ccf21d19074cade848bd4743cb52.png';

interface AshcroftCustomLogoProps {
  height?: number;
}

export default function AshcroftCustomLogo({ height = 60 }: AshcroftCustomLogoProps) {
  return (
    <img
      src={logoImage}
      alt="Ashcroft Digital Solutions"
      className="h-auto w-auto object-contain"
      style={{ height: `${height}px` }}
    />
  );
}
