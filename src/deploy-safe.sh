#!/bin/bash

echo "═══════════════════════════════════════════════════════"
echo "  🚀 Ashcroft Digital - Safe Deployment Script"
echo "═══════════════════════════════════════════════════════"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean up any _redirects files/folders
echo "1️⃣  Checking for problematic _redirects..."

if [ -d "public/_redirects" ]; then
    echo -e "${YELLOW}⚠️  Found _redirects folder - removing...${NC}"
    rm -rf public/_redirects
    echo -e "${GREEN}✅ Removed _redirects folder${NC}"
elif [ -f "public/_redirects" ]; then
    echo -e "${YELLOW}⚠️  Found _redirects file - removing...${NC}"
    rm -f public/_redirects
    echo -e "${GREEN}✅ Removed _redirects file${NC}"
else
    echo -e "${GREEN}✅ No _redirects conflicts (good!)${NC}"
fi

echo ""

# Step 2: Verify vercel.json exists
if [ -f "vercel.json" ]; then
    echo -e "${GREEN}✅ vercel.json present (handles routing)${NC}"
else
    echo -e "${RED}❌ vercel.json missing${NC}"
    exit 1
fi

echo ""

# Step 3: Verify vite.config.ts
echo "2️⃣  Checking vite.config.ts..."
if grep -q "fileURLToPath" vite.config.ts; then
    echo -e "${GREEN}✅ ES Module configuration present${NC}"
else
    echo -e "${RED}❌ vite.config.ts missing ES Module setup${NC}"
    exit 1
fi

echo ""

# Step 4: Test build locally
echo "3️⃣  Testing build locally..."
echo "   This may take 10-30 seconds..."
echo ""

npm run build > /tmp/build-output.log 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful!${NC}"
    echo ""
    # Show build stats
    if [ -d "build" ]; then
        echo "   Build output:"
        du -sh build/
        ls -lh build/ | grep -E "index.html|assets"
    fi
else
    echo -e "${RED}❌ Build failed!${NC}"
    echo ""
    echo "Error details:"
    cat /tmp/build-output.log
    echo ""
    echo "Please fix the errors above before deploying."
    exit 1
fi

echo ""

# Step 5: Show what will be committed
echo "4️⃣  Changes to be deployed:"
echo ""

git status --short

if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  No changes to commit.${NC}"
    echo "   Everything is already up to date."
    exit 0
fi

echo ""

# Step 6: Confirm deployment
echo "══════════════════════════════════════════════════════"
read -p "Deploy these changes to Vercel? (y/n): " -n 1 -r
echo ""
echo "══════════════════════════════════════════════════════"

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}❌ Deployment cancelled.${NC}"
    exit 1
fi

echo ""

# Step 7: Git add
echo "5️⃣  Adding files to git..."
git add .
echo -e "${GREEN}✅ Files added${NC}"

echo ""

# Step 8: Git commit
echo "6️⃣  Creating commit..."
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Deploy: $TIMESTAMP - Build verified and ready"
echo -e "${GREEN}✅ Committed${NC}"

echo ""

# Step 9: Git push
echo "7️⃣  Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Pushed successfully!${NC}"
else
    echo -e "${RED}❌ Push failed. Please check errors above.${NC}"
    exit 1
fi

echo ""
echo "═══════════════════════════════════════════════════════"
echo -e "${GREEN}  ✅ DEPLOYMENT COMPLETE!${NC}"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "  Next steps:"
echo "  1. Go to: https://vercel.com/dashboard"
echo "  2. Find your project"
echo "  3. Wait ~30-60 seconds for build"
echo "  4. Status should show: Ready ✅"
echo ""
echo "  Your site will be live at:"
echo "  https://your-project.vercel.app"
echo ""
echo "═══════════════════════════════════════════════════════"

# Clean up
rm -f /tmp/build-output.log
