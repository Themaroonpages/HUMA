# Huma Traders Shopify Theme

A premium Shopify theme with gold and maroon color scheme, designed for luxury e-commerce.

## Installation

### Method 1: Upload ZIP
1. Download this folder
2. Compress it into a ZIP file named `huma-traders-theme.zip`
3. Go to Shopify Admin → Online Store → Themes
4. Click "Add theme" → "Upload zip file"
5. Upload the ZIP and publish

### Method 2: Shopify CLI
```bash
shopify theme push
```

### Method 3: Manual Copy
1. Go to Shopify Admin → Online Store → Themes → Edit code
2. Copy each file content to the corresponding location

## Folder Structure
```
shopify-theme/
├── assets/
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_data.json
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── announcement-bar.liquid
│   ├── cart-drawer.liquid
│   ├── category-grid.liquid
│   ├── featured-products.liquid
│   ├── footer.liquid
│   ├── header.liquid
│   ├── hero-carousel.liquid
│   └── trust-strip.liquid
├── snippets/
│   └── product-card.liquid
└── templates/
    ├── 404.liquid
    ├── cart.liquid
    ├── collection.liquid
    ├── index.json
    ├── page.contact.liquid
    ├── page.faqs.liquid
    ├── page.liquid
    └── product.liquid
```

## After Installation

1. Create link lists:
   - `main-menu` for header navigation
   - `footer` for footer links

2. Create pages:
   - Contact (use template: page.contact)
   - FAQs (use template: page.faqs)
   - About
   - Shipping
   - Privacy
   - Terms

3. Add products and collections

4. Upload hero images and category images

5. Configure theme settings

## Color Scheme
- Primary Gold: #D4AF37
- Secondary Maroon: #800000
- Background Ivory: #FAF8F5
- Text Charcoal: #2D2A26

## Fonts
- Headings: Playfair Display
- Body: Nunito
