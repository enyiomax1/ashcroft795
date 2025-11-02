import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // WhatsApp config from siteConfig (remove + or 00 from country code)
  const whatsappNumber = siteConfig.contact.phone.replace(/^\+/, '');
  const defaultMessage = siteConfig.contact.whatsappMessage;
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0C1625]">Chat with us</p>
                    <p className="text-xs text-gray-500">We typically reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Chat
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 flex items-center justify-center group"
        >
          {/* Pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-[#25D366] rounded-full"
          />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isExpanded ? (
              <X size={28} className="text-white" />
            ) : (
              <MessageCircle size={28} className="text-white" />
            )}
          </motion.div>

          {/* Notification badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A33B] rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs">1</span>
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
}
