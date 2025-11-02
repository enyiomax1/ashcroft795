import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle2, 
  Target,
  Award,
  BarChart3,
  DollarSign,
  Building2,
  AlertCircle
} from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DisclaimerSection />
      <CaseStudy1 />
      <CaseStudy2 />
      <CaseStudy3 />
      <CommonThemes />
      <CTASection />
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
          <h1 className="text-5xl md:text-7xl text-white mb-8">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Real transformations from law firms that invested in the right systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white border-l-4 border-[#C9A33B] rounded-r-lg p-6 flex gap-4"
        >
          <AlertCircle size={24} className="text-[#C9A33B] flex-shrink-0" />
          <p className="text-gray-700 italic">
            <strong>Note:</strong> These are illustrative examples designed to demonstrate our approach and typical results. All scenarios are composites based on common law firm challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudy1() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A33B]/10 border border-[#C9A33B]/20 rounded-full text-[#C9A33B]">
              Case Study 1
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-6">
              Personal Injury Firm Doubles Lead Volume
            </h2>

            {/* Client Profile */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 mb-8">
              <h3 className="text-2xl text-[#0C1625] mb-4">Client Profile</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2"><strong>Practice:</strong> Mid-sized personal injury firm, Manchester</p>
                  <p className="text-gray-600 mb-2"><strong>Size:</strong> 8 solicitors, 15 staff</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2"><strong>Challenge:</strong> Outdated website generating fewer than 10 qualified leads per month</p>
                  <p className="text-gray-600"><strong>Package:</strong> Growth Engine Tier</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="mb-12">
            <h3 className="text-3xl text-[#0C1625] mb-6">The Challenge</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Harrison & Associates had been practicing personal injury law in Manchester for 20 years. Their reputation was solid, but their digital presence was stuck in 2015. Their website was slow, not mobile-friendly, and lacked any lead capture automation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-[#F5F7FA] rounded-xl p-6">
                <h4 className="text-xl text-[#0C1625] mb-4">Key Pain Points:</h4>
                <ul className="space-y-2">
                  {[
                    'Website had 3.2% conversion rate (industry average: 8-12%)',
                    'No automated follow-up for inquiries',
                    'Staff spending 15+ hours per week manually responding',
                    'Losing potential clients who inquired outside business hours',
                    'No way to track marketing ROI or lead sources'
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#C9A33B]/5 rounded-xl p-6">
                <h4 className="text-xl text-[#0C1625] mb-4">The Opportunity:</h4>
                <p className="text-gray-700">
                  The firm had strong case outcomes and excellent client testimonials—they just needed the systems to capture and convert more of their website traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="mb-12">
            <h3 className="text-3xl text-[#0C1625] mb-6">Our Solution</h3>
            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1: Website Redesign',
                  weeks: 'Weeks 1-4',
                  items: [
                    'Rebuilt site on modern platform with mobile-first design',
                    'Implemented clear conversion paths for different injury types',
                    'Added urgency elements (free consultation, no win/no fee messaging)',
                    'Optimized page load speeds from 8.2s to 1.4s',
                    'Created separate landing pages for RTA, workplace accidents, and clinical negligence'
                  ]
                },
                {
                  phase: 'Phase 2: AI-Powered Intake Bot',
                  weeks: 'Weeks 5-6',
                  items: [
                    'Deployed intelligent chatbot that qualifies leads 24/7',
                    'Bot asks qualifying questions about injury type, timeline, and case details',
                    'Routes high-value cases directly to senior solicitors',
                    'Screens out time-wasters and non-viable cases',
                    'Captures contact details even when office is closed'
                  ]
                },
                {
                  phase: 'Phase 3: Marketing Automation',
                  weeks: 'Weeks 7-10',
                  items: [
                    'Set up automated email sequences for different inquiry types',
                    'Implemented SMS reminders for scheduled consultations',
                    'Created review automation system to capture testimonials',
                    'Integrated with firm\'s case management system',
                    'Built dashboard to track lead sources and conversion rates'
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-[#C9A33B]/20 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#C9A33B] rounded-full flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl text-[#0C1625]">{phase.phase}</h4>
                      <p className="text-sm text-gray-600">{phase.weeks}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Results */}
          <div className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-3xl text-white mb-8 text-center">The Results After 6 Months</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { label: 'Monthly Qualified Leads', from: '9', to: '31', icon: <TrendingUp size={32} />, change: '+244%' },
                { label: 'After-Hours Inquiries Captured', value: '127', icon: <Clock size={32} />, subtitle: 'Previously lost' },
                { label: 'Chatbot Engagement Rate', value: '64%', icon: <Users size={32} />, subtitle: 'of visitors' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center bg-white/5 rounded-xl p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#C9A33B]/20 flex items-center justify-center text-[#C9A33B]">
                    {stat.icon}
                  </div>
                  <p className="text-white/70 mb-2">{stat.label}</p>
                  {stat.from ? (
                    <div className="text-3xl text-[#C9A33B]">{stat.from} → {stat.to}</div>
                  ) : (
                    <div className="text-4xl text-[#C9A33B]">{stat.value}</div>
                  )}
                  {(stat.change || stat.subtitle) && (
                    <p className="text-sm text-white/60 mt-2">{stat.change || stat.subtitle}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-xl text-white mb-4">Time Savings</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Admin time reduced by 18 hours/week</li>
                  <li>• Annual savings: £31,200 in staff costs</li>
                  <li>• Solicitors spending 90% less time on unqualified prospects</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-xl text-white mb-4">Revenue Impact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 14 new cases signed in 6 months</li>
                  <li>• Average case value: £28,000</li>
                  <li>• Estimated revenue: £392,000</li>
                  <li>• <strong className="text-[#C9A33B]">ROI: 11,200%</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#F5F7FA] rounded-xl p-8 border-l-4 border-[#C9A33B]">
            <p className="text-xl text-gray-700 italic mb-6">
              "The transformation has been remarkable. We're no longer losing potential clients to firms that respond faster. The automated systems work around the clock, and the quality of leads has actually improved because the chatbot filters out the time-wasters. Best investment we've made in a decade."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C9A33B] rounded-full flex items-center justify-center text-white">
                JH
              </div>
              <div>
                <p className="text-[#0C1625]">James Harrison</p>
                <p className="text-sm text-gray-600">Senior Partner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudy2() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A33B]/10 border border-[#C9A33B]/20 rounded-full text-[#C9A33B]">
              Case Study 2
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-6">
              Family Law Practice Cuts Admin Time by 60%
            </h2>

            {/* Client Profile */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="text-2xl text-[#0C1625] mb-4">Client Profile</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2"><strong>Practice:</strong> Boutique family law firm, Edinburgh</p>
                  <p className="text-gray-600 mb-2"><strong>Size:</strong> 3 partners, 6 staff</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2"><strong>Challenge:</strong> Drowning in administrative work, no time for business development</p>
                  <p className="text-gray-600"><strong>Package:</strong> Enterprise Partner Tier</p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge & Solution Summary */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl text-[#0C1625] mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                MacLeod Family Law was known for exceptional client service, but partners were working 60+ hour weeks, with 40% of their time consumed by admin tasks.
              </p>
              <ul className="space-y-2">
                {[
                  'Manual client onboarding taking 4-6 hours per new client',
                  'No automated document collection or e-signing',
                  'Partners managing 150+ emails daily',
                  'Website generating only 2-3 inquiries per month'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-[#0C1625] mb-4">The Opportunity</h3>
              <p className="text-gray-700 leading-relaxed">
                The firm had a 98% client satisfaction rate and strong word-of-mouth referrals. They needed systems to leverage that success and free up partners for higher-value work.
              </p>
            </div>
          </div>

          {/* Results Highlight */}
          <div className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-3xl text-white mb-8 text-center">After 9 Months</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { value: '62.5%', label: 'Reduction in admin time', icon: <Clock size={28} /> },
                { value: '45 mins', label: 'Client onboarding time', icon: <CheckCircle2 size={28} />, subtitle: 'Down from 4-6 hours' },
                { value: '14/mo', label: 'Website inquiries', icon: <TrendingUp size={28} />, subtitle: 'Up from 2-3' },
                { value: '£702K', label: 'Value of reclaimed time', icon: <DollarSign size={28} /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center bg-white/5 rounded-xl p-4"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#C9A33B]/20 flex items-center justify-center text-[#C9A33B]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl text-[#C9A33B] mb-1">{stat.value}</div>
                  <p className="text-sm text-white/70">{stat.label}</p>
                  {stat.subtitle && <p className="text-xs text-white/50 mt-1">{stat.subtitle}</p>}
                </motion.div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl text-white mb-4">Business Growth</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-white/80">
                <li>• New cases opened: +187%</li>
                <li>• Revenue increase: £246,000</li>
                <li>• Client portal adoption: 89%</li>
                <li>• Firm expanded from 3 to 4 partners</li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-xl p-8 border-l-4 border-[#C9A33B] shadow-sm">
            <p className="text-xl text-gray-700 italic mb-6">
              "I was skeptical about automation in family law—our clients need empathy and personal attention. But Ashcroft showed us how technology could handle the routine tasks so we could spend more time on what matters: listening to clients and providing strategic counsel. We've tripled our capacity without sacrificing quality."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C9A33B] rounded-full flex items-center justify-center text-white">
                SM
              </div>
              <div>
                <p className="text-[#0C1625]">Sarah MacLeod</p>
                <p className="text-sm text-gray-600">Managing Partner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudy3() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A33B]/10 border border-[#C9A33B]/20 rounded-full text-[#C9A33B]">
              Case Study 3
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0C1625] mb-6">
              Employment Law Firm Dominates Local Market
            </h2>

            {/* Client Profile */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 mb-8">
              <h3 className="text-2xl text-[#0C1625] mb-4">Client Profile</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2"><strong>Practice:</strong> Employment law specialists, Birmingham</p>
                  <p className="text-gray-600 mb-2"><strong>Size:</strong> 12 solicitors, 20 staff</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2"><strong>Challenge:</strong> Website invisible in search, losing clients to competitors</p>
                  <p className="text-gray-600"><strong>Package:</strong> Enterprise Partner Tier + 6-month ongoing support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h3 className="text-3xl text-[#0C1625] mb-6">The Challenge</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Brookfield Employment Law had the expertise to compete with any Magic Circle firm, but their digital presence was invisible. They ranked on page 3+ for every target keyword and were losing potential clients to firms with inferior expertise but better marketing.
            </p>
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h4 className="text-xl text-[#0C1625] mb-4">Key Pain Points:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Only 180 website visitors per month',
                  'Ranking outside top 50 for key terms',
                  'No content marketing strategy',
                  'Missing out on high-value corporate clients',
                  'Competitors dominating Google and LinkedIn',
                  '85% of inquiries from referrals only'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-3xl text-white mb-8 text-center">After 12 Months</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Search Visibility', value: '+1,483%', icon: <BarChart3 size={32} /> },
                { label: 'Organic Traffic', value: '2,847/mo', icon: <TrendingUp size={32} />, subtitle: 'Up from 180' },
                { label: 'Monthly Inquiries', value: '37', icon: <Users size={32} />, subtitle: 'Up from 7' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center bg-white/5 rounded-xl p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#C9A33B]/20 flex items-center justify-center text-[#C9A33B]">
                    {stat.icon}
                  </div>
                  <div className="text-4xl text-[#C9A33B] mb-2">{stat.value}</div>
                  <p className="text-white/70">{stat.label}</p>
                  {stat.subtitle && <p className="text-sm text-white/50 mt-1">{stat.subtitle}</p>}
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-xl text-white mb-4">Market Position</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Page 1 rankings for 43 target keywords</li>
                  <li>• Featured snippets captured: 8</li>
                  <li>• Now recognized as Birmingham's employment law specialists</li>
                  <li>• Firm expanded to 15 solicitors</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-xl text-white mb-4">Financial Impact</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Revenue increase: £487,000</li>
                  <li>• 8 new corporate retainer clients</li>
                  <li>• Average case value increased 34%</li>
                  <li>• <strong className="text-[#C9A33B]">ROI: 4,770%</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#F5F7FA] rounded-xl p-8 border-l-4 border-[#C9A33B]">
            <p className="text-xl text-gray-700 italic mb-6">
              "Ashcroft didn't just build us a website—they built us a market position. We went from invisible to inevitable in our space. Corporate clients now find us when searching for employment law expertise, and our content establishes credibility before we even have a conversation. The ongoing support keeps us ahead of competitors who are still figuring out what we did."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#C9A33B] rounded-full flex items-center justify-center text-white">
                MB
              </div>
              <div>
                <p className="text-[#0C1625]">Michael Brookfield</p>
                <p className="text-sm text-gray-600">Senior Partner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CommonThemes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const themes = [
    {
      icon: <Building2 size={32} />,
      title: 'Leadership Commitment',
      description: 'All three firms had partners willing to invest time and resources in transformation'
    },
    {
      icon: <Target size={32} />,
      title: 'Clear Goals',
      description: 'Each firm knew what success looked like and how to measure it'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Process Adherence',
      description: 'They followed our implementation roadmap and completed assigned tasks'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data-Driven Decisions',
      description: 'They let performance data guide optimization rather than opinions'
    },
    {
      icon: <Clock size={32} />,
      title: 'Patience with Process',
      description: 'They understood that transformation takes 6-12 months, not 6 weeks'
    }
  ];

  const kpis = [
    'Website traffic and sources',
    'Conversion rate by page and source',
    'Lead quality and qualification rate',
    'Time from inquiry to consultation',
    'Consultation show-up rate',
    'Inquiry to retention conversion',
    'Average case value',
    'Client acquisition cost',
    'Time saved through automation',
    'Revenue per staff member'
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
            Common Themes Across All Success Stories
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* What Made These Transformations Possible */}
          <div>
            <h3 className="text-2xl text-[#0C1625] mb-6">What Made These Transformations Possible:</h3>
            <div className="space-y-4">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A33B]/10 rounded-xl flex items-center justify-center text-[#C9A33B] flex-shrink-0">
                      {theme.icon}
                    </div>
                    <div>
                      <h4 className="text-lg text-[#0C1625] mb-1">{theme.title}</h4>
                      <p className="text-gray-600 text-sm">{theme.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KPIs We Track */}
          <div>
            <h3 className="text-2xl text-[#0C1625] mb-6">Key Performance Indicators We Track:</h3>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <ul className="space-y-3">
                {kpis.map((kpi, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-[#C9A33B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{kpi}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every law firm's situation is unique, but the pattern is consistent: the right systems + strategic implementation = measurable growth.
          </p>
          <button
            onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
            className="px-10 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 group"
          >
            Book Your Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
