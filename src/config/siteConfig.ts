/**
 * SITE CONFIGURATION FILE
 * 
 * Update this file to change contact information, social links, and blog articles.
 * This is the ONLY file you need to edit for these updates.
 */

export const siteConfig = {
  // Basic Site Information
  name: 'Ashcroft Digital Solutions',
  description: 'AI-driven growth and automation agency helping growth-focused law firms scale through intelligent design, marketing systems, and automation.',
  url: 'https://ashcroftdigital.com', // Update with your actual domain
  
  // Contact Information
  contact: {
    email: 'admin@ashcroftdigital.com', // UPDATE THIS when ready
    phone: '+447459876677', // WhatsApp number (include country code)
    whatsappMessage: 'Hello! I\'d like to learn more about your services.',
  },
  
  // Social Media Links
  social: {
    linkedin: 'https://www.linkedin.com/company/ashcroft-digital/',
    facebook: 'https://www.facebook.com/share/19xU8GSxyv/',
    twitter: 'https://twitter.com/ashcroftdigital', // UPDATE THIS when ready
    instagram: 'https://instagram.com/ashcroftdigital', // UPDATE THIS when ready
    // Add more social platforms as needed
  },
  
  // SEO Meta Tags
  seo: {
    title: 'Ashcroft Digital Solutions | AI-Driven Growth & Automation for Law Firms',
    description: 'Transform your law firm with AI-driven design, marketing automation, and growth systems. Premium web solutions for growth-focused law firms.',
    keywords: 'law firm marketing, legal website design, AI automation for lawyers, law firm growth, legal practice automation, attorney marketing, law firm web design, AI automation for legal industry, client intake system, GDPR compliance, marketing automation ROI, law firm website conversion',
    author: 'Ashcroft Digital Solutions',
    ogImage: '/og-image.png', // Create and upload an Open Graph image (1200x630px recommended)
  },
};

// Blog Articles Data
// Add new articles to this array. They will automatically appear on the Insights page.
export const blogArticles = [
  {
    id: 1,
    slug: 'law-firm-website-conversion-failures',
    title: 'Why 87% of Law Firm Websites Fail to Convert Visitors Into Clients (And How to Fix Yours)',
    excerpt: 'Most law firms waste thousands on beautiful websites that don\'t generate leads. Discover the 7 fatal mistakes killing your conversions and exactly how to fix them.',
    category: 'Website Strategy',
    date: '2025-01-15',
    author: 'Ashcroft Team',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
  },
  {
    id: 2,
    slug: 'gdpr-compliant-marketing-automation-law-firms',
    title: 'GDPR-Compliant Marketing Automation for UK Law Firms: The Complete 2025 Guide',
    excerpt: 'Master GDPR-compliant marketing automation for your law firm. Learn the 7 essential elements, avoid costly mistakes, and implement automation that drives growth while staying compliant.',
    category: 'Marketing Automation',
    date: '2025-01-12',
    author: 'Ashcroft Team',
    readTime: '12 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000',
  },
  {
    id: 3,
    slug: 'ai-tools-modern-law-firms-2025',
    title: '5 AI Tools Every Modern Law Firm Should Use in 2025',
    excerpt: 'AI won\'t replace solicitors, but solicitors using AI will replace those who don\'t. Discover 5 practical AI tools that save dozens of hours weekly while improving client service.',
    category: 'AI & Technology',
    date: '2025-01-08',
    author: 'Ashcroft Team',
    readTime: '10 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000',
  },
  {
    id: 4,
    slug: 'calculate-true-roi-law-firm-website',
    title: 'How to Calculate the True ROI of Your Law Firm Website',
    excerpt: 'That £12,000 website actually cost £192,000 in lost opportunities. Learn how to calculate your website\'s true ROI, track the metrics that matter, and stop wasting money on ineffective marketing.',
    category: 'Business Strategy',
    date: '2025-01-05',
    author: 'Ashcroft Team',
    readTime: '9 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000',
  },
];

/**
 * HOW TO ADD A NEW BLOG ARTICLE:
 * 
 * 1. Copy the template below
 * 2. Update the id (use the next number in sequence)
 * 3. Fill in all the fields
 * 4. Add it to the blogArticles array above
 * 5. Add corresponding full content to /config/blogContent.ts
 * 
 * Template:
 * {
 *   id: 5,
 *   slug: 'your-article-slug-here',
 *   title: 'Your Article Title Here',
 *   excerpt: 'A brief description of your article (1-2 sentences)',
 *   category: 'Website Strategy' | 'Marketing Automation' | 'AI & Technology' | 'Business Strategy',
 *   date: 'YYYY-MM-DD',
 *   author: 'Ashcroft Team',
 *   readTime: 'X min read',
 *   featured: true/false, // Featured articles appear first
 *   image: 'https://images.unsplash.com/photo-xxxxx', // Use Unsplash or your own image URL
 * }
 */
