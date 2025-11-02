import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Heart, 
  TrendingUp, 
  Shield,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurStorySection />
      <OurApproachSection />
      <OurValuesSection />
      <WhoWeServeSection />
      <OurCommitmentSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #C9A33B 1px, transparent 1px), linear-gradient(to bottom, #C9A33B 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl text-white mb-8"
          >
            Building the future of legal marketing, one law firm at a time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed"
          >
            We're not just another digital agency. We're legal marketing specialists who understand the unique challenges of growing a law practice in today's digital-first world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function OurStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Our Story
          </h2>
        </motion.div>

        <div className="space-y-16">
          {/* The Problem We Saw */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl text-[#0C1625] mb-6">The Problem We Saw</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                After years working alongside law firms across the UK, we noticed a troubling pattern. Brilliant solicitors and barristers—experts in their legal fields—were being held back by outdated websites, manual processes, and marketing systems that simply didn't work.
              </p>
              <p>
                These weren't lazy firms. They were ambitious practices ready to grow. But they were stuck in a cycle of expensive agency retainers that delivered little, DIY marketing that consumed valuable billable hours, and technology that promised transformation but delivered headaches.
              </p>
            </div>
          </motion.div>

          {/* Why We Started */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h3 className="text-3xl text-[#0C1625] mb-6">Why We Started Ashcroft Digital</h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We founded Ashcroft Digital with a single mission: to give growth-focused law firms the same competitive advantages that corporate legal departments and Magic Circle firms have enjoyed for years—without the enterprise price tag or complexity.
            </p>
            <div className="space-y-6">
              <h4 className="text-2xl text-[#0C1625] mb-4">We believe that:</h4>
              <div className="space-y-4">
                {[
                  {
                    title: 'Every law firm deserves a website that works as hard as they do',
                    description: 'not just a digital business card, but a 24/7 client acquisition machine'
                  },
                  {
                    title: "Automation shouldn't be complicated",
                    description: 'the best systems run invisibly in the background, saving time without adding friction'
                  },
                  {
                    title: 'Growth should be measurable',
                    description: 'vague promises and "brand awareness" metrics aren\'t good enough. We focus on leads, conversions, and revenue'
                  }
                ].map((belief, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-[#C9A33B] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg text-[#0C1625]">
                        <strong>{belief.title}</strong>—{belief.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OurApproachSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const approaches = [
    {
      icon: <Target size={32} />,
      number: '1',
      title: 'Legal-First Mindset',
      description: "We don't just know marketing—we understand legal services. We know the compliance requirements of the Solicitors Regulation Authority. We understand client confidentiality. We're familiar with the nuances between personal injury, family law, corporate, and criminal practices. This isn't a vertical we dabble in; it's our exclusive focus."
    },
    {
      icon: <Sparkles size={32} />,
      number: '2',
      title: 'AI-Enhanced, Human-Delivered',
      description: 'We leverage cutting-edge AI and automation tools to deliver better results faster—but we never let technology replace the strategic thinking and craftsmanship that makes work truly exceptional. Every website is custom-designed. Every automation is carefully configured for your specific workflows. Every strategy is tailored to your practice area and growth goals.'
    },
    {
      icon: <Heart size={32} />,
      number: '3',
      title: 'Partnership, Not Vendor Relationship',
      description: "We're not here to sell you a website and disappear. We're building long-term partnerships with firms that want to dominate their markets. Your growth is our growth. Your success stories become our portfolio. We win when you win."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're different from typical agencies in three key ways
          </p>
        </motion.div>

        <div className="space-y-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#F5F7FA] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] rounded-xl flex items-center justify-center text-white">
                    {approach.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-5xl text-[#C9A33B]/20">{approach.number}</span>
                    <h3 className="text-2xl text-[#0C1625]">{approach.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Excellence Without Ego',
      description: "We do exceptional work, but we're not precious about it. If something isn't working, we pivot. If a client has a better idea, we listen. The goal is results, not awards."
    },
    {
      icon: <Shield size={32} />,
      title: 'Transparency Always',
      description: 'No jargon. No hiding behind technical complexity. No surprise fees. We explain what we\'re doing, why we\'re doing it, and what results to expect—in plain English.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Growth-Obsessed',
      description: "We measure everything that matters: conversion rates, lead quality, time saved, revenue generated. If we can't measure it, we don't promise it."
    },
    {
      icon: <Users size={32} />,
      title: 'Law Firm Specialists',
      description: 'We exclusively serve law firms across the UK and US. We understand legal industry regulations, compliance requirements, and what actually converts legal clients. No generalist agency guessing. No learning curve on your budget. Just expertise that delivers results from day one.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#C9A33B]/20 rounded-xl flex items-center justify-center text-[#C9A33B] mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl text-white mb-4">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const idealPartners = [
    {
      title: 'Growth-focused',
      description: "You're not content with the status quo. You want to grow your practice, increase market share, and dominate your niche"
    },
    {
      title: 'Quality-driven',
      description: "You'd rather have fewer high-value clients than chase every lead. You understand that the right systems attract the right clients"
    },
    {
      title: 'Innovation-ready',
      description: 'You\'re open to trying new approaches and implementing systems that might feel different from "how we\'ve always done it"'
    },
    {
      title: 'Action-oriented',
      description: "You're ready to invest in growth—both financially and by dedicating time to implement our recommendations"
    }
  ];

  const practiceAreas = [
    'Personal injury and clinical negligence',
    'Family and matrimonial law',
    'Employment law',
    'Corporate and commercial law',
    'Conveyancing and property law',
    'Immigration law'
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Who We Serve
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Ideal Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl text-[#0C1625] mb-6">Our Ideal Partners</h3>
            <p className="text-gray-700 mb-6">We work best with law firms that are:</p>
            <div className="space-y-4">
              {idealPartners.map((partner, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#C9A33B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#0C1625]">
                      <strong>{partner.title}:</strong> {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl text-[#0C1625] mb-6">Practice Areas We Specialize In</h3>
            <p className="text-gray-700 mb-6">
              While our systems work for any legal practice, we have particular expertise in:
            </p>
            <div className="space-y-3">
              {practiceAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C9A33B] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{area}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OurCommitmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const commitments = [
    'Direct access to senior strategists—no account managers, no junior staff learning on your dime',
    'Custom solutions, not templates—every engagement is tailored to your firm\'s unique goals and challenges',
    'Transparent reporting—monthly performance reviews with clear metrics and actionable insights',
    'Ongoing optimization—we don\'t "set and forget." We continuously test, refine, and improve your systems',
    'SRA compliance built-in—every website, automation, and marketing asset meets regulatory requirements'
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-gray-600">
            When you partner with Ashcroft Digital, you get:
          </p>
        </motion.div>

        <div className="space-y-4">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-[#F5F7FA] rounded-xl p-6 hover:shadow-lg hover:shadow-[#C9A33B]/10 transition-all duration-300"
            >
              <CheckCircle2 size={24} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-700">{commitment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do you only work with large law firms?',
      a: 'Not at all. We work with practices of all sizes—from sole practitioners to multi-office firms. What matters isn\'t your size, but your ambition and readiness to grow.'
    },
    {
      q: 'How long does a typical project take?',
      a: 'Foundation tier projects typically complete in 6-8 weeks. Growth Engine tier in 10-12 weeks. Enterprise Partner tier in 16-20 weeks. We\'ll provide a detailed timeline during your discovery call.'
    },
    {
      q: 'What if we already have a website?',
      a: 'We can work with your existing site if it\'s built on a platform we support, or we can design a new one from scratch. We\'ll assess your current site during discovery and recommend the best path forward.'
    },
    {
      q: 'Are you SRA regulated?',
      a: 'We\'re not solicitors, so we\'re not SRA regulated—but we\'re intimately familiar with SRA requirements and ensure all our work complies with regulations governing legal marketing and advertising.'
    },
    {
      q: 'Do you handle content writing?',
      a: 'Yes! All our packages include strategic copywriting. For ongoing content needs (blog posts, case studies, etc.), we offer content retainers.'
    },
    {
      q: 'What happens after the project is complete?',
      a: 'You own everything we create—website, automation workflows, documentation. We provide training so your team can manage day-to-day updates. Ongoing support is available but optional.'
    },
    {
      q: 'Can you help with paid advertising?',
      a: 'Absolutely. We expertly handle paid advertising campaigns including Google Ads, LinkedIn, and other paid channels. Our Growth Engine and Enterprise Partner tiers include comprehensive paid ad management, strategic campaign optimization, and marketing automation that integrates seamlessly with your advertising efforts.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-[#0C1625] pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={24} className="text-[#C9A33B] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-[#C9A33B] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Let's have a conversation about where your firm is today and where you want to be. No sales pressure. No obligation. Just a strategic discussion about whether we're the right fit to help you achieve your growth goals.
          </p>
          <button
            onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
            className="px-10 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
          >
            Book Your Free 30-Minute Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-white/60 mb-4">Get in touch</p>
            <p className="text-white mb-2">
              <a href="mailto:admin@ashcroftdigital.com" className="hover:text-[#C9A33B] transition-colors">
                admin@ashcroftdigital.com
              </a>
            </p>
            <p className="text-white/60">
              Monday-Friday: 9am-5pm GMT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
