/**
 * FULL LOGO DEMO
 * Quick demo page to showcase the new AshcroftFullLogo component
 */

import AshcroftFullLogo from './AshcroftFullLogo';

export default function FullLogoDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Variant */}
      <section className="bg-[#0C1625] py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-white text-4xl mb-8">Ashcroft Full Logo - Dark Variant</h1>
          <div className="flex justify-center">
            <AshcroftFullLogo width={900} variant="dark" />
          </div>
        </div>
      </section>

      {/* Light Background Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#0C1625] text-4xl mb-8">Ashcroft Full Logo - Light Variant</h1>
          <div className="flex justify-center">
            <AshcroftFullLogo width={900} variant="light" />
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section className="bg-[#F5F7FA] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0C1625] text-3xl mb-12 text-center">Size Variations</h2>
          
          <div className="space-y-12">
            {/* Large */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Large (1200px)</p>
              <div className="flex justify-center">
                <AshcroftFullLogo width={1200} variant="light" />
              </div>
            </div>

            {/* Medium */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Medium (800px)</p>
              <div className="flex justify-center">
                <AshcroftFullLogo width={800} variant="light" />
              </div>
            </div>

            {/* Small */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Small (500px)</p>
              <div className="flex justify-center">
                <AshcroftFullLogo width={500} variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#0C1625] text-3xl mb-12 text-center">Variant Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0C1625] p-12 rounded-xl">
              <p className="text-white/60 text-sm mb-6 uppercase tracking-wider text-center">Dark Variant</p>
              <AshcroftFullLogo width={600} variant="dark" />
            </div>

            <div className="bg-white border-2 border-gray-200 p-12 rounded-xl">
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider text-center">Light Variant</p>
              <AshcroftFullLogo width={600} variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] py-20 px-8 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Usage Instructions</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl mb-4 text-[#C9A33B]">Import & Use</h3>
            <pre className="bg-[#0C1625] p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import AshcroftFullLogo from './components/logos/AshcroftFullLogo';

// Dark variant (for navy backgrounds)
<AshcroftFullLogo width={1000} variant="dark" />

// Light variant (for white backgrounds)
<AshcroftFullLogo width={1000} variant="light" />

// With custom className
<AshcroftFullLogo 
  width={800} 
  variant="dark" 
  className="mx-auto" 
/>`}</code>
            </pre>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl text-[#C9A33B]">Props</h3>
              <ul className="space-y-2 text-white/80">
                <li><strong>width:</strong> Number (default: 1023) - Width in pixels</li>
                <li><strong>variant:</strong> 'dark' | 'light' (default: 'dark') - Color scheme</li>
                <li><strong>className:</strong> String - Additional CSS classes</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-[#C9A33B]/20 border border-[#C9A33B]/30 rounded-lg">
              <p className="text-sm">
                <strong>💡 Tip:</strong> The logo is fully responsive and scales proportionally. 
                Height is automatically calculated based on the original aspect ratio (2048:850).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
