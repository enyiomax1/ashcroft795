import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Download, ChevronRight, X } from 'lucide-react';

interface BrandAssetsPanelProps {
  onNavigate: (page: string) => void;
}

export default function BrandAssetsPanel({ onNavigate }: BrandAssetsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button - Bottom Left */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] rounded-full shadow-2xl hover:shadow-[#C9A33B]/30 transition-all duration-300 flex items-center justify-center group"
        title="Brand Assets"
      >
        <Palette size={24} className="text-[#0C1625]" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel Content */}
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0C1625] to-[#1a2332] p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Brand Assets
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-white/60 text-sm">Logo files & brand guidelines</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Brand Kit */}
                <button
                  onClick={() => handleNavigate('brand-kit')}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#C9A33B] hover:shadow-lg transition-all duration-300 group text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] rounded-lg flex items-center justify-center">
                        <Palette size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#0C1625]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                          Brand Kit
                        </h3>
                        <p className="text-xs text-gray-500">Complete guidelines</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-gray-400 group-hover:text-[#C9A33B] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    View all logo variations, colors, typography, and usage guidelines
                  </p>
                </button>

                {/* Logo Export */}
                <button
                  onClick={() => handleNavigate('logo-export')}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#C9A33B] hover:shadow-lg transition-all duration-300 group text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Download size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#0C1625]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                          Logo Export
                        </h3>
                        <p className="text-xs text-gray-500">Download files</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-gray-400 group-hover:text-[#C9A33B] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Export logo files in all sizes and formats (SVG, PNG)
                  </p>
                </button>

                {/* Favicon Export */}
                <button
                  onClick={() => handleNavigate('favicon-export')}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#C9A33B] hover:shadow-lg transition-all duration-300 group text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Download size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#0C1625]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                          Favicon & Icons
                        </h3>
                        <p className="text-xs text-gray-500">App icons</p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-gray-400 group-hover:text-[#C9A33B] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Export favicons and app icons in all required sizes
                  </p>
                </button>

                {/* Quick Info */}
                <div className="bg-[#F7F7F5] rounded-xl p-4 mt-6">
                  <h4 className="text-sm text-[#0C1625] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Quick Colors
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#0C1625] border border-gray-300" />
                      <span className="text-xs text-gray-600 font-mono">#0C1625</span>
                      <span className="text-xs text-gray-500">Navy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#C9A33B] border border-gray-300" />
                      <span className="text-xs text-gray-600 font-mono">#C9A33B</span>
                      <span className="text-xs text-gray-500">Gold</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#F7F7F5] border border-gray-300" />
                      <span className="text-xs text-gray-600 font-mono">#F7F7F5</span>
                      <span className="text-xs text-gray-500">Ivory</span>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="text-sm text-blue-900 mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    💡 Export Instructions
                  </h4>
                  <ol className="text-xs text-blue-800 space-y-1 list-decimal ml-4">
                    <li>Go to Logo Export page</li>
                    <li>Right-click on desired logo</li>
                    <li>Inspect Element → Find &lt;svg&gt;</li>
                    <li>Copy outerHTML → Save as .svg</li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
