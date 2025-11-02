/**
 * LOGO QUICK REFERENCE
 * Handy reference card showing all Ashcroft logos at a glance
 */

import AshcroftFullLogo from './AshcroftFullLogo';
import AshcroftLogoHorizontal from './AshcroftLogoHorizontal';
import AshcroftLogoStacked from './AshcroftLogoStacked';
import AshcroftMonogram from './AshcroftMonogram';

export default function LogoQuickReference() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl text-[#0C1625] mb-8 text-center">
        Logo Quick Reference
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Full Logo */}
        <div className="border-2 border-[#C9A33B] rounded-xl p-6 bg-[#0C1625]">
          <div className="mb-4">
            <h3 className="text-lg text-[#C9A33B] mb-2">Full Logo</h3>
            <p className="text-white/60 text-sm mb-4">
              Complete design with geometric symbol
            </p>
          </div>
          <div className="bg-[#0C1625] p-4 rounded-lg mb-4">
            <AshcroftFullLogo width={400} variant="dark" />
          </div>
          <div className="text-white/70 text-sm space-y-1">
            <p><strong>Use:</strong> Hero sections, presentations</p>
            <p><strong>Size:</strong> 1000-1200px recommended</p>
            <p><strong>Code:</strong> <code className="bg-white/10 px-2 py-1 rounded">AshcroftFullLogo</code></p>
          </div>
        </div>

        {/* Horizontal Logo */}
        <div className="border-2 border-gray-200 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="text-lg text-[#0C1625] mb-2">Horizontal Logo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Icon + wordmark side-by-side
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
            <AshcroftLogoHorizontal variant="navy-gold" size="lg" />
          </div>
          <div className="text-gray-700 text-sm space-y-1">
            <p><strong>Use:</strong> Headers, navigation bars</p>
            <p><strong>Size:</strong> Medium (48-64px height)</p>
            <p><strong>Code:</strong> <code className="bg-gray-100 px-2 py-1 rounded">AshcroftLogoHorizontal</code></p>
          </div>
        </div>

        {/* Stacked Logo */}
        <div className="border-2 border-gray-200 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="text-lg text-[#0C1625] mb-2">Stacked Logo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Icon above wordmark (vertical)
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
            <AshcroftLogoStacked variant="navy-gold" size="lg" />
          </div>
          <div className="text-gray-700 text-sm space-y-1">
            <p><strong>Use:</strong> Social media, square formats</p>
            <p><strong>Size:</strong> Medium to Large</p>
            <p><strong>Code:</strong> <code className="bg-gray-100 px-2 py-1 rounded">AshcroftLogoStacked</code></p>
          </div>
        </div>

        {/* Monogram */}
        <div className="border-2 border-gray-200 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="text-lg text-[#0C1625] mb-2">Monogram</h3>
            <p className="text-gray-600 text-sm mb-4">
              Icon only (standalone symbol)
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
            <AshcroftMonogram size={80} color="#C9A33B" />
          </div>
          <div className="text-gray-700 text-sm space-y-1">
            <p><strong>Use:</strong> Favicons, app icons, small spaces</p>
            <p><strong>Size:</strong> Small (32-80px)</p>
            <p><strong>Code:</strong> <code className="bg-gray-100 px-2 py-1 rounded">AshcroftMonogram</code></p>
          </div>
        </div>

      </div>

      {/* Quick Tips */}
      <div className="mt-8 p-6 bg-gradient-to-br from-[#C9A33B]/10 to-[#C9A33B]/5 rounded-xl border border-[#C9A33B]/20">
        <h3 className="text-lg text-[#0C1625] mb-4">💡 Quick Tips</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Dark Backgrounds:</strong>
            <p className="text-gray-600">Use variant="dark" or "white-gold"</p>
          </div>
          <div>
            <strong>Light Backgrounds:</strong>
            <p className="text-gray-600">Use variant="light" or "navy-gold"</p>
          </div>
          <div>
            <strong>Headers:</strong>
            <p className="text-gray-600">Horizontal variant works best</p>
          </div>
          <div>
            <strong>Social Media:</strong>
            <p className="text-gray-600">Stacked or Monogram recommended</p>
          </div>
        </div>
      </div>

      {/* Color Reference */}
      <div className="mt-6 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg text-[#0C1625] mb-4">🎨 Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#0C1625] border-2 border-gray-300" />
            <div className="text-sm">
              <p className="text-gray-800">Midnight Navy</p>
              <p className="text-gray-500 font-mono">#0C1625</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#C9A33B] border-2 border-gray-300" />
            <div className="text-sm">
              <p className="text-gray-800">Royal Gold</p>
              <p className="text-gray-500 font-mono">#C9A33B</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#F5F7FA] border-2 border-gray-300" />
            <div className="text-sm">
              <p className="text-gray-800">Cool Gray</p>
              <p className="text-gray-500 font-mono">#F5F7FA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
