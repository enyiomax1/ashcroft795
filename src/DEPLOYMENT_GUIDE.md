# 🚀 Deployment Guide: Publishing to Your Own Domain

## Overview

Your Ashcroft Digital Solutions website is built with **React**, **Tailwind CSS**, and **TypeScript**. This guide will walk you through deploying it to your custom domain using the most popular hosting platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All content is finalized (text, images, links)
- ✅ Google Calendar booking links are configured in `/config/siteConfig.ts`
- ✅ WhatsApp number is correct in the WhatsApp button
- ✅ All policy pages are reviewed and updated
- ✅ SEO meta descriptions are optimized
- ✅ Favicon is working correctly

---

## 🎯 Recommended Hosting Platforms

### Option 1: Vercel (Recommended ⭐)

**Best for:** React applications, automatic deployments, excellent performance

#### Step-by-Step Deployment:

1. **Export Your Code**
   - Download all files from this Figma Make project
   - Create a folder on your computer (e.g., `ashcroft-digital`)
   - Extract all files into this folder

2. **Install Required Files**
   
   Create a `package.json` file in the root directory:
   ```json
   {
     "name": "ashcroft-digital-solutions",
     "version": "1.0.0",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "preview": "vite preview"
     },
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "motion": "^10.18.0",
       "lucide-react": "^0.344.0",
       "recharts": "^2.12.7",
       "sonner": "^2.0.3",
       "react-hook-form": "^7.55.0"
     },
     "devDependencies": {
       "@types/react": "^18.3.3",
       "@types/react-dom": "^18.3.0",
       "@vitejs/plugin-react": "^4.3.1",
       "typescript": "^5.5.3",
       "vite": "^5.3.4",
       "tailwindcss": "^4.0.0",
       "autoprefixer": "^10.4.20",
       "postcss": "^8.4.40"
     }
   }
   ```

3. **Create Vite Config**
   
   Create `vite.config.ts` in the root:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': '/src',
       },
     },
   });
   ```

4. **Create tsconfig.json**
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "useDefineForClassFields": true,
       "lib": ["ES2020", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true
     },
     "include": ["**/*.ts", "**/*.tsx"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

5. **Create index.html**
   
   Create `index.html` in the root:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Ashcroft Digital Solutions - AI-Driven Growth & Automation</title>
     </head>
     <body>
       <div id="root"></div>
       <script type="module" src="/main.tsx"></script>
     </body>
   </html>
   ```

6. **Create main.tsx**
   
   Create `main.tsx` in the root:
   ```typescript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.tsx';
   import './styles/globals.css';

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   );
   ```

7. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

8. **Push to GitHub**
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

9. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

10. **Connect Custom Domain**
    - Go to Project Settings → Domains
    - Add your domain (e.g., `ashcroftdigital.com`)
    - Follow DNS instructions to point your domain to Vercel
    - Add DNS records at your domain registrar:
      - **A Record**: `@` → `76.76.21.21`
      - **CNAME**: `www` → `cname.vercel-dns.com`
    - Wait for DNS propagation (5 minutes - 48 hours)

---

### Option 2: Netlify

**Best for:** Simple deployment, form handling, easy rollbacks

#### Quick Deployment:

1. **Prepare Code** (Same as Vercel steps 1-6)

2. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Connect Custom Domain**
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter your domain name
   - Update DNS at your registrar:
     - **A Record**: `@` → Netlify's IP (provided in dashboard)
     - **CNAME**: `www` → `yoursite.netlify.app`

---

### Option 3: GitHub Pages

**Best for:** Free hosting, simple projects

1. **Update vite.config.ts** for GitHub Pages:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add your repository name
   });
   ```

2. **Add Deploy Script** to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

3. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

6. **Custom Domain**:
   - Add a `CNAME` file to `/public` with your domain
   - Configure DNS at your registrar

---

## 🌐 Domain Configuration

### Where to Buy Domains:
- **Namecheap** (Recommended)
- **Google Domains** (Now Squarespace)
- **GoDaddy**
- **Cloudflare Registrar**

### DNS Configuration Example:

For **ashcroftdigital.com** → Vercel:

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.21.21             | Auto |
| CNAME | www  | cname.vercel-dns.com    | Auto |

---

## 🔧 Post-Deployment Configuration

### 1. Update Analytics (if needed)
Add Google Analytics to `/components/SEOHead.tsx`:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. SSL Certificate
- Vercel/Netlify automatically provision SSL certificates
- Your site will be accessible via HTTPS

### 3. Email Setup
Configure email for your domain:
- Use **Google Workspace** for professional email
- Or use **Zoho Mail** (free tier available)
- Update MX records at your domain registrar

### 4. Set Up Redirects
Create `_redirects` file in `/public` (for Netlify):
```
/insights/:article  /insights  200
/*  /index.html  200
```

For Vercel, create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## ✅ Testing Checklist

After deployment, test:

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Blog articles are accessible
- [ ] Google Calendar booking links work
- [ ] WhatsApp button opens correctly
- [ ] Images load on all pages
- [ ] Mobile responsiveness
- [ ] Forms submit properly
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain resolves correctly
- [ ] SEO meta tags are present (view page source)

---

## 🐛 Troubleshooting

### Issue: "Page Not Found" on refresh
**Solution**: Configure rewrites (see Post-Deployment section)

### Issue: Images not loading
**Solution**: Check if images are in the correct directory and paths are absolute

### Issue: Domain not resolving
**Solution**: Wait for DNS propagation (up to 48 hours), verify DNS records

### Issue: Build fails
**Solution**: Check `package.json` dependencies, ensure all imports are correct

---

## 📞 Need Help?

### Resources:
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **React Docs**: [react.dev](https://react.dev)

---

## 🎉 Quick Deploy Summary

**Fastest Path to Live:**

1. Download all project files
2. Create `package.json`, `vite.config.ts`, `index.html`, `main.tsx`
3. Push to GitHub
4. Deploy to Vercel (auto-deployment)
5. Add custom domain in Vercel dashboard
6. Update DNS at domain registrar
7. ✅ Live in under 30 minutes!

---

**Last Updated**: October 27, 2025  
**Status**: ✅ Ready for Production  
**Domain**: Your custom domain (e.g., ashcroftdigital.com)
