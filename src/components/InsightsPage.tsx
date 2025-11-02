import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Clock,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Mail,
  Calendar,
  Sparkles,
  List,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogArticles } from '../config/siteConfig';

interface InsightsPageProps {
  onNavigate?: (page: string, articleId?: number) => void;
}

function BlogIndex({ onNavigate }: { onNavigate?: (page: string, articleId?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A33B]/10 border border-[#C9A33B]/20 rounded-full text-[#C9A33B] mb-6">
            <List size={18} />
            <span>Article Index</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#0C1625] mb-4">
            Complete Insights Library
          </h2>
          <p className="text-lg text-[#0C1625]/70">
            Browse all our articles on AI, automation, web design, and business growth
          </p>
        </motion.div>

        <div className="space-y-4">
          {blogArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onNavigate?.('article', article.id)}
              className="group flex items-start gap-4 p-6 bg-white hover:bg-[#F5F7FA] border border-gray-200 hover:border-[#C9A33B]/30 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#C9A33B] to-[#E5C158] rounded-lg flex items-center justify-center text-white">
                {article.id}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl text-[#0C1625] group-hover:text-[#C9A33B] transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-[#0C1625]/70 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#0C1625]/60">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <ArrowRight
                  size={24}
                  className="text-[#C9A33B] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsHero() {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #C9A33B 0%, transparent 50%), radial-gradient(circle at 80% 80%, #C9A33B 0%, transparent 50%)',
            backgroundSize: '100% 100%',
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
            Insights that move business forward
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Practical strategy, AI innovation, and automation trends from our team
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ArticleGrid({ onNavigate }: { onNavigate?: (page: string, articleId?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories from blog articles
  const allCategories = Array.from(new Set(blogArticles.map(article => article.category)));
  const categories = [
    { id: 'all', label: 'All Articles' },
    ...allCategories.map(cat => ({ id: cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'), label: cat }))
  ];

  // Use articles from config file
  const articles = blogArticles.map(article => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
    author: article.author,
    date: new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: article.readTime,
    image: article.image,
    featured: article.featured,
  }));

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#C9A33B] text-[#0C1625] shadow-lg shadow-[#C9A33B]/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onNavigate?.('article', article.id)}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-2xl text-[#0C1625] group-hover:text-[#C9A33B] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <ArrowRight
                    size={20}
                    className="text-[#C9A33B] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: (page: string, articleId?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [email, setEmail] = useState('');

  const popularPosts = [
    {
      id: 8,
      title: 'The ROI of Marketing Automation',
      readTime: '7 min read',
    },
    {
      id: 9,
      title: 'Building High-Converting Landing Pages',
      readTime: '6 min read',
    },
    {
      id: 10,
      title: 'SEO in 2025: What Actually Works',
      readTime: '10 min read',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <aside ref={ref} className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Most Read */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-[#C9A33B]" size={24} />
              <h3 className="text-2xl text-[#0C1625]">Most Read</h3>
            </div>
            <ul className="space-y-4">
              {popularPosts.map((post, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={() => onNavigate?.('article', post.id)}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <BookOpen
                      size={16}
                      className="mt-1 text-gray-400 group-hover:text-[#C9A33B] transition-colors"
                    />
                    <div>
                      <p className="text-[#0C1625] group-hover:text-[#C9A33B] transition-colors mb-1">
                        {post.title}
                      </p>
                      <p className="text-sm text-gray-500">{post.readTime}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0C1625] to-[#1a2332] p-8 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <Mail className="text-[#C9A33B]" size={24} />
              <h3 className="text-2xl text-white">Subscribe to Insights</h3>
            </div>
            <p className="text-white/70 mb-6">
              Get our monthly briefing with the latest trends in design, automation, and
              growth strategy.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C9A33B] transition-colors"
              />
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                type="submit"
                className="w-full px-6 py-3 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </aside>
  );
}

function FeaturedArticle({ onNavigate }: { onNavigate?: (page: string, articleId?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // Get the featured article (article 7 - building scalable systems)
  const featuredArticle = blogArticles.find(a => a.id === 7) || blogArticles[0];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div>
          {/* Featured Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A33B]/10 text-[#C9A33B] rounded-full mb-6"
          >
            <Sparkles size={16} />
            <span>Featured Article</span>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl mb-8 aspect-[21/9]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759264244741-7175af0b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzA0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Featured article"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Article Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 text-sm text-gray-500"
            >
              <span>By David Ashcroft</span>
              <span>•</span>
              <span>October 22, 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl text-[#0C1625]"
            >
              The Complete Guide to Building Scalable Business Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              <span className="float-left text-6xl text-[#C9A33B] mr-3 mt-1">I</span>
              n today's competitive landscape, the difference between businesses that
              scale and those that plateau often comes down to systems. Not just any
              systems, but intelligent, automated workflows that free up your team to
              focus on high-value activities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="border-l-4 border-[#C9A33B] pl-6 py-4 my-8 italic text-xl text-gray-700"
            >
              "The best time to build systems was yesterday. The second best time is
              now."
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-600 leading-relaxed"
            >
              Over the past five years, we've helped over 150 law firms
              implement automation and growth systems. The results speak for themselves:
              an average 240% increase in lead conversion, 2,400+ hours saved per year,
              and sustainable, scalable growth.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              onClick={() => onNavigate?.('article', featuredArticle.id)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              Read Full Article
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightsCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#C9A33B] to-[#E5C158]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-[#0C1625] mb-6"
        >
          Get our monthly Insights briefing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[#0C1625]/80 mb-8"
        >
          Join hundreds of business leaders receiving practical strategy and automation
          insights
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm text-[#0C1625] placeholder-[#0C1625]/50 focus:outline-none focus:ring-2 focus:ring-[#0C1625]/30"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[#0C1625] text-white rounded-lg hover:bg-[#1a2332] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
          >
            Join the List
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default function InsightsPage({ onNavigate }: InsightsPageProps) {
  return (
    <div className="bg-white">
      <InsightsHero />
      <ArticleGrid onNavigate={onNavigate} />
      <BlogIndex onNavigate={onNavigate} />
      <Sidebar onNavigate={onNavigate} />
      <FeaturedArticle onNavigate={onNavigate} />
      <InsightsCTA />
    </div>
  );
}
