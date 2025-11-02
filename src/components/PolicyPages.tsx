import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield, Cookie, FileText, RefreshCw, AlertCircle } from 'lucide-react';

interface PolicyPagesProps {
  policyType: 'privacy' | 'cookies' | 'terms' | 'refunds' | 'disclaimer';
}

export default function PolicyPages({ policyType }: PolicyPagesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return <PrivacyPolicy isInView={isInView} />;
      case 'cookies':
        return <CookiePolicy isInView={isInView} />;
      case 'terms':
        return <TermsOfService isInView={isInView} />;
      case 'refunds':
        return <RefundsPolicy isInView={isInView} />;
      case 'disclaimer':
        return <Disclaimer isInView={isInView} />;
      default:
        return <PrivacyPolicy isInView={isInView} />;
    }
  };

  return (
    <div ref={ref} className="min-h-screen bg-white">
      {getPolicyContent()}
    </div>
  );
}

function PrivacyPolicy({ isInView }: { isInView: boolean }) {
  return (
    <div className="py-32 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A33B] to-[#E5C158] mb-6">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-[#0C1625] mb-6">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <p>Effective Date: January 1, 2025</p>
            <span>•</span>
            <p>Last Updated: January 1, 2025</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <Section title="1. Who We Are">
            <p className="text-gray-700 leading-relaxed">
              Ashcroft Digital Solutions ("we", "our", or "us") is a digital consultancy providing
              web design, marketing, and automation services.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Website: ashcroftdigital.com</li>
              <li>Email: admin@ashcroftdigital.com</li>
            </ul>
          </Section>

          <Section title="2. Information We Collect">
            <p className="text-gray-700 leading-relaxed mb-4">We may collect:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Personal information (name, email, company name, phone number).</li>
              <li>Usage data (browser type, IP address, pages visited, time spent).</li>
              <li>Form submissions (contact forms, bookings, quote requests).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not collect sensitive personal data unless you provide it voluntarily.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p className="text-gray-700 leading-relaxed mb-4">We use your data to:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Respond to enquiries and provide services.</li>
              <li>Process payments and manage client accounts.</li>
              <li>Send updates, offers, or newsletters (with consent).</li>
              <li>Improve our website performance and user experience.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not sell or rent your data to third parties.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing (UK GDPR)">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Contractual necessity</strong> — to perform agreed services.
              </li>
              <li>
                <strong>Legitimate interest</strong> — to improve operations.
              </li>
              <li>
                <strong>Consent</strong> — for newsletters or analytics.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p className="text-gray-700 leading-relaxed">
              We keep your data only as long as necessary for business or legal purposes, then delete
              or anonymise it securely.
            </p>
          </Section>

          <Section title="6. Data Sharing">
            <p className="text-gray-700 leading-relaxed">
              We use trusted service providers (like Google, Notion, Webflow, and Stripe) to help us
              operate. Each complies with UK or EU data protection laws.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p className="text-gray-700 leading-relaxed mb-4">You can:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Access or correct your data.</li>
              <li>Request deletion ("right to be forgotten").</li>
              <li>Withdraw consent for marketing at any time.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Email{' '}
              <a
                href="mailto:admin@ashcroftdigital.com"
                className="text-[#C9A33B] hover:underline"
              >
                admin@ashcroftdigital.com
              </a>{' '}
              to exercise your rights.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p className="text-gray-700 leading-relaxed">
              See our Cookie Policy for details on analytics and tracking technologies.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p className="text-gray-700 leading-relaxed mb-2">For privacy concerns:</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                Email:{' '}
                <a
                  href="mailto:admin@ashcroftdigital.com"
                  className="text-[#C9A33B] hover:underline"
                >
                  admin@ashcroftdigital.com
                </a>
              </li>
              <li>Address: [Insert UK business address]</li>
            </ul>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

function CookiePolicy({ isInView }: { isInView: boolean }) {
  return (
    <div className="py-32 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A33B] to-[#E5C158] mb-6">
            <Cookie size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-[#0C1625] mb-6">Cookie Policy</h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <Section title="What Are Cookies">
            <p className="text-gray-700 leading-relaxed">
              Cookies are small files stored on your device to improve browsing and remember
              preferences.
            </p>
          </Section>

          <Section title="How We Use Cookies">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Essential cookies:</strong> enable basic functions like navigation and access
                to secure areas.
              </li>
              <li>
                <strong>Analytics cookies:</strong> help us understand site performance (Google
                Analytics, Meta Pixel).
              </li>
              <li>
                <strong>Marketing cookies:</strong> used for retargeting ads on LinkedIn, Meta, or
                Google.
              </li>
            </ul>
          </Section>

          <Section title="Your Control">
            <p className="text-gray-700 leading-relaxed">
              You can adjust cookie preferences through the pop-up banner or your browser settings.
            </p>
          </Section>

          <Section title="Contact">
            <p className="text-gray-700 leading-relaxed">
              Questions about cookies? Email{' '}
              <a
                href="mailto:admin@ashcroftdigital.com"
                className="text-[#C9A33B] hover:underline"
              >
                admin@ashcroftdigital.com
              </a>
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

function TermsOfService({ isInView }: { isInView: boolean }) {
  return (
    <div className="py-32 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A33B] to-[#E5C158] mb-6">
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-[#0C1625] mb-6">Terms of Service</h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <Section title="1. Acceptance of Terms">
            <p className="text-gray-700 leading-relaxed">
              By accessing ashcroftdigital.com, you agree to these Terms. If you disagree, please
              discontinue use of the site.
            </p>
          </Section>

          <Section title="2. Services">
            <p className="text-gray-700 leading-relaxed">
              We provide digital design, marketing, and automation services. Specific deliverables are
              governed by signed client agreements or proposals.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p className="text-gray-700 leading-relaxed">
              All content, graphics, and materials on this website are owned or licensed by Ashcroft
              Digital Solutions. You may not copy, reproduce, or redistribute materials without
              permission.
            </p>
          </Section>

          <Section title="4. Limitation of Liability">
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee uninterrupted site availability or error-free performance. To the
              fullest extent permitted by law, Ashcroft Digital is not liable for any indirect or
              consequential damages arising from your use of this site.
            </p>
          </Section>

          <Section title="5. Governing Law">
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by English law. Disputes will be handled exclusively by the
              courts of England and Wales.
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

function RefundsPolicy({ isInView }: { isInView: boolean }) {
  return (
    <div className="py-32 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A33B] to-[#E5C158] mb-6">
            <RefreshCw size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-[#0C1625] mb-6">
            Refunds & Cancellation Policy
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <Section title="Service Projects (Web Design / Automation)">
            <ul className="space-y-2 text-gray-700">
              <li>
                Deposits are non-refundable once a project begins, as resources are allocated
                immediately.
              </li>
              <li>
                Cancellations after kickoff may incur partial charges for work completed.
              </li>
            </ul>
          </Section>

          <Section title="Subscription Services (Hosting / Maintenance / Retainers)">
            <ul className="space-y-2 text-gray-700">
              <li>Cancel anytime with 30 days' notice.</li>
              <li>No refunds for unused days in the current billing period.</li>
            </ul>
          </Section>

          <Section title="Digital Products or Templates">
            <p className="text-gray-700 leading-relaxed">
              Due to their digital nature, these are non-refundable once accessed or downloaded.
            </p>
          </Section>

          <Section title="Questions?">
            <p className="text-gray-700 leading-relaxed">
              Email{' '}
              <a
                href="mailto:admin@ashcroftdigital.com"
                className="text-[#C9A33B] hover:underline"
              >
                admin@ashcroftdigital.com
              </a>
            </p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

function Disclaimer({ isInView }: { isInView: boolean }) {
  return (
    <div className="py-32 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A33B] to-[#E5C158] mb-6">
            <AlertCircle size={32} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-[#0C1625] mb-6">
            Website & Insights Disclaimer
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-4">
              All information shared on ashcroftdigital.com and its Insights blog is provided for
              general informational purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We make every effort to ensure accuracy but do not guarantee completeness or suitability
              for any specific business scenario.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ashcroft Digital Solutions accepts no responsibility for losses or damages resulting
              from reliance on information published on this site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For specific business, legal, or financial advice, please consult an appropriate
              professional advisor.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl text-[#0C1625] mb-4 pb-2 border-b-2 border-[#C9A33B]/30">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
