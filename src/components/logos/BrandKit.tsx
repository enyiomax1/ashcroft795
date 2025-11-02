import React from 'react';
import AshcroftFullLogo from './AshcroftFullLogo';
import AshcroftLogoHorizontal from './AshcroftLogoHorizontal';
import AshcroftLogoStacked from './AshcroftLogoStacked';
import AshcroftMonogram from './AshcroftMonogram';

// Brand Kit Showcase Component - for export/presentation
export default function BrandKit() {
  const colors = [
    { name: 'Midnight Navy', hex: '#0C1625', rgb: '12, 22, 37', purpose: 'Primary Background' },
    { name: 'Royal Gold', hex: '#C9A33B', rgb: '201, 163, 59', purpose: 'Accent / Highlight' },
    { name: 'Ivory White', hex: '#F7F7F5', rgb: '247, 247, 245', purpose: 'Neutral Background' },
    { name: 'Graphite Black', hex: '#1A1A1A', rgb: '26, 26, 26', purpose: 'Alternate Text' },
    { name: 'Accent Blue', hex: '#3A5FCD', rgb: '58, 95, 205', purpose: 'Optional Accent' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F5] p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-[#0C1625] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ashcroft Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 tracking-widest" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
            BRAND KIT
          </p>
        </div>

        {/* Logo Variations */}
        <section>
          <h2 className="text-3xl text-[#0C1625] mb-8 pb-4 border-b-2 border-[#C9A33B]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Logo Variations
          </h2>
          
          {/* Full Logo - NEW */}
          <div className="space-y-12 mb-16">
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-white/60 mb-6 uppercase tracking-wider">Full Logo - Complete Design (Dark Variant)</p>
              <div className="flex justify-center">
                <AshcroftFullLogo width={800} variant="dark" />
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg border-2 border-gray-200">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Full Logo - Complete Design (Light Variant)</p>
              <div className="flex justify-center">
                <AshcroftFullLogo width={800} variant="light" />
              </div>
            </div>
          </div>

          {/* Horizontal Logos */}
          <div className="space-y-12 mb-16">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Horizontal - Navy/Gold</p>
              <AshcroftLogoHorizontal variant="navy-gold" size="lg" />
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Horizontal - With Tagline</p>
              <AshcroftLogoHorizontal variant="navy-gold" size="lg" withTagline />
            </div>
            
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-white/60 mb-6 uppercase tracking-wider">Horizontal - White/Gold (Dark BG)</p>
              <AshcroftLogoHorizontal variant="white-gold" size="lg" />
            </div>
          </div>

          {/* Stacked Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider text-center">Stacked - Navy/Gold</p>
              <div className="flex justify-center">
                <AshcroftLogoStacked variant="navy-gold" size="md" />
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider text-center">Stacked - With Tagline</p>
              <div className="flex justify-center">
                <AshcroftLogoStacked variant="navy-gold" size="md" withTagline />
              </div>
            </div>
          </div>

          {/* Monogram */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider text-center">Monogram - Light BG</p>
              <div className="flex justify-center">
                <AshcroftMonogram size={80} color="#C9A33B" />
              </div>
            </div>
            
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-white/60 mb-6 uppercase tracking-wider text-center">Monogram - Dark BG</p>
              <div className="flex justify-center">
                <AshcroftMonogram size={80} color="#C9A33B" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-white/60 mb-6 uppercase tracking-wider text-center">Monogram - Gradient BG</p>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl opacity-50">
                    <AshcroftMonogram size={80} color="#C9A33B" />
                  </div>
                  <AshcroftMonogram size={80} color="#C9A33B" className="relative" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl text-[#0C1625] mb-8 pb-4 border-b-2 border-[#C9A33B]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div 
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-6">
                  <h3 className="text-xl text-[#0C1625] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    {color.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{color.purpose}</p>
                  <div className="space-y-1 text-sm font-mono">
                    <p className="text-gray-700">HEX: {color.hex}</p>
                    <p className="text-gray-700">RGB: {color.rgb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl text-[#0C1625] mb-8 pb-4 border-b-2 border-[#C9A33B]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Typography
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Headings - Playfair Display</p>
              <h1 className="text-6xl text-[#0C1625] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                The quick brown fox
              </h1>
              <p className="text-gray-600">Used for high-end marketing headlines and hero text</p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Body & Wordmark - Inter</p>
              <p className="text-2xl text-[#0C1625] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-gray-500 mt-4">Clean, modern, geometric sans-serif for all body copy</p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Tagline Style</p>
              <p className="text-xs text-[#0C1625] tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                DESIGN. AUTOMATE. SCALE.
              </p>
              <p className="text-sm text-gray-500 mt-4">Inter, 500 weight, all caps, 0.15em letter-spacing</p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl text-[#0C1625] mb-8 pb-4 border-b-2 border-[#C9A33B]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl text-[#0C1625] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Clear Space
              </h3>
              <p className="text-gray-600 mb-4">
                Maintain clear space equal to the width of the "A" crossbar around all logo lockups.
              </p>
              <div className="bg-gray-50 p-8 rounded-lg flex justify-center items-center border-2 border-dashed border-gray-300">
                <AshcroftMonogram size={48} />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl text-[#0C1625] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Minimum Size
              </h3>
              <p className="text-gray-600 mb-4">
                Logo should never be smaller than 32px in height for digital, 0.5 inches for print.
              </p>
              <div className="bg-gray-50 p-8 rounded-lg flex justify-center items-center">
                <AshcroftLogoHorizontal variant="navy-gold" size="sm" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
