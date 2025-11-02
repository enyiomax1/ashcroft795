#!/bin/bash

echo "══════════════════════════════════════════════════════"
echo "  🔧 Ashcroft Digital - Remove _redirects Script"
echo "══════════════════════════════════════════════════════"
echo ""

# Remove _redirects completely (we use vercel.json instead)
echo "1️⃣  Removing _redirects (we use vercel.json now)..."

if [ -d "public/_redirects" ]; then
    echo "   ⚠️  Found _redirects as a directory - removing..."
    rm -rf public/_redirects
    echo "   ✅ Removed _redirects folder"
elif [ -f "public/_redirects" ]; then
    echo "   ⚠️  Found _redirects as a file - removing..."
    rm -f public/_redirects
    echo "   ✅ Removed _redirects file"
else
    echo "   ✅ No _redirects found (perfect!)"
fi

echo ""

# Check dependencies
echo "2️⃣  Checking dependencies..."

if [ -f "package.json" ]; then
    if grep -q "@types/node" package.json; then
        echo "   ✅ @types/node present"
    else
        echo "   ⚠️  @types/node missing - run: npm install"
    fi
else
    echo "   ❌ package.json not found"
    exit 1
fi

echo ""

# Check vite config
echo "3️⃣  Checking vite.config.ts..."

if [ -f "vite.config.ts" ]; then
    if grep -q "resolve:" vite.config.ts; then
        echo "   ✅ Path alias configured"
    else
        echo "   ⚠️  Path alias might be missing"
    fi
else
    echo "   ❌ vite.config.ts not found"
    exit 1
fi

echo ""

# Check CSS file
echo "4️⃣  Checking styles/globals.css..."

if [ -f "styles/globals.css" ]; then
    echo "   ✅ CSS file exists"
else
    echo "   ❌ styles/globals.css not found"
    exit 1
fi

echo ""
echo "══════════════════════════════════════════════════════"
echo "  ✅ All checks passed!"
echo "══════════════════════════════════════════════════════"
echo ""
echo "📋 Next steps:"
echo ""
echo "   1. npm install          (if @types/node was missing)"
echo "   2. npm run build        (test build locally)"
echo "   3. git add ."
echo "   4. git commit -m 'Fix deployment issues'"
echo "   5. git push origin main (triggers Vercel)"
echo ""
echo "   OR use: vercel --prod  (direct deploy)"
echo ""
echo "══════════════════════════════════════════════════════"
