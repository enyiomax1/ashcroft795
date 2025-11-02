#!/bin/bash

echo "========================================="
echo "🔍 Ashcroft Digital - Deployment Verification"
echo "========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if _redirects exists and is a file
echo "1. Checking _redirects file..."
if [ -d "public/_redirects" ]; then
    echo -e "${RED}❌ ERROR: _redirects is a directory!${NC}"
    echo "   Fixing..."
    rm -rf public/_redirects
    echo "/*    /index.html   200" > public/_redirects
    echo -e "${GREEN}✅ Fixed: Created _redirects file${NC}"
elif [ -f "public/_redirects" ]; then
    echo -e "${GREEN}✅ _redirects is a file${NC}"
    echo "   Contents:"
    cat public/_redirects | sed 's/^/   /'
else
    echo -e "${YELLOW}⚠️  _redirects missing, creating...${NC}"
    echo "/*    /index.html   200" > public/_redirects
    echo -e "${GREEN}✅ Created _redirects file${NC}"
fi
echo ""

# Check Node version
echo "2. Checking Node.js version..."
NODE_VERSION=$(node -v)
echo -e "${GREEN}✅ Node version: $NODE_VERSION${NC}"
echo ""

# Check if node_modules exists
echo "3. Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules exists${NC}"
else
    echo -e "${YELLOW}⚠️  node_modules missing${NC}"
    echo "   Run: npm install"
fi
echo ""

# Check critical files
echo "4. Checking critical files..."
FILES=("index.html" "App.tsx" "main.tsx" "vite.config.ts" "package.json")
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file missing!${NC}"
    fi
done
echo ""

# Check public folder
echo "5. Checking public folder..."
PUBLIC_FILES=("favicon.svg" "404.html" "health.html")
for file in "${PUBLIC_FILES[@]}"; do
    if [ -f "public/$file" ]; then
        echo -e "${GREEN}✅ public/$file${NC}"
    else
        echo -e "${YELLOW}⚠️  public/$file missing${NC}"
    fi
done
echo ""

# Test build (if requested)
if [ "$1" == "--build" ]; then
    echo "6. Testing build..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Build successful!${NC}"
        
        # Check if _redirects was copied to build
        if [ -f "build/_redirects" ]; then
            echo -e "${GREEN}✅ _redirects copied to build/${NC}"
            echo "   Contents:"
            cat build/_redirects | sed 's/^/   /'
        else
            echo -e "${RED}❌ _redirects NOT in build folder!${NC}"
        fi
    else
        echo -e "${RED}❌ Build failed!${NC}"
    fi
fi

echo ""
echo "========================================="
echo "📋 Summary"
echo "========================================="
echo ""
echo "To build and deploy:"
echo "  1. npm run build"
echo "  2. npx netlify-cli deploy --prod --dir=build"
echo ""
echo "To test locally:"
echo "  npm run preview"
echo "  Visit: http://localhost:4173/services"
echo ""
echo "========================================="
