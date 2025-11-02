import React from 'react';
import AshcroftFullLogo from './AshcroftFullLogo';
import AshcroftLogoHorizontal from './AshcroftLogoHorizontal';
import AshcroftLogoStacked from './AshcroftLogoStacked';
import AshcroftMonogram from './AshcroftMonogram';

// Logo Export Component - All variations for easy export
export default function LogoExport() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Instructions */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl mb-4">Ashcroft Digital Solutions - Logo Assets</h1>
          <p className="text-gray-600 mb-4">
            Right-click on any logo below and "Save As" SVG, or use browser dev tools to export.
            All logos are vector-based and scalable.
          </p>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Export Tip:</strong> Open browser dev tools → Right-click SVG element → Copy outerHTML → Save as .svg file
            </p>
          </div>
        </div>

        {/* FULL LOGO - NEW */}
        <div className="space-y-6">
          <h2 className="text-2xl">Full Logo (Complete Design)</h2>
          
          {/* Full Logo - Dark Variant */}
          <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-white/60 uppercase tracking-wider">
              ashcroft-full-logo-dark.svg
            </div>
            <div className="flex justify-center" id="full-logo-dark">
              <AshcroftFullLogo width={800} variant="dark" />
            </div>
          </div>

          {/* Full Logo - Light Variant */}
          <div className="bg-white p-12 rounded-2xl shadow-lg border-2 border-gray-200">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider">
              ashcroft-full-logo-light.svg
            </div>
            <div className="flex justify-center" id="full-logo-light">
              <AshcroftFullLogo width={800} variant="light" />
            </div>
          </div>
        </div>

        {/* HORIZONTAL LOGOS */}
        <div className="space-y-6">
          <h2 className="text-2xl">Horizontal Lockups</h2>
          
          {/* Horizontal - Navy/Gold */}
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider">
              horizontal-navy-gold.svg
            </div>
            <div className="flex justify-center" id="horizontal-navy-gold">
              <AshcroftLogoHorizontal variant="navy-gold" size="lg" />
            </div>
          </div>

          {/* Horizontal - With Tagline */}
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider">
              horizontal-navy-gold-tagline.svg
            </div>
            <div className="flex justify-center" id="horizontal-navy-gold-tagline">
              <AshcroftLogoHorizontal variant="navy-gold" size="lg" withTagline />
            </div>
          </div>

          {/* Horizontal - White/Gold (Dark BG) */}
          <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-white/60 uppercase tracking-wider">
              horizontal-white-gold.svg (for dark backgrounds)
            </div>
            <div className="flex justify-center" id="horizontal-white-gold">
              <AshcroftLogoHorizontal variant="white-gold" size="lg" />
            </div>
          </div>

          {/* Horizontal - White/Gold with Tagline */}
          <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-white/60 uppercase tracking-wider">
              horizontal-white-gold-tagline.svg (for dark backgrounds)
            </div>
            <div className="flex justify-center" id="horizontal-white-gold-tagline">
              <AshcroftLogoHorizontal variant="white-gold" size="lg" withTagline />
            </div>
          </div>

          {/* Horizontal - Graphite/Ivory */}
          <div className="bg-[#F7F7F5] p-12 rounded-2xl shadow-lg">
            <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider">
              horizontal-graphite-ivory.svg
            </div>
            <div className="flex justify-center" id="horizontal-graphite-ivory">
              <AshcroftLogoHorizontal variant="graphite-ivory" size="lg" />
            </div>
          </div>
        </div>

        {/* STACKED LOGOS */}
        <div className="space-y-6">
          <h2 className="text-2xl">Stacked Lockups</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stacked - Navy/Gold */}
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                stacked-navy-gold.svg
              </div>
              <div className="flex justify-center" id="stacked-navy-gold">
                <AshcroftLogoStacked variant="navy-gold" size="lg" />
              </div>
            </div>

            {/* Stacked - With Tagline */}
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                stacked-navy-gold-tagline.svg
              </div>
              <div className="flex justify-center" id="stacked-navy-gold-tagline">
                <AshcroftLogoStacked variant="navy-gold" size="lg" withTagline />
              </div>
            </div>

            {/* Stacked - White/Gold */}
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-white/60 uppercase tracking-wider text-center">
                stacked-white-gold.svg
              </div>
              <div className="flex justify-center" id="stacked-white-gold">
                <AshcroftLogoStacked variant="white-gold" size="lg" />
              </div>
            </div>

            {/* Stacked - White/Gold with Tagline */}
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-white/60 uppercase tracking-wider text-center">
                stacked-white-gold-tagline.svg
              </div>
              <div className="flex justify-center" id="stacked-white-gold-tagline">
                <AshcroftLogoStacked variant="white-gold" size="lg" withTagline />
              </div>
            </div>
          </div>
        </div>

        {/* MONOGRAM / ICON */}
        <div className="space-y-6">
          <h2 className="text-2xl">Monogram / Icon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monogram - Light BG */}
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                monogram-light.svg
              </div>
              <div className="flex justify-center" id="monogram-light">
                <AshcroftMonogram size={120} color="#C9A33B" />
              </div>
            </div>

            {/* Monogram - Dark BG */}
            <div className="bg-[#0C1625] p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-white/60 uppercase tracking-wider text-center">
                monogram-dark.svg
              </div>
              <div className="flex justify-center" id="monogram-dark">
                <AshcroftMonogram size={120} color="#C9A33B" />
              </div>
            </div>

            {/* Monogram - Favicon Size */}
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                favicon.svg (32x32)
              </div>
              <div className="flex justify-center" id="favicon">
                <AshcroftMonogram size={32} color="#C9A33B" />
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA SIZES */}
        <div className="space-y-6">
          <h2 className="text-2xl">Social Media Profile Icons</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 400x400 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                400x400
              </div>
              <div className="flex justify-center" id="social-400">
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-[#0C1625] rounded-lg">
                  <AshcroftMonogram size={160} color="#C9A33B" />
                </div>
              </div>
            </div>

            {/* 512x512 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                512x512
              </div>
              <div className="flex justify-center" id="social-512">
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-gradient-to-br from-[#0C1625] to-[#1a2332] rounded-lg">
                  <AshcroftMonogram size={160} color="#C9A33B" />
                </div>
              </div>
            </div>

            {/* 1024x1024 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                1024x1024
              </div>
              <div className="flex justify-center" id="social-1024">
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-[#C9A33B] rounded-lg">
                  <AshcroftMonogram size={160} color="#0C1625" />
                </div>
              </div>
            </div>

            {/* 1200x1200 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider text-center">
                1200x1200
              </div>
              <div className="flex justify-center" id="social-1200">
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg">
                  <AshcroftMonogram size={160} color="#C9A33B" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export Instructions */}
        <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl">
          <h3 className="text-xl mb-4">📦 Export Instructions</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Method 1 - SVG Export (Recommended):</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Right-click on any logo above</li>
              <li>Select "Inspect Element" to open Developer Tools</li>
              <li>Find the &lt;svg&gt; element in the code</li>
              <li>Right-click the &lt;svg&gt; tag → Copy → Copy outerHTML</li>
              <li>Paste into a text editor and save as .svg</li>
            </ol>
            
            <p className="mt-4"><strong>Method 2 - Screenshot for PNG:</strong></p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Take a screenshot of the logo you need</li>
              <li>Crop and save as PNG</li>
              <li>For best quality, use 2x or 3x screen resolution</li>
            </ol>

            <p className="mt-4"><strong>Recommended Export Sizes:</strong></p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Favicon: 32x32, 64x64</li>
              <li>Social Media Profile: 400x400, 512x512, 1024x1024</li>
              <li>Website Header: Variable width, 48-64px height</li>
              <li>Print: Use SVG for infinite scalability</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
