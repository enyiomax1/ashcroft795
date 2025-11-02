#!/bin/bash
# Quick deployment script - use when you're confident everything is ready

echo "🚀 Quick Deploy to Vercel..."
echo ""

# Fix _redirects
./fix-redirects.sh > /dev/null 2>&1

# Add all changes
git add .

# Commit with timestamp
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push
git push origin main

echo ""
echo "✅ Pushed to GitHub!"
echo "⏳ Vercel is building... Check https://vercel.com/dashboard"
echo ""
