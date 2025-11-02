import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Linkedin, Twitter, Instagram, Mail, Facebook } from 'lucide-react';
import AshcroftMonogram from './logos/AshcroftMonogram';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer ref={ref} className="bg-[#0C1625] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="mb-4">
              <AshcroftMonogram size={70} color="#EAC16D" bgColor="#0D1D2D" />
            </div>
            <p className="text-white/60 max-w-md mb-4">
              Premium web design and AI-driven automation for growth-focused law firms.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#C9A33B]/20 flex items-center justify-center text-white/60 hover:text-[#C9A33B] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#C9A33B]/20 flex items-center justify-center text-white/60 hover:text-[#C9A33B] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#C9A33B]/20 flex items-center justify-center text-white/60 hover:text-[#C9A33B] transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#C9A33B]/20 flex items-center justify-center text-white/60 hover:text-[#C9A33B] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#C9A33B]/20 flex items-center justify-center text-white/60 hover:text-[#C9A33B] transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('case-studies')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('privacy')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('terms')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('cookies')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('refunds')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors text-left"
                >
                  Refunds Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('disclaimer')}
                  className="text-white/60 hover:text-[#C9A33B] transition-colors text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-white/60">
            © {currentYear} Ashcroft Digital Solutions. All rights reserved.
          </p>
          <p className="text-white/40">
            Designed with precision. Built with purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
