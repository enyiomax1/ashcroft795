# Ashcroft Digital Solutions - Logo Assets

## Overview
This directory contains the complete logo system and brand identity for Ashcroft Digital Solutions.

## Files

### Logo Components
- **AshcroftFullLogo.tsx** - Complete full-color logo with geometric "A" symbol and full text (NEW)
- **AshcroftMonogram.tsx** - The "A" monogram symbol (standalone icon)
- **AshcroftLogoHorizontal.tsx** - Horizontal logo lockup (icon + wordmark)
- **AshcroftLogoStacked.tsx** - Stacked logo lockup (icon above wordmark)
- **BrandKit.tsx** - Complete brand kit showcase with all variations
- **LogoExport.tsx** - Export page with all logo sizes and formats
- **README.md** - This file

## Viewing Logo Assets

### Option 1: In-App Viewing
Navigate to these pages in your browser:
- **Brand Kit**: Add `?page=brand-kit` to URL or navigate via app (shows comprehensive brand guidelines)
- **Logo Export**: Add `?page=logo-export` to URL (shows all logo variations ready for export)

### Option 2: Direct Component Usage
Import any logo component directly in your React code:

```tsx
import AshcroftFullLogo from './components/logos/AshcroftFullLogo';
import AshcroftMonogram from './components/logos/AshcroftMonogram';
import AshcroftLogoHorizontal from './components/logos/AshcroftLogoHorizontal';
import AshcroftLogoStacked from './components/logos/AshcroftLogoStacked';

// Use in your component
<AshcroftFullLogo width={1023} variant="dark" />
<AshcroftMonogram size={48} color="#C9A33B" />
<AshcroftLogoHorizontal variant="navy-gold" size="md" withTagline />
<AshcroftLogoStacked variant="white-gold" size="lg" />
```

## Logo Variations

### Color Variants
- **navy-gold**: Navy text (#0C1625) with gold icon (#C9A33B) - Primary
- **white-gold**: White text with gold icon - For dark backgrounds
- **graphite-ivory**: Graphite text (#1A1A1A) with gold icon - Neutral option
- **gold-navy**: Gold tagline variation

### Sizes
- **sm**: Small (32px height)
- **md**: Medium (48px height) - Default
- **lg**: Large (64px height)

### Layout Options
- **Horizontal**: Icon + wordmark side-by-side (best for headers)
- **Stacked**: Icon above wordmark (best for social media, presentations)
- **Monogram**: Icon only (best for favicons, small spaces)

### With/Without Tagline
- **withTagline={false}**: Clean logo only (default)
- **withTagline={true}**: Includes "DESIGN. AUTOMATE. SCALE." tagline

## Exporting Logo Files

### Method 1: Browser Export (SVG)
1. Open the Logo Export page in your browser
2. Right-click on desired logo
3. Select "Inspect Element"
4. Find the `<svg>` element in dev tools
5. Right-click `<svg>` tag → Copy → Copy outerHTML
6. Paste into text editor and save as `.svg`

### Method 2: Screenshot (PNG/JPG)
1. Take high-resolution screenshot of logo
2. Crop to remove excess space
3. Save in desired format
4. For best quality, use 2x or 3x screen resolution

## Recommended Export Sizes

### Web/Digital
- **Favicon**: 32x32, 64x64
- **Website Header**: Variable width, 48-64px height
- **Social Media Profile**: 400x400, 512x512, 1024x1024, 1200x1200
- **Open Graph/Meta**: 1200x630

### Print
- Use SVG for infinite scalability
- Minimum 300 DPI for raster exports
- CMYK color mode for print production

## Brand Colors

| Color Name | HEX | RGB | Usage |
|------------|-----|-----|-------|
| Midnight Navy | #0C1625 | 12, 22, 37 | Primary Background |
| Royal Gold | #C9A33B | 201, 163, 59 | Accent/Highlight |
| Ivory White | #F7F7F5 | 247, 247, 245 | Neutral Background |
| Graphite Black | #1A1A1A | 26, 26, 26 | Alternate Text |
| Accent Blue | #3A5FCD | 58, 95, 205 | Optional Accent |

## Typography

- **Headings**: Playfair Display (Serif)
- **Body/Wordmark**: Inter (Sans-serif)
- **Tagline**: Inter, 500 weight, all caps, letter-spacing: 0.15em

## Usage Guidelines

### Clear Space
Maintain clear space around logo equal to the width of the "A" crossbar.

### Minimum Size
- Digital: Never smaller than 32px in height
- Print: Never smaller than 0.5 inches in height

### Do's
✅ Use on appropriate backgrounds (light logo on dark, dark logo on light)
✅ Maintain proportions when scaling
✅ Use approved color variations
✅ Export as SVG when possible for scalability

### Don'ts
❌ Don't stretch or distort the logo
❌ Don't use unapproved colors
❌ Don't add effects (shadows, outlines) unless specified
❌ Don't place on busy backgrounds that reduce legibility

## File Structure
```
logos/
├── AshcroftFullLogo.tsx          # Complete logo with geometric symbol
├── AshcroftMonogram.tsx          # Icon/symbol component
├── AshcroftLogoHorizontal.tsx    # Horizontal lockup
├── AshcroftLogoStacked.tsx       # Stacked lockup
├── BrandKit.tsx                  # Brand showcase
├── LogoExport.tsx                # Export page
└── README.md                     # This file
```

## Support

For questions or custom logo variations, contact the design team.

---

**Ashcroft Digital Solutions**
*Design. Automate. Scale.*
