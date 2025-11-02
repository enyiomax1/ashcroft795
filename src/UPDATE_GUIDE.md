# 📝 Website Update Guide

This guide explains how to easily update your website's contact information, social media links, and blog articles.

## 🎯 Quick Start

**ALL UPDATES ARE MADE IN ONE FILE:** `/config/siteConfig.ts`

This is the only file you need to edit for most content updates!

---

## 📞 Updating Contact Information

1. Open `/config/siteConfig.ts`
2. Find the `contact` section:

```typescript
contact: {
  email: 'admin@ashcroftdigital.com', // UPDATE THIS
  phone: '+447123456789', // UPDATE THIS (include country code with +)
  whatsappMessage: 'Hello! I\'d like to learn more about your services.',
},
```

3. Replace with your actual contact details
4. Save the file - changes will appear immediately!

**Important Notes:**
- For the phone number, include the country code with a `+` (e.g., `+447123456789`)
- The WhatsApp button uses this phone number automatically
- The email appears in the footer

---

## 🔗 Updating Social Media Links

1. Open `/config/siteConfig.ts`
2. Find the `social` section:

```typescript
social: {
  linkedin: 'https://linkedin.com/company/ashcroftdigital', // UPDATE THIS
  twitter: 'https://twitter.com/ashcroftdigital', // UPDATE THIS
  instagram: 'https://instagram.com/ashcroftdigital', // UPDATE THIS
},
```

3. Replace with your actual social media profile URLs
4. Save the file - links in the footer will update automatically!

**To add more social platforms:**
- Add a new line (e.g., `facebook: 'https://facebook.com/yourpage'`)
- You'll need to update the Footer component to display the new icon

---

## 📰 Adding Blog Articles

### Method 1: Quick Add (Recommended)

1. Open `/config/siteConfig.ts`
2. Scroll to the `blogArticles` array
3. Copy this template:

```typescript
{
  id: 7, // Use the next number in sequence
  title: 'Your Article Title Here',
  excerpt: 'A brief description of your article (1-2 sentences)',
  category: 'AI & Automation', // Choose from: 'AI & Automation', 'Web Design', 'Business Growth', 'Strategy'
  date: '2024-03-20', // Format: YYYY-MM-DD
  author: 'Your Name',
  readTime: '8 min read',
  featured: false, // Set to true to feature at the top
  image: 'https://images.unsplash.com/photo-xxxxx', // Unsplash image URL
}
```

4. Fill in your article details
5. Add it to the `blogArticles` array (paste it at the top for newest articles)
6. Save the file - your article will appear on the Insights page!

### Finding Images for Articles

Use [Unsplash](https://unsplash.com/) for free, high-quality images:
1. Search for a relevant topic
2. Copy the image URL
3. Paste it into the `image` field

### Categories

Choose from these existing categories:
- **AI & Automation** - AI tools, automation workflows, chatbots
- **Web Design** - Design principles, UX, conversion optimization
- **Business Growth** - Scaling strategies, revenue growth, positioning
- **Strategy** - Business planning, customer journey, market positioning

**To add a new category:** Just use a new category name - it will automatically appear in the filters!

---

## 🎨 SEO & Meta Tags

SEO settings are also in `/config/siteConfig.ts`:

```typescript
seo: {
  title: 'Ashcroft Digital Solutions | AI-Driven Growth & Automation',
  description: 'Transform your service business with AI-driven design...',
  keywords: 'AI automation, web design, marketing automation...',
  author: 'Ashcroft Digital Solutions',
  ogImage: '/og-image.png', // Social sharing image (1200x630px)
},
```

**To update:**
1. Edit the `title` and `description` for better search results
2. Add relevant `keywords` (comma-separated)
3. Create a 1200x630px image for social sharing and add the URL to `ogImage`

---

## 🚀 Publishing Checklist

Before going live, update these in `/config/siteConfig.ts`:

- [ ] Contact email
- [ ] WhatsApp phone number
- [ ] LinkedIn profile URL
- [ ] Twitter profile URL  
- [ ] Instagram profile URL
- [ ] Website URL (change from example.com to your domain)
- [ ] SEO title and description
- [ ] Add at least 3 real blog articles

---

## 🎯 Advanced Updates

### Editing the Homepage

Edit `/components/HomePage.tsx` to change:
- Hero section text
- The three pillars content
- Case studies
- Stats and metrics

### Editing Services/Pricing

Edit `/components/ServicesPage.tsx` to change:
- Service tier names (Launch, Scale, Elevate)
- Pricing
- Features included in each tier
- CTA buttons

### Policy Pages

Edit `/components/PolicyPages.tsx` to update:
- Privacy Policy
- Cookie Policy
- Terms of Service
- Refund Policy
- Disclaimer

---

## 💡 Tips

1. **Test changes locally** before publishing to production
2. **Keep backups** of the original `siteConfig.ts` file
3. **Use consistent formatting** for dates (YYYY-MM-DD)
4. **Optimize images** - use Unsplash URLs or compress images before uploading
5. **Featured articles** appear first - use sparingly for your best content

---

## ❓ Need Help?

If you need to make changes beyond what's in `siteConfig.ts`, here's where to look:

| What to Change | File to Edit |
|----------------|-------------|
| Contact info & blog | `/config/siteConfig.ts` |
| Homepage content | `/components/HomePage.tsx` |
| Services/pricing | `/components/ServicesPage.tsx` |
| Insights page layout | `/components/InsightsPage.tsx` |
| Footer | `/components/Footer.tsx` |
| Navigation menu | `/components/Navbar.tsx` |
| Colors & fonts | `/styles/globals.css` |

---

## 📧 Quick Reference

**Most Common Updates:**

```typescript
// 1. Update phone number
contact: {
  phone: '+44XXXXXXXXXX', // Your WhatsApp number
}

// 2. Update email
contact: {
  email: 'hello@yourdomain.com',
}

// 3. Add a blog article
{
  id: 8,
  title: 'How to Scale Your Business with AI',
  excerpt: 'Practical tips for implementing AI in your workflow',
  category: 'AI & Automation',
  date: '2024-03-25',
  author: 'Your Name',
  readTime: '7 min read',
  featured: true,
  image: 'https://images.unsplash.com/photo-xxxxx',
}
```

---

**That's it! Most updates only require editing `/config/siteConfig.ts`. Happy updating! 🎉**
