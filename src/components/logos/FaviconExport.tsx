import React from 'react';
import AshcroftMonogram from './AshcroftMonogram';

// Component specifically for exporting favicon sizes
export default function FaviconExport() {
  const sizes = [16, 32, 48, 64, 128, 256, 512];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl mb-4">Favicon Export - Ashcroft Digital Solutions</h1>
          <p className="text-gray-600 mb-4">
            Right-click on any icon below to save or inspect the SVG code. These are optimized for various favicon and app icon sizes.
          </p>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 <strong>Recommended:</strong> Export the 32x32 or 64x64 version for your website favicon. Use larger sizes for mobile app icons and PWA manifests.
            </p>
          </div>
        </div>

        {/* Favicon Sizes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sizes.map((size) => (
            <div key={size} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Light Background */}
              <div className="p-8 bg-white border-b border-gray-100">
                <p className="text-xs text-gray-500 mb-4 text-center uppercase tracking-wider">
                  {size}x{size} - Light
                </p>
                <div 
                  className="flex items-center justify-center"
                  style={{ height: Math.max(size, 64), minHeight: 64 }}
                >
                  <AshcroftMonogram size={size} color="#EAC16D" bgColor="#0D1D2D" />
                </div>
              </div>
              
              {/* Dark Background */}
              <div className="p-8 bg-[#0C1625]">
                <p className="text-xs text-white/60 mb-4 text-center uppercase tracking-wider">
                  {size}x{size} - Dark
                </p>
                <div 
                  className="flex items-center justify-center"
                  style={{ height: Math.max(size, 64), minHeight: 64 }}
                >
                  <AshcroftMonogram size={size} color="#EAC16D" bgColor="#0D1D2D" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Touch Icons */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-6">Apple Touch Icons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[120, 152, 180].map((size) => (
              <div key={`apple-${size}`} className="text-center">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                  {size}x{size}px
                </p>
                <div className="inline-block bg-white rounded-2xl p-8">
                  <AshcroftMonogram size={size} color="#EAC16D" bgColor="#0D1D2D" />
                </div>
                <p className="text-xs text-gray-400 mt-2">apple-touch-icon.png</p>
              </div>
            ))}
          </div>
        </div>

        {/* Android/Chrome Icons */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-6">Android Chrome Icons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[192, 512].map((size) => (
              <div key={`android-${size}`} className="text-center">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                  {size}x{size}px
                </p>
                <div className="inline-block bg-white border-2 border-gray-200 rounded-2xl p-8">
                  <AshcroftMonogram size={Math.min(size / 2, 200)} color="#EAC16D" bgColor="#0D1D2D" />
                </div>
                <p className="text-xs text-gray-400 mt-2">android-chrome-{size}x{size}.png</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Favicon.ico Preview */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-6">Standard Favicon (Multi-size ICO)</h2>
          <p className="text-gray-600 mb-6">
            The standard favicon.ico should contain 16x16, 32x32, and 48x48 versions. Use an online ICO converter to create from the SVG or PNG exports.
          </p>
          <div className="flex items-center justify-center gap-8 bg-gray-50 p-12 rounded-xl">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">16x16</p>
              <div className="inline-block bg-white p-4 rounded border border-gray-200">
                <AshcroftMonogram size={16} color="#EAC16D" bgColor="#0D1D2D" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">32x32</p>
              <div className="inline-block bg-white p-4 rounded border border-gray-200">
                <AshcroftMonogram size={32} color="#EAC16D" bgColor="#0D1D2D" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-3">48x48</p>
              <div className="inline-block bg-white p-4 rounded border border-gray-200">
                <AshcroftMonogram size={48} color="#EAC16D" bgColor="#0D1D2D" />
              </div>
            </div>
          </div>
        </div>

        {/* PWA Manifest Icons */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl mb-6">PWA Manifest Icons</h2>
          <p className="text-gray-600 mb-6">
            For Progressive Web Apps, you'll need various sizes defined in your manifest.json file.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[72, 96, 144, 192, 256, 384, 512].map((size) => (
              <div key={`pwa-${size}`} className="text-center">
                <p className="text-xs text-gray-500 mb-3">{size}x{size}</p>
                <div className="inline-block bg-white rounded-xl p-4">
                  <AshcroftMonogram size={Math.min(size / 2, 80)} color="#EAC16D" bgColor="#0D1D2D" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Instructions */}
        <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl">
          <h3 className="text-xl mb-4">📦 Export Instructions</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">For SVG Export:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Right-click on desired icon</li>
                <li>Inspect Element → Find &lt;svg&gt; tag</li>
                <li>Right-click &lt;svg&gt; → Copy → Copy outerHTML</li>
                <li>Save as .svg file</li>
              </ol>
            </div>
            
            <div>
              <p className="font-semibold mb-2">For PNG Export:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Take screenshot of the icon</li>
                <li>Crop to exact size needed</li>
                <li>Use 2x resolution for retina displays</li>
                <li>Save as PNG with transparency</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold mb-2">For ICO Creation:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Export 16x16, 32x32, and 48x48 as PNG</li>
                <li>Use online converter (e.g., favicon.io, converticon.com)</li>
                <li>Upload PNGs and generate favicon.ico</li>
                <li>Place in root directory of website</li>
              </ol>
            </div>

            <div className="bg-white border border-blue-200 p-4 rounded-lg mt-4">
              <p className="font-semibold text-blue-900 mb-2">Recommended Online Tools:</p>
              <ul className="list-disc ml-6 space-y-1 text-blue-800">
                <li><strong>favicon.io</strong> - Generate all favicon formats from PNG/SVG</li>
                <li><strong>realfavicongenerator.net</strong> - Comprehensive favicon generator</li>
                <li><strong>converticon.com</strong> - Simple ICO converter</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
