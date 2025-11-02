import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import ServicesPage from './components/ServicesPage';
import InsightsPage from './components/InsightsPage';
import BlogArticlePage from './components/BlogArticlePage';
import PolicyPages from './components/PolicyPages';
import WhatsAppButton from './components/WhatsAppButton';
import BrandKit from './components/logos/BrandKit';
import LogoExport from './components/logos/LogoExport';
import FaviconExport from './components/logos/FaviconExport';
import FullLogoDemo from './components/logos/FullLogoDemo';
import BrandAssetsPanel from './components/BrandAssetsPanel';
import SEOHead from './components/SEOHead';
import { getArticleById } from './config/blogContent';
import { blogArticles } from './config/siteConfig';

export default function App() {
  // Initialize page from URL path
  const getInitialPage = () => {
    const path = window.location.pathname.slice(1) || 'home';
    
    // Handle article routes (e.g., /article/1)
    if (path.startsWith('article/')) {
      const articleId = parseInt(path.split('/')[1]);
      if (!isNaN(articleId)) {
        setCurrentArticleId(articleId);
        return 'article';
      }
    }
    
    // Handle known routes
    const validPages = [
      'home', 'about', 'case-studies', 'services', 'insights',
      'privacy', 'cookies', 'terms', 'refunds', 'disclaimer',
      'brand-kit', 'logo-export', 'favicon-export', 'full-logo-demo'
    ];
    
    return validPages.includes(path) ? path : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [currentArticleId, setCurrentArticleId] = useState<number | null>(null);

  // Update URL when navigating
  const handleNavigate = (page: string, articleId?: number) => {
    setCurrentPage(page);
    if (articleId !== undefined) {
      setCurrentArticleId(articleId);
      window.history.pushState({}, '', `/article/${articleId}`);
    } else {
      setCurrentArticleId(null);
      const path = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({}, '', path);
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';
      
      if (path.startsWith('article/')) {
        const articleId = parseInt(path.split('/')[1]);
        if (!isNaN(articleId)) {
          setCurrentArticleId(articleId);
          setCurrentPage('article');
        }
      } else {
        setCurrentPage(path === '' ? 'home' : path);
        setCurrentArticleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'services':
        return <ServicesPage />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      case 'article':
        return currentArticleId ? (
          <BlogArticlePage articleId={currentArticleId} onNavigate={handleNavigate} />
        ) : (
          <InsightsPage onNavigate={handleNavigate} />
        );
      case 'privacy':
        return <PolicyPages policyType="privacy" />;
      case 'cookies':
        return <PolicyPages policyType="cookies" />;
      case 'terms':
        return <PolicyPages policyType="terms" />;
      case 'refunds':
        return <PolicyPages policyType="refunds" />;
      case 'disclaimer':
        return <PolicyPages policyType="disclaimer" />;
      case 'brand-kit':
        return <BrandKit />;
      case 'logo-export':
        return <LogoExport />;
      case 'favicon-export':
        return <FaviconExport />;
      case 'full-logo-demo':
        return <FullLogoDemo />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Get page-specific SEO metadata
  const getPageSEO = () => {
    switch (currentPage) {
      case 'about':
        return {
          title: 'About Us - Ashcroft Digital Solutions | London AI & Automation Agency',
          description: 'Ashcroft Digital Solutions is a London-based digital growth and automation agency helping legal services firms build systems that convert, scale, and sustain growth.',
        };
      case 'case-studies':
        return {
          title: 'Case Studies - Real Results & ROI | Ashcroft Digital Solutions',
          description: 'Explore how we helped law firms and agencies achieve 3.2× booking increases, 5× qualified leads, and 60% faster onboarding through intelligent automation.',
        };
      case 'services':
        return {
          title: 'Services & Plans - Launch, Scale, Elevate | Ashcroft Digital Solutions',
          description: 'Choose from Launch (£2,500), Scale (£5,000), or Elevate (£10,000) packages. Web design, marketing automation, and AI systems for law firms.',
        };
      case 'insights':
        return {
          title: 'Insights & Blog - Marketing, Automation & AI | Ashcroft Digital Solutions',
          description: 'Expert insights on digital marketing, business automation, AI integration, and growth strategies for modern law firms.',
        };
      case 'article':
        if (currentArticleId) {
          const article = blogArticles.find(a => a.id === currentArticleId);
          const fullContent = getArticleById(currentArticleId);
          if (article && fullContent) {
            return {
              title: `${article.title} | Ashcroft Digital Solutions`,
              description: fullContent.metaDescription,
            };
          }
        }
        return {};
      default:
        return {};
    }
  };

  const pageSEO = getPageSEO();

  return (
    <div className="min-h-screen">
      <SEOHead {...pageSEO} />
      <Navbar currentPage={currentPage === 'article' ? 'insights' : currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
      <BrandAssetsPanel onNavigate={handleNavigate} />
    </div>
  );
}
