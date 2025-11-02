import { useRef, useState, Fragment } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, X, ArrowRight, Sparkles, ChevronDown, ChevronUp, Star, TrendingUp, Shield, Clock } from 'lucide-react';

function ServiceHero() {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C9A33B 1px, transparent 1px), linear-gradient(to bottom, #C9A33B 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Premium Digital Growth Systems for Ambitious Law Firms
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Stop settling for websites that don't convert. Get a complete client acquisition system with ongoing partnership that drives real results.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('pricing-packages');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
          >
            View Our Packages
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function IntroductionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-8 text-center">
            The Problem with Most Law Firm Websites
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Most law firms waste £5,000-15,000 on beautiful websites that sit idle. They look professional, but they don't generate leads. They don't capture visitor information. They don't nurture prospects. And worst of all, they're abandoned after launch—never optimized, never improved.
            </p>

            <div className="bg-[#F5F7FA] p-8 rounded-2xl my-8">
              <p className="text-2xl text-[#0C1625] mb-4">
                We do things differently.
              </p>
              <p className="text-gray-700 mb-4">
                At Ashcroft Digital Solutions, we don't just build websites. We build complete growth systems powered by AI and automation, backed by ongoing partnership to ensure continuous improvement.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong className="text-[#0C1625]">Our model:</strong> Initial investment to build your system + Monthly partnership for ongoing optimization and support.
                </p>
                <p className="text-gray-700">
                  <strong className="text-[#0C1625]">Why this works:</strong> Marketing systems need continuous refinement. Algorithms change. Competitors evolve. Your practice grows. Our monthly partnership ensures you're never stuck with a static website—you're always improving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const packages = [
    {
      name: 'Foundation',
      bestFor: 'Solo & Small Firms (1-3 solicitors)',
      setupFee: { gbp: '£2,800', usd: '$3,800' },
      monthly: { gbp: '£280/month', usd: '$380/month' },
      commitment: '6 months',
      firstYear: { gbp: '£6,160', usd: '$8,360' },
      popular: false,
    },
    {
      name: 'Growth Engine',
      bestFor: 'Growing Practices (3-10 solicitors)',
      setupFee: { gbp: '£6,500', usd: '$8,800' },
      monthly: { gbp: '£680/month', usd: '$920/month' },
      commitment: '12 months',
      firstYear: { gbp: '£14,660', usd: '$19,840' },
      popular: true,
    },
    {
      name: 'Enterprise Partner',
      bestFor: 'Established Firms (10+ solicitors)',
      setupFee: { gbp: '£14,500', usd: '$19,500' },
      monthly: { gbp: '£1,450/month', usd: '$1,950/month' },
      commitment: '12 months',
      firstYear: { gbp: '£31,900', usd: '$43,900' },
      popular: false,
    },
  ];

  const features = [
    { category: 'WEBSITE', items: [
      { name: 'Custom Design', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'Pages Included', foundation: 'Up to 8', growth: 'Up to 15', enterprise: 'Unlimited' },
      { name: 'Mobile Optimized', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'Fast Loading', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'SEO Foundation', foundation: '✓', growth: '✓', enterprise: '✓' },
    ]},
    { category: 'AI & AUTOMATION', items: [
      { name: 'AI Chatbot', foundation: 'Basic', growth: 'Advanced', enterprise: 'Enterprise Custom' },
      { name: 'Lead Capture Forms', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'Email Automation', foundation: '✗', growth: '✓ Complete', enterprise: '✓ Advanced' },
      { name: 'SMS Reminders', foundation: '✗', growth: '✓', enterprise: '✓' },
      { name: 'Review Generation', foundation: '✗', growth: '✓ Automated', enterprise: '✓ + Management' },
      { name: 'CRM Integration', foundation: '✗', growth: '✓ One System', enterprise: '✓ Unlimited' },
      { name: 'Client Onboarding', foundation: '✗', growth: '✗', enterprise: '✓ Fully Automated' },
    ]},
    { category: 'MARKETING', items: [
      { name: 'Email Newsletter', foundation: '✗', growth: '✓ Created Monthly', enterprise: '✓ Full Service' },
      { name: 'Social Media', foundation: '✗', growth: '✗', enterprise: '✓ Managed' },
      { name: 'SEO Services', foundation: 'Foundation Only', growth: 'Monitoring', enterprise: '✓ Full Service' },
      { name: 'Blog Content', foundation: '✗', growth: '✗', enterprise: '✓ 2-4 Posts/Month' },
      { name: 'Link Building', foundation: '✗', growth: '✗', enterprise: '✓ Quarterly' },
      { name: 'Retargeting Ads', foundation: '✗', growth: '✗', enterprise: '✓ Setup Included' },
    ]},
    { category: 'ANALYTICS & REPORTING', items: [
      { name: 'Google Analytics', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'Conversion Tracking', foundation: '✓', growth: '✓ Advanced', enterprise: '✓ Complete' },
      { name: 'Monthly Reports', foundation: '✓ Automated', growth: '✓ + Insights', enterprise: '✓ Custom Dashboards' },
      { name: 'Attribution Tracking', foundation: '✗', growth: '✓', enterprise: '✓ Advanced' },
      { name: 'Business Intelligence', foundation: '✗', growth: '✗', enterprise: '✓ Real-Time' },
    ]},
    { category: 'SUPPORT', items: [
      { name: 'Monthly Support Hours', foundation: '2 hours', growth: '6 hours', enterprise: 'Unlimited' },
      { name: 'Response Time', foundation: '48 hours', growth: '24 hours', enterprise: '4 hours' },
      { name: 'Strategy Calls', foundation: '✗', growth: '30 min/month', enterprise: '90 min/month' },
      { name: 'Dedicated Manager', foundation: '✗', growth: '✗', enterprise: '✓' },
      { name: 'Emergency Support', foundation: '✗', growth: '✗', enterprise: '✓' },
      { name: 'Phone Support', foundation: '✗', growth: '✓', enterprise: '✓ Priority' },
    ]},
    { category: 'TRAINING', items: [
      { name: 'Team Training', foundation: 'Basic', growth: 'Half-Day Workshop', enterprise: 'Full-Day Workshop' },
      { name: 'Documentation', foundation: '✓', growth: '✓ Complete', enterprise: '✓ + Video' },
    ]},
    { category: 'GUARANTEES', items: [
      { name: '30-Day Support', foundation: '✓', growth: '✓', enterprise: '✓' },
      { name: 'Satisfaction Guarantee', foundation: '✗', growth: '✗', enterprise: '✓ 90-Day' },
    ]},
  ];

  return (
    <section ref={ref} id="pricing-packages" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Choose Your Growth Path
          </h2>
        </motion.div>

        {/* Package Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${pkg.popular ? 'md:-mt-8 z-10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#C9A33B] to-[#E5C158] text-[#0C1625] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Sparkles size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`h-full rounded-2xl bg-white p-8 border-2 ${pkg.popular ? 'border-[#C9A33B]' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                <h3 className="text-3xl text-[#0C1625] mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.bestFor}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Setup Fee</p>
                    <p className="text-2xl text-[#0C1625]">{pkg.setupFee.gbp} <span className="text-sm text-gray-500">/ {pkg.setupFee.usd}</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly Partnership</p>
                    <p className="text-2xl text-[#C9A33B]">{pkg.monthly.gbp} <span className="text-sm text-gray-500">/ {pkg.monthly.usd}</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">First Year Total</p>
                    <p className="text-xl text-[#0C1625]">{pkg.firstYear.gbp} <span className="text-sm text-gray-500">/ {pkg.firstYear.usd}</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Commitment: {pkg.commitment}</p>
                  </div>
                </div>

                <button
                  onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
                  className={`w-full py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    pkg.popular
                      ? 'bg-[#C9A33B] text-[#0C1625] hover:bg-[#E5C158] hover:shadow-lg'
                      : 'bg-[#0C1625] text-white hover:bg-[#1a2332]'
                  }`}
                >
                  {pkg.popular ? 'Get Started →' : index === 0 ? 'Get Started →' : 'Book Consultation →'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0C1625] text-white">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-4">Foundation</th>
                  <th className="text-center py-4 px-4 bg-[#C9A33B]/20">Growth Engine</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((section, sectionIndex) => (
                  <Fragment key={`section-${sectionIndex}`}>
                    <tr className="bg-gray-100">
                      <td colSpan={4} className="py-3 px-6 text-[#0C1625]">
                        {section.category}
                      </td>
                    </tr>
                    {section.items.map((feature, featureIndex) => (
                      <tr
                        key={`${sectionIndex}-${featureIndex}`}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-6 text-gray-700">{feature.name}</td>
                        <td className="py-3 px-4 text-center text-sm">
                          {feature.foundation === '✓' ? (
                            <Check className="inline text-[#C9A33B]" size={18} />
                          ) : feature.foundation === '✗' ? (
                            <X className="inline text-gray-300" size={18} />
                          ) : (
                            <span className="text-gray-600">{feature.foundation}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-sm bg-[#C9A33B]/5">
                          {feature.growth === '✓' ? (
                            <Check className="inline text-[#C9A33B]" size={18} />
                          ) : feature.growth === '✗' ? (
                            <X className="inline text-gray-300" size={18} />
                          ) : (
                            <span className="text-gray-600">{feature.growth}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-sm">
                          {feature.enterprise === '✓' ? (
                            <Check className="inline text-[#C9A33B]" size={18} />
                          ) : feature.enterprise === '✗' ? (
                            <X className="inline text-gray-300" size={18} />
                          ) : (
                            <span className="text-gray-600">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PaymentOptions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const options = [
    {
      name: 'Monthly',
      description: 'Setup fee upfront, monthly retainer billed on 1st of each month',
      benefit: 'Most flexible',
    },
    {
      name: 'Quarterly',
      description: 'Setup fee upfront, retainer billed every 3 months',
      benefit: 'Less frequent invoicing',
    },
    {
      name: 'Annual Prepay',
      description: 'Pay for full year upfront and receive 10% discount',
      benefit: 'Best value',
      savings: [
        'Foundation: Save £620 / $835',
        'Growth Engine: Save £1,465 / $1,985',
        'Enterprise Partner: Save £3,190 / $4,390',
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4 text-center">
            Flexible Payment to Fit Your Budget
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            All packages offer multiple payment options
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#F5F7FA] p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl text-[#0C1625] mb-3">{option.name}</h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <div className="inline-block bg-[#C9A33B]/20 text-[#0C1625] px-4 py-2 rounded-full text-sm mb-4">
                  {option.benefit}
                </div>
                {option.savings && (
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p className="text-sm text-[#0C1625] mb-2">Annual Savings:</p>
                    <ul className="space-y-1">
                      {option.savings.map((saving, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <Check size={16} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
                          {saving}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PackageDescriptions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const packages = [
    {
      icon: '📦',
      name: 'Foundation Package',
      tagline: 'Perfect for solo practitioners and small firms ready to establish professional online presence',
      roi: 'Most firms recover investment within 2-4 months through increased enquiries',
      highlights: [
        'Custom 8-page website designed for conversions',
        'AI chatbot for 24/7 lead capture',
        'Premium hosting + daily backups',
        'Up to 2 hours of monthly updates',
        'Technical support (48-hour response)',
        'Monthly performance reports',
      ],
      idealFor: [
        'Solo practitioners',
        'Firms with 1-3 solicitors',
        'Practices just starting to invest in digital',
        'Firms needing professional online presence',
      ],
    },
    {
      icon: '🚀',
      name: 'Growth Engine Package',
      tagline: 'The complete client acquisition system for growing firms serious about systematic lead generation',
      popular: true,
      roi: 'Typical clients see 3-5x increase in qualified leads within 6 months. Investment typically recovered within 2-4 weeks',
      highlights: [
        'Expanded website (up to 15 pages)',
        'Advanced AI chatbot with custom training',
        'Complete email marketing automation',
        'CRM integration (Clio, PracticePanther, etc.)',
        'Up to 6 hours of monthly updates',
        '30-minute monthly strategy call',
        'Priority support (24-hour response)',
      ],
      idealFor: [
        'Growing practices with 3-10 solicitors',
        'Firms ready to scale systematically',
        'Practices wanting hands-off marketing',
        'Firms serious about lead generation',
      ],
      whyPopular: 'Best value. Complete system. Proven results. Perfect balance of features and affordability.',
    },
    {
      icon: '👑',
      name: 'Enterprise Partner Package',
      tagline: 'The comprehensive growth partnership for established firms ready to dominate their market',
      roi: 'Typical clients see 35-50% revenue growth in first year plus massive operational efficiency gains. Investment typically recovered in first month',
      highlights: [
        'Unlimited website pages',
        'Enterprise-grade AI chatbot',
        'Complete operational automation',
        'Dedicated Account Manager',
        'Full SEO Services (2-4 blog posts/month)',
        'Social Media Management',
        'Unlimited support (4-hour response)',
        '90-minute monthly strategy sessions',
      ],
      idealFor: [
        'Established firms with 10+ solicitors',
        'Multi-office practices',
        'Firms with operational challenges',
        'Practices ready for enterprise-grade systems',
      ],
      difference: "This isn't a service package—it's a dedicated partnership. You get enterprise-grade systems with boutique-level attention.",
    },
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
            Detailed Package Breakdown
          </h2>
        </motion.div>

        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] text-[#0C1625] px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl">{pkg.icon}</span>
                <div className="flex-1">
                  <h3 className="text-3xl text-[#0C1625] mb-2">{pkg.name}</h3>
                  <p className="text-xl text-gray-700">{pkg.tagline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl text-[#0C1625] mb-4">What You Get:</h4>
                  <ul className="space-y-3">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl text-[#0C1625] mb-4">Ideal For:</h4>
                  <ul className="space-y-3">
                    {pkg.idealFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#C9A33B]/10 p-6 rounded-xl mb-6">
                <p className="text-[#0C1625]">
                  <strong>Expected ROI:</strong> {pkg.roi}
                </p>
              </div>

              {pkg.whyPopular && (
                <div className="bg-[#0C1625] text-white p-6 rounded-xl mb-6">
                  <p className="text-sm mb-2">Why This Is Most Popular:</p>
                  <p>{pkg.whyPopular}</p>
                </div>
              )}

              {pkg.difference && (
                <div className="bg-[#0C1625] text-white p-6 rounded-xl mb-6">
                  <p className="text-sm mb-2">The Difference:</p>
                  <p>{pkg.difference}</p>
                </div>
              )}

              <button
                onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
                className="px-8 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 group"
              >
                {index === 2 ? 'Book Strategy Session' : 'Get Started with ' + pkg.name.split(' ')[0]}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMonthlyPartnership() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-12 text-center">
            Why Monthly Partnership vs. One-Time Payment?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <X size={24} className="text-red-600" />
                <h3 className="text-2xl text-[#0C1625]">Traditional Model</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Build it, launch it, forget it',
                  'Gets outdated quickly',
                  'Security vulnerabilities',
                  'No optimization',
                  'Breaks when updates happen',
                  'No support when issues arise',
                  'Falls behind competitors',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <X size={18} className="text-red-600 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-2 border-[#C9A33B]">
              <div className="flex items-center gap-3 mb-4">
                <Check size={24} className="text-[#C9A33B]" />
                <h3 className="text-2xl text-[#0C1625]">Our Partnership</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Continuous improvement',
                  'Always secure and updated',
                  'Regular optimization',
                  'Adapts to algorithm changes',
                  'Support whenever needed',
                  'Stays ahead of competitors',
                  'Better ROI over time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check size={18} className="text-[#C9A33B] flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl">
            <h3 className="text-2xl text-[#0C1625] mb-4">The Reality:</h3>
            <p className="text-gray-700 mb-6">
              Modern marketing systems aren't "set it and forget it." They require weekly security updates, monthly performance optimization, quarterly strategic adjustments, ongoing content updates, and continuous testing and refinement.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <p className="text-[#0C1625] mb-4">You have two options:</p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A33B] flex-shrink-0">1.</span>
                  <span className="text-gray-700">Partner with us (£280-1,450/month depending on tier)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A33B] flex-shrink-0">2.</span>
                  <span className="text-gray-700">Hire internal marketing team (£80K-150K+ annually)</span>
                </li>
              </ol>
              <p className="text-gray-700 mt-6">
                Most firms find our partnership model more cost-effective, less stressful, and delivers better results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comparisons = [
    { feature: 'Upfront Cost', diy: '£500-2,000', agency: '£5,000-15,000', ashcroft: '£2,800-14,500' },
    { feature: 'Ongoing Cost', diy: 'Your time', agency: '£500-2,000/month', ashcroft: '£280-1,450/month' },
    { feature: 'Law Firm Specialized', diy: false, agency: 'Sometimes', ashcroft: true },
    { feature: 'AI & Automation', diy: 'Basic/None', agency: 'Extra Cost', ashcroft: true },
    { feature: 'Ongoing Optimization', diy: 'You handle', agency: 'Optional/Extra', ashcroft: true },
    { feature: 'Dedicated Support', diy: false, agency: 'Shared', ashcroft: 'Enterprise' },
    { feature: 'Strategic Guidance', diy: false, agency: 'Limited', ashcroft: true },
    { feature: 'Results Guaranteed', diy: false, agency: 'Rarely', ashcroft: 'Enterprise' },
    { feature: 'Quality', diy: 'Variable', agency: 'Variable', ashcroft: 'Premium' },
    { feature: 'Time to ROI', diy: '6-12 months', agency: '3-6 months', ashcroft: '2-4 months' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-12 text-center">
            Comparison: DIY vs. Agency vs. Ashcroft Digital
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0C1625] text-white">
                    <th className="text-left py-4 px-6">Feature</th>
                    <th className="text-center py-4 px-4">DIY / Freelancer</th>
                    <th className="text-center py-4 px-4">Traditional Agency</th>
                    <th className="text-center py-4 px-4 bg-[#C9A33B]/20">Ashcroft Digital</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-[#0C1625]">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-sm">
                        {typeof row.diy === 'boolean' ? (
                          row.diy ? (
                            <Check className="inline text-green-600" size={18} />
                          ) : (
                            <X className="inline text-red-400" size={18} />
                          )
                        ) : (
                          <span className="text-gray-600">{row.diy}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm">
                        {typeof row.agency === 'boolean' ? (
                          row.agency ? (
                            <Check className="inline text-green-600" size={18} />
                          ) : (
                            <X className="inline text-red-400" size={18} />
                          )
                        ) : (
                          <span className="text-gray-600">{row.agency}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm bg-[#C9A33B]/5">
                        {typeof row.ashcroft === 'boolean' ? (
                          row.ashcroft ? (
                            <Check className="inline text-[#C9A33B]" size={18} />
                          ) : (
                            <X className="inline text-red-400" size={18} />
                          )
                        ) : (
                          <span className="text-gray-700">{row.ashcroft}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'About Pricing',
      questions: [
        {
          q: 'Why do you charge monthly instead of one-time?',
          a: 'Modern marketing systems need continuous optimization to perform well. Monthly partnership ensures your website stays secure, fast, and effective—and keeps improving over time. Think of it like having an in-house marketing team, but at a fraction of the cost.',
        },
        {
          q: 'Can I cancel the monthly retainer?',
          a: 'After your minimum commitment period (6-12 months depending on package), yes, with 30 days notice. However, 94% of clients continue because the ongoing value far exceeds the cost. You own the website if you leave; you\'ll just need to arrange your own hosting and maintenance.',
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. The only additional costs would be optional add-ons you choose (like Google Ads management) or third-party services (like premium stock photos if you want specific images). Everything in your package is included.',
        },
        {
          q: 'Can I upgrade packages later?',
          a: 'Absolutely! We\'ll credit your setup fee toward the higher tier. Example: Start with Foundation (£2,800), upgrade to Growth Engine (£6,500) within 12 months, you\'d only pay the £3,700 difference.',
        },
      ],
    },
    {
      category: 'About Services',
      questions: [
        {
          q: 'Do you only work with law firms?',
          a: 'Yes. We specialize exclusively in legal services. This means we understand SRA compliance, legal marketing regulations, client confidentiality requirements, and what actually converts legal clients.',
        },
        {
          q: 'Which countries do you serve?',
          a: 'Primarily UK and US law firms, though we work with English-speaking firms globally. We have pricing in both £ (GBP) and $ (USD).',
        },
        {
          q: 'How long does implementation take?',
          a: 'Foundation: 6-8 weeks. Growth Engine: 10-12 weeks. Enterprise Partner: 16-20 weeks. We move quickly but don\'t cut corners.',
        },
      ],
    },
    {
      category: 'About Results',
      questions: [
        {
          q: 'Do you guarantee results?',
          a: 'We guarantee our expertise, effort, and quality of work. Specific lead numbers depend on many factors (your market, competition, practice areas, case values). However, our Enterprise package includes a 90-day satisfaction guarantee.',
        },
        {
          q: 'How quickly will we see ROI?',
          a: 'Most clients recover their investment within 2-4 months. Some see positive ROI in weeks. It depends on your practice area, market, and case values. We provide realistic projections during discovery.',
        },
        {
          q: 'What kind of results do clients typically see?',
          a: 'Foundation: +150-300% increase in enquiries within 6 months. Growth Engine: +250-400% increase in qualified leads within 6 months. Enterprise Partner: +400-600% increase plus massive operational efficiency gains.',
        },
      ],
    },
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
          <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl text-[#0C1625] mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: qIndex * 0.1 }}
                      className="bg-[#F5F7FA] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-100 transition-colors"
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
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      quote: 'We were hesitant about the monthly cost, but Ashcroft Digital paid for itself in the first month. Our enquiries tripled, and the quality of leads improved dramatically. The chatbot alone has saved us 10+ hours per week on phone screening.',
      author: 'Sarah Wilson',
      title: 'Senior Partner',
      firm: 'Wilson & Partners, Manchester',
      package: 'Growth Engine Client',
    },
    {
      quote: 'We\'ve worked with three agencies before Ashcroft Digital. They were all generalists who didn\'t understand the legal industry. Ashcroft knows SRA compliance, understands our clients, and speaks our language. The difference is night and day.',
      author: 'James Morrison',
      title: 'Managing Partner',
      firm: 'Milestone Corporate Law, London',
      package: 'Enterprise Partner Client',
    },
    {
      quote: 'The monthly partnership model made sense to us—websites need continuous work, not "set it and forget it". Our account manager is like having a CMO on retainer. Strategic, proactive, and genuinely invested in our success.',
      author: 'Emma Hartley',
      title: 'Founding Partner',
      firm: 'Hartley Family Law, Bristol',
      package: 'Growth Engine Client',
    },
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
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#C9A33B] text-[#C9A33B]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-[#0C1625]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-gray-600">{testimonial.firm}</p>
                <p className="text-sm text-[#C9A33B] mt-2">{testimonial.package}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '1',
      title: 'Discovery Call',
      description: 'Free 30-minute call to understand your goals and challenges',
      icon: <Clock size={32} />,
    },
    {
      number: '2',
      title: 'Proposal & Strategy',
      description: 'Custom proposal with detailed breakdown and ROI projections',
      icon: <TrendingUp size={32} />,
    },
    {
      number: '3',
      title: 'Approve & Kickoff',
      description: 'Review proposal, initial payment, and project kickoff',
      icon: <Check size={32} />,
    },
    {
      number: '4',
      title: 'We Build Your System',
      description: 'Regular check-ins, testing, and optimization',
      icon: <Sparkles size={32} />,
    },
    {
      number: '5',
      title: 'Launch & Optimize',
      description: 'Website goes live, systems activated, ongoing partnership begins',
      icon: <ArrowRight size={32} />,
    },
    {
      number: '6',
      title: 'Grow & Scale',
      description: 'Continuous optimization and compound your results',
      icon: <Shield size={32} />,
    },
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
            Getting Started
          </h2>
          <p className="text-xl text-gray-600">Our simple 6-step process</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#F5F7FA] p-8 rounded-2xl hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#C9A33B]/20 rounded-full flex items-center justify-center text-[#C9A33B]">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl text-[#C9A33B] mb-2">{step.number}</div>
                  </div>
                </div>
                <h3 className="text-xl text-[#0C1625] mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
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
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Not sure which package is right for you? Book a free 30-minute discovery call and we'll help you determine the best fit for your goals and budget.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="px-10 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
            >
              Book Discovery Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:admin@ashcroftdigital.com'}
              className="px-10 py-4 bg-white/10 text-white border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Email Us
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all"
          >
            <h3 className="text-2xl text-white mb-2">Foundation</h3>
            <p className="text-[#C9A33B] mb-4">£2,800 + £280/month</p>
            <p className="text-white/70 text-sm mb-6">Professional website + AI lead capture</p>
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="w-full py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Get Started →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#C9A33B] to-[#E5C158] p-8 rounded-2xl text-center transform md:-translate-y-4 shadow-2xl"
          >
            <div className="inline-block bg-[#0C1625] text-white px-4 py-1 rounded-full text-sm mb-4">
              Most Popular
            </div>
            <h3 className="text-2xl text-[#0C1625] mb-2">Growth Engine</h3>
            <p className="text-[#0C1625] mb-4">£6,500 + £680/month</p>
            <p className="text-[#0C1625]/80 text-sm mb-6">Complete client acquisition system</p>
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="w-full py-3 bg-[#0C1625] text-white rounded-lg hover:bg-[#1a2332] transition-all"
            >
              Get Started →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all"
          >
            <h3 className="text-2xl text-white mb-2">Enterprise Partner</h3>
            <p className="text-[#C9A33B] mb-4">£14,500 + £1,450/month</p>
            <p className="text-white/70 text-sm mb-6">Dedicated growth partnership</p>
            <button
              onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
              className="w-full py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Book Strategy Session →
            </button>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-2">Still Have Questions?</p>
          <p className="text-white mb-4">
            <a href="mailto:admin@ashcroftdigital.com" className="hover:text-[#C9A33B] transition-colors">
              admin@ashcroftdigital.com
            </a>
          </p>
          <p className="text-white/60">
            Monday-Friday: 9am-5pm GMT / EST
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServiceHero />
      <IntroductionSection />
      <PricingTable />
      <PaymentOptions />
      <PackageDescriptions />
      <WhyMonthlyPartnership />
      <ComparisonTable />
      <FAQSection />
      <Testimonials />
      <GettingStarted />
      <FinalCTA />
    </div>
  );
}
