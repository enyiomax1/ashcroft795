import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import AshcroftMonogram from './logos/AshcroftMonogram';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'Services', id: 'services' },
    { name: 'Insights', id: 'insights' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C1625]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group transition-opacity hover:opacity-90 duration-300"
            aria-label="Ashcroft Digital Solutions - Home"
          >
            <AshcroftMonogram size={50} color="#EAC16D" bgColor="#0D1D2D" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative text-white/80 hover:text-white transition-colors group"
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#C9A33B] transition-all duration-300 ${
                    currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="px-6 py-2.5 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 space-y-4 bg-[#0C1625]/80 backdrop-blur-md rounded-b-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#C9A33B]/20 text-[#C9A33B]'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="w-full px-6 py-2.5 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] transition-all duration-300"
            >
              Book a Call
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
