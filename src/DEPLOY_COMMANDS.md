# ⚡ Deployment Commands - Quick Reference

## 🎯 Copy & Paste Commands

---

## 🟣 Vercel Deployment

### **First Time Setup:**
```bash
# Install CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### **Future Updates:**
```bash
vercel --prod
```

### **Or Use GitHub:**
```bash
git add .
git commit -m "Update site"
git push origin main
# Auto-deploys on Vercel
```

---

## 🟢 Netlify Deployment

### **First Time Setup:**
```bash
# Install CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy to production
netlify deploy --prod --dir=build
```

### **Future Updates:**
```bash
npm run build
netlify deploy --prod --dir=build
```

### **Or Use GitHub:**
```bash
git add .
git commit -m "Update site"
git push origin main
# Auto-deploys on Netlify
```

---

## 🛠️ Build Commands

### **Local Build:**
```bash
npm run build
```

### **Local Preview:**
```bash
npm run build
npx vite preview
# Visit: http://localhost:4173
```

### **Dev Server:**
```bash
npm run dev
# Visit: http://localhost:3000
```

---

## 🔧 Fix Commands

### **Fix _redirects Issue:**
```bash
chmod +x fix-redirects.sh
./fix-redirects.sh
```

### **Clean Build:**
```bash
rm -rf build/
npm run build
```

### **Clean Install:**
```bash
rm -rf node_modules/
npm install
```

---

## 📦 Complete Deploy Workflow

### **Vercel (Recommended):**
```bash
# 1. Optional: Fix any issues
./fix-redirects.sh

# 2. Test locally
npm run build
npx vite preview

# 3. Deploy
vercel --prod

# Done! 🎉
```

### **Netlify:**
```bash
# 1. Optional: Fix any issues
./fix-redirects.sh

# 2. Build
npm run build

# 3. Deploy
netlify deploy --prod --dir=build

# Done! 🎉
```

### **GitHub Auto-Deploy:**
```bash
# 1. Push changes
git add .
git commit -m "Deploy updates"
git push origin main

# 2. Wait 30-60 seconds
# Auto-deploys on Vercel/Netlify

# Done! 🎉
```

---

## 🧪 Testing Commands

### **Check Build Output:**
```bash
npm run build
ls -la build/
cat build/_redirects
```

### **Check Package Versions:**
```bash
npm list
```

### **Check Node Version:**
```bash
node --version
npm --version
```

---

## 🌐 Domain Commands

### **Vercel - Add Domain:**
```bash
vercel domains add yourdomain.com
vercel domains verify yourdomain.com
```

### **Netlify - Add Domain:**
```bash
netlify domains:add yourdomain.com
```

---

## 📊 Monitoring Commands

### **Vercel - View Logs:**
```bash
vercel logs
```

### **Netlify - View Logs:**
```bash
netlify watch
```

### **Check Deployment Status:**
```bash
# Vercel
vercel ls

# Netlify
netlify status
```

---

## 🔄 Rollback Commands

### **Vercel - Rollback:**
```bash
# List deployments
vercel ls

# Promote specific deployment
vercel promote <deployment-url>
```

### **Netlify - Rollback:**
```bash
# List deployments
netlify sites:list

# Restore specific deploy
netlify api restoreSiteDeploy --site-id=<id> --deploy-id=<id>
```

---

## 🗑️ Remove/Cancel Commands

### **Cancel Build:**
```bash
# Ctrl+C in terminal
# Or cancel in dashboard
```

### **Remove Project:**
```bash
# Vercel
vercel remove <project-name>

# Netlify
netlify sites:delete <site-id>
```

---

## 💡 Useful Shortcuts

### **Quick Deploy (Vercel):**
```bash
npm run build && vercel --prod
```

### **Quick Deploy (Netlify):**
```bash
npm run build && netlify deploy --prod --dir=build
```

### **Test + Deploy:**
```bash
npm run build && npx vite preview &
# Test at localhost:4173
# Then: vercel --prod
```

---

## 🔐 Environment Variables

### **Vercel:**
```bash
# Add variable
vercel env add VITE_API_KEY

# Pull variables locally
vercel env pull
```

### **Netlify:**
```bash
# Add variable
netlify env:set VITE_API_KEY your-value

# List variables
netlify env:list
```

---

## 📱 Mobile Testing

### **Test on Network:**
```bash
# Start dev server
npm run dev -- --host

# Visit on phone:
# http://YOUR_IP:3000
```

---

## 🎯 One-Liner Deploys

### **Vercel (Fastest):**
```bash
vercel --prod
```

### **Netlify:**
```bash
npm run build && netlify deploy --prod --dir=build
```

### **GitHub:**
```bash
git add . && git commit -m "deploy" && git push
```

---

## 📝 Commit Messages

```bash
# Feature
git commit -m "feat: Add new contact form"

# Fix
git commit -m "fix: Resolve mobile navigation issue"

# Update
git commit -m "update: Improve homepage hero"

# Deploy
git commit -m "deploy: Production release v1.0"
```

---

## ✅ Success Check

After deploying, verify:

```bash
# Check if site is up
curl -I https://your-site.vercel.app

# Expected: HTTP/2 200

# Or visit in browser:
open https://your-site.vercel.app
```

---

## 🆘 Emergency Commands

### **Site Down:**
```bash
# Check status
vercel ls  # or netlify status

# Redeploy last working version
git revert HEAD
git push origin main
```

### **Build Broken:**
```bash
# Clean everything
rm -rf node_modules/ build/
npm install
npm run build
```

### **Files Missing:**
```bash
# Verify public folder
ls -la public/

# Should show:
# _redirects (file, not folder)
# favicon.svg
# 404.html
# health.html
```

---

**Quick Reference Complete!** 🎯

Copy any command above and paste into your terminal.

For detailed guides, see:
- `START_HERE.md`
- `VERCEL_QUICKSTART.md`
- `DEPLOY_NOW.md`
