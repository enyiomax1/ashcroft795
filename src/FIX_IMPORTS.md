# Quick Fix for Netlify Build

The build is failing because the `/components/ui` folder contains UI library components with versioned imports (like `@radix-ui/react-accordion@1.2.3`) which don't work with standard npm builds.

## SOLUTION 1: Delete Unused UI Components (RECOMMENDED - FASTEST)

Since your website doesn't actually use these UI components, the fastest fix is to delete them:

**In your project root, run:**
```bash
rm -rf components/ui
```

Then commit and push:
```bash
git add .
git commit -m "Remove unused UI components"
git push
```

## SOLUTION 2: Fix All Imports (if you need these components later)

If you want to keep the UI components for future use, you need to remove the `@version` from all imports.

Create a file called `fix-imports.sh` and run it:

```bash
#!/bin/bash

# Fix all versioned imports in components/ui folder
find components/ui -name "*.tsx" -type f -exec sed -i '' \
  -e 's/@radix-ui\/react-\([a-z-]*\)@[0-9.]*/@radix-ui\/react-\1/g' \
  -e 's/lucide-react@[0-9.]*/lucide-react/g' \
  -e 's/class-variance-authority@[0-9.]*/class-variance-authority/g' \
  -e 's/@radix-ui\/react-slot@[0-9.]*/@radix-ui\/react-slot/g' \
  -e 's/react-day-picker@[0-9.]*/react-day-picker/g' \
  -e 's/embla-carousel-react@[0-9.]*/embla-carousel-react/g' \
  -e 's/recharts@[0-9.]*/recharts/g' \
  -e 's/cmdk@[0-9.]*/cmdk/g' \
  -e 's/vaul@[0-9.]*/vaul/g' \
  -e 's/input-otp@[0-9.]*/input-otp/g' \
  -e 's/react-hook-form@[0-9.]*/react-hook-form/g' \
  -e 's/react-resizable-panels@[0-9.]*/react-resizable-panels/g' \
  {} \;

echo "Fixed all imports!"
```

Make it executable and run:
```bash
chmod +x fix-imports.sh
./fix-imports.sh
```

## RECOMMENDED: Use Solution 1

Your website is complete and working. You don't need these UI components right now. Delete them and deploy!
