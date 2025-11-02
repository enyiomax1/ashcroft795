import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import {
  Sparkles,
  Zap,
  TrendingUp,
  ArrowRight,
  BarChart3,
  Users,
  Clock,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

function ParallaxHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625]" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2MTI4NzY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1625]/50 to-[#0C1625]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl text-white mb-6">
            Design. Automate. Scale.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          We help growth-focused law firms scale smarter with intelligent design, automation, and
          strategic systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
            className="px-8 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Book a Discovery Call
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#C9A33B] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ThreePillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: Sparkles,
      title: 'Strategy & Design',
      description: 'Modern law firm websites that convert visitors into clients with precision.',
      color: 'from-[#C9A33B] to-[#E5C158]',
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description:
        'Lead capture & follow-up systems that work 24/7 to grow your practice.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'AI Growth Systems',
      description: 'Custom automation to scale your firm and maximize efficiency.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0C1625 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '80px', opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#C9A33B] to-[#E5C158] mx-auto mb-6 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-[#0C1625] mb-6"
          >
            How We Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Three pillars of growth designed to transform your law firm
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Step number badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.1,
                  type: 'spring',
                  stiffness: 300,
                }}
                className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-[#C9A33B] rounded-full flex items-center justify-center text-white shadow-lg"
              >
                {index + 1}
              </motion.div>
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#C9A33B]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.2,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}
                >
                  <pillar.icon size={32} className="text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="text-2xl text-[#0C1625] mb-4"
                >
                  {pillar.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {pillar.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cases = [
    {
      title: 'Law Firm Transformation',
      metric: '+240%',
      label: 'Conversion Lift',
      description: 'Redesigned client intake process with AI-powered lead qualification',
      image:
        'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMjk3MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Practice Automation',
      metric: '2,400hrs',
      label: 'Admin Hours Saved',
      description: 'Automated case intake and client communication workflows',
      image:
        'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0c3xlbnwxfHx8fDE3NjEzMDQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Firm Expansion',
      metric: '£180K',
      label: 'Revenue Growth',
      description: 'Implemented full-stack marketing automation and CRM for legal practice',
      image:
        'https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzYxMjA2MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: '80px', opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#C9A33B] to-[#E5C158] mx-auto mb-6 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-[#0C1625] mb-6"
          >
            Featured Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real outcomes from real partnerships
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Shine effect overlay */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={isInView ? { x: '100%' } : {}}
                transition={{ duration: 1, delay: index * 0.15 + 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                style={{ width: '50%' }}
              />
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0C1625] via-[#0C1625]/80 to-transparent"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="mb-4"
                >
                  <div className="text-4xl text-[#C9A33B] mb-1">{item.metric}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className="text-2xl mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                  className="text-white/70"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => onNavigate?.('case-studies')}
            className="px-8 py-4 bg-[#0C1625] text-white rounded-lg hover:bg-[#1a2332] hover:shadow-lg hover:shadow-[#0C1625]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
          >
            View All Case Studies
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function WhyAshcroft() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: 150, suffix: '+', label: 'Law Firms Served' },
    { icon: Clock, value: 12000, suffix: '+', label: 'Hours Automated' },
    { icon: BarChart3, value: 340, suffix: '%', label: 'Average ROI' },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0C1625] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A33B] via-transparent to-blue-500 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Why Ashcroft Digital
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Premium service. AI-enhanced process. Boutique experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#C9A33B]/20 to-[#C9A33B]/5 border border-[#C9A33B]/20 flex items-center justify-center">
                <stat.icon size={40} className="text-[#C9A33B]" />
              </div>
              <div className="text-5xl text-[#C9A33B] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-[#0C1625] mb-6"
        >
          Let's build your growth system
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[#0C1625]/80 mb-8"
        >
          Book your free strategy call and discover how we can transform your law firm
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
          className="px-10 py-4 bg-[#0C1625] text-white rounded-lg hover:bg-[#1a2332] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
        >
          Schedule Your Discovery Call
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </motion.button>
      </div>
    </section>
  );
}

export default function HomePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white">
      <ParallaxHero />
      <ThreePillars />
      <CaseStudies onNavigate={onNavigate} />
      <WhyAshcroft />
      <CTABanner />
    </div>
  );
}
