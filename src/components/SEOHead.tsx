import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import faviconImage from 'figma:asset/e5ae78594048f0fe8db24d0e999626dcc612ea98.png';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  image, 
  url 
}: SEOHeadProps) {
  const pageTitle = title || siteConfig.seo.title;
  const pageDescription = description || siteConfig.seo.description;
  const pageImage = image || siteConfig.seo.ogImage;
  const pageUrl = url || siteConfig.url;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', siteConfig.seo.keywords);
    updateMetaTag('author', siteConfig.seo.author);

    // Open Graph meta tags
    updateMetaTag('og:title', pageTitle, true);
    updateMetaTag('og:description', pageDescription, true);
    updateMetaTag('og:image', pageImage, true);
    updateMetaTag('og:url', pageUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', siteConfig.name, true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    updateMetaTag('twitter:image', pageImage);

    // Viewport and charset (should already exist but ensure they're set)
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = faviconImage;

    // Apple touch icon
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = faviconImage;

  }, [pageTitle, pageDescription, pageImage, pageUrl]);

  return null; // This component doesn't render anything
}
