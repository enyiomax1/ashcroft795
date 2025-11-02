import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogArticles } from '../config/siteConfig';
import { getArticleById } from '../config/blogContent';

interface BlogArticlePageProps {
  articleId: number;
  onNavigate: (page: string, articleId?: number) => void;
}

export default function BlogArticlePage({ articleId, onNavigate }: BlogArticlePageProps) {
  // Get article metadata from siteConfig
  const article = blogArticles.find(a => a.id === articleId);
  // Get full article content
  const fullContent = getArticleById(articleId);

  if (!article || !fullContent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#0C1625] mb-4">Article Not Found</h1>
          <button
            onClick={() => onNavigate('insights')}
            className="text-[#C9A33B] hover:text-[#E5C158] flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ArticleHero article={article} onNavigate={onNavigate} />
      
      {/* Article Content */}
      <ArticleContent article={article} fullContent={fullContent} />
      
      {/* CTA Section */}
      <ArticleCTA cta={fullContent.cta} />
      
      {/* Related Articles */}
      <RelatedArticles currentArticleId={articleId} onNavigate={onNavigate} />
    </div>
  );
}

function ArticleHero({ article, onNavigate }: { article: any; onNavigate: (page: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative pt-32 pb-12 bg-gradient-to-br from-[#0C1625] via-[#1a2332] to-[#0C1625] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          onClick={() => onNavigate('insights')}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </motion.button>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A33B]/20 border border-[#C9A33B]/30 rounded-full text-[#C9A33B] backdrop-blur-sm">
            {article.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl text-white mb-6"
        >
          {article.title}
        </motion.h1>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 text-white/70"
        >
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{article.readTime}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ArticleContent({ article, fullContent }: { article: any; fullContent: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <article ref={ref} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-[#0C1625]/80 leading-relaxed">
            {fullContent.introduction}
          </p>
        </motion.div>

        {/* Article Sections */}
        <div className="space-y-12">
          {fullContent.sections.map((section: any, index: number) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (index + 3) }}
            >
              {section.headingLevel === 'h2' ? (
                <h2 className="text-3xl md:text-4xl text-[#0C1625] mb-6">
                  {section.heading}
                </h2>
              ) : (
                <h3 className="text-2xl md:text-3xl text-[#0C1625] mb-4">
                  {section.heading}
                </h3>
              )}
              <div className="text-lg text-[#0C1625]/80 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl text-[#0C1625] mb-6">
            Conclusion
          </h2>
          <p className="text-lg text-[#0C1625]/80 leading-relaxed">
            {fullContent.conclusion}
          </p>
        </motion.div>
      </div>
    </article>
  );
}

function ArticleCTA({ cta }: { cta: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-[#0C1625] to-[#1a2332]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl text-white mb-6">
            {cta.text}
          </h3>
          <button
            onClick={() => window.open('https://calendar.app.google/rpgbMu6dx6oQMrCF9', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A33B] text-[#0C1625] rounded-lg hover:bg-[#E5C158] hover:shadow-lg hover:shadow-[#C9A33B]/20 transition-all duration-300 hover:-translate-y-1 group"
          >
            {cta.buttonText}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function RelatedArticles({ currentArticleId, onNavigate }: { currentArticleId: number; onNavigate: (page: string, articleId?: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Get 3 related articles (excluding current)
  const relatedArticles = blogArticles
    .filter(a => a.id !== currentArticleId)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section ref={ref} className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#0C1625] mb-4">
            Related Articles
          </h2>
          <p className="text-lg text-[#0C1625]/70">
            Continue exploring our insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div
                onClick={() => onNavigate('article', article.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-[#0C1625]">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-[#0C1625] mb-3 group-hover:text-[#C9A33B] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#0C1625]/70 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#0C1625]/60">
                    <span>{article.readTime}</span>
                    <ArrowRight
                      size={18}
                      className="text-[#C9A33B] group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
