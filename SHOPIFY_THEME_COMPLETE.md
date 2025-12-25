# Huma Traders - Complete Shopify Liquid Theme

## Theme Structure
Create these folders in your Shopify theme:
```
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
├── templates/
```

---

## 1. LAYOUT FILES

### layout/theme.liquid
```liquid
<!DOCTYPE html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#D4AF37">
  
  <link rel="canonical" href="{{ canonical_url }}">
  <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>
  
  {%- if settings.favicon != blank -%}
    <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
  {%- endif -%}
  
  <title>
    {{ page_title }}
    {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
    {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
    {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
  </title>
  
  {% if page_description %}
    <meta name="description" content="{{ page_description | escape }}">
  {% endif %}
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
  
  {{ 'theme.css' | asset_url | stylesheet_tag }}
  
  {{ content_for_header }}
  
  <script>
    document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  </script>
</head>

<body class="template-{{ template.name | handle }}">
  <a class="skip-to-content-link visually-hidden" href="#MainContent">
    {{ "accessibility.skip_to_text" | t }}
  </a>
  
  {% section 'announcement-bar' %}
  {% section 'header' %}
  
  <main id="MainContent" class="main-content" role="main" tabindex="-1">
    {{ content_for_layout }}
  </main>
  
  {% section 'footer' %}
  
  {% section 'cart-drawer' %}
  
  <script src="{{ 'theme.js' | asset_url }}" defer></script>
</body>
</html>
```

---

## 2. CONFIG FILES

### config/settings_schema.json
```json
[
  {
    "name": "theme_info",
    "theme_name": "Huma Traders",
    "theme_version": "1.0.0",
    "theme_author": "Huma Traders",
    "theme_documentation_url": "https://humatraders.com",
    "theme_support_url": "https://humatraders.com/contact"
  },
  {
    "name": "Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_primary",
        "label": "Primary Color (Gold)",
        "default": "#D4AF37"
      },
      {
        "type": "color",
        "id": "color_secondary",
        "label": "Secondary Color (Maroon)",
        "default": "#800000"
      },
      {
        "type": "color",
        "id": "color_background",
        "label": "Background Color",
        "default": "#FAF8F5"
      },
      {
        "type": "color",
        "id": "color_text",
        "label": "Text Color",
        "default": "#2D2A26"
      }
    ]
  },
  {
    "name": "Typography",
    "settings": [
      {
        "type": "font_picker",
        "id": "font_heading",
        "label": "Heading Font",
        "default": "playfair_display_n4"
      },
      {
        "type": "font_picker",
        "id": "font_body",
        "label": "Body Font",
        "default": "nunito_n4"
      }
    ]
  },
  {
    "name": "Logo",
    "settings": [
      {
        "type": "image_picker",
        "id": "logo",
        "label": "Logo"
      },
      {
        "type": "range",
        "id": "logo_width",
        "min": 50,
        "max": 300,
        "step": 10,
        "unit": "px",
        "label": "Logo Width",
        "default": 150
      }
    ]
  },
  {
    "name": "Favicon",
    "settings": [
      {
        "type": "image_picker",
        "id": "favicon",
        "label": "Favicon"
      }
    ]
  },
  {
    "name": "Social Media",
    "settings": [
      {
        "type": "text",
        "id": "social_facebook",
        "label": "Facebook URL"
      },
      {
        "type": "text",
        "id": "social_instagram",
        "label": "Instagram URL"
      },
      {
        "type": "text",
        "id": "social_twitter",
        "label": "Twitter URL"
      },
      {
        "type": "text",
        "id": "social_youtube",
        "label": "YouTube URL"
      }
    ]
  },
  {
    "name": "Cart",
    "settings": [
      {
        "type": "select",
        "id": "cart_type",
        "label": "Cart Type",
        "options": [
          { "value": "drawer", "label": "Drawer" },
          { "value": "page", "label": "Page" }
        ],
        "default": "drawer"
      }
    ]
  }
]
```

### config/settings_data.json
```json
{
  "current": {
    "color_primary": "#D4AF37",
    "color_secondary": "#800000",
    "color_background": "#FAF8F5",
    "color_text": "#2D2A26"
  }
}
```

---

## 3. ASSETS

### assets/theme.css
```css
/* ============================================
   HUMA TRADERS - PREMIUM SHOPIFY THEME CSS
   ============================================ */

/* CSS Variables */
:root {
  /* Primary Colors */
  --color-gold: #D4AF37;
  --color-gold-light: #E5C76B;
  --color-gold-dark: #B8962E;
  --color-maroon: #800000;
  --color-maroon-light: #A52A2A;
  --color-maroon-dark: #5C0000;
  
  /* Neutral Colors */
  --color-ivory: #FAF8F5;
  --color-cream: #F5F0E8;
  --color-charcoal: #2D2A26;
  --color-charcoal-light: #4A4743;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Nunito', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(212, 175, 55, 0.1);
  --shadow-md: 0 4px 12px rgba(212, 175, 55, 0.15);
  --shadow-lg: 0 10px 30px rgba(212, 175, 55, 0.2);
  --shadow-glow: 0 0 20px rgba(212, 175, 55, 0.3);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
}

/* Reset & Base */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-ivory);
  color: var(--color-charcoal);
  line-height: 1.6;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-charcoal);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

@media (min-width: 768px) {
  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.5rem; }
  h3 { font-size: 1.75rem; }
}

a {
  color: var(--color-gold-dark);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-gold);
}

/* Container */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-gold {
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
  color: var(--color-charcoal);
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.btn-maroon {
  background: linear-gradient(135deg, var(--color-maroon), var(--color-maroon-light));
  color: white;
  box-shadow: 0 4px 15px rgba(128, 0, 0, 0.3);
}

.btn-maroon:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(128, 0, 0, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-gold);
  color: var(--color-gold);
}

.btn-outline:hover {
  background: var(--color-gold);
  color: var(--color-charcoal);
}

/* Announcement Bar */
.announcement-bar {
  background: linear-gradient(135deg, var(--color-maroon), var(--color-maroon-light));
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.875rem;
}

.announcement-bar a {
  color: var(--color-gold-light);
  text-decoration: underline;
}

/* Header */
.header {
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.header-logo img {
  height: auto;
  max-height: 60px;
}

.header-logo-text {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-charcoal);
}

.header-logo-text span {
  color: var(--color-gold);
}

.header-nav {
  display: none;
}

@media (min-width: 1024px) {
  .header-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}

.header-nav a {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-charcoal);
  position: relative;
}

.header-nav a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-gold), var(--color-maroon));
  transition: width var(--transition-normal);
}

.header-nav a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  color: var(--color-charcoal);
  transition: all var(--transition-fast);
  position: relative;
}

.header-icon:hover {
  background: var(--color-gold);
  color: var(--color-charcoal);
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  background: var(--color-maroon);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

@media (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-charcoal);
  transition: all var(--transition-fast);
}

/* Hero Carousel */
.hero-carousel {
  position: relative;
  overflow: hidden;
}

.hero-slide {
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 800px;
}

.hero-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(45, 42, 38, 0.9), rgba(45, 42, 38, 0.6), rgba(45, 42, 38, 0.3));
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 600px;
  padding: 2rem;
  color: white;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 4rem;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid var(--color-gold);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

.hero-title span {
  color: var(--color-gold);
}

.hero-description {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.8;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.125rem;
  }
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Carousel Controls */
.carousel-controls {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.carousel-dot.active {
  background: var(--color-gold);
  transform: scale(1.2);
}

.carousel-arrows {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.carousel-arrow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  transition: all var(--transition-fast);
}

.carousel-arrow:hover {
  background: var(--color-gold);
  color: var(--color-charcoal);
}

/* Trust Strip */
.trust-strip {
  background: linear-gradient(135deg, var(--color-charcoal), var(--color-charcoal-light));
  padding: 2rem 0;
}

.trust-strip-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .trust-strip-inner {
    grid-template-columns: repeat(4, 1fr);
  }
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
}

.trust-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 0.75rem;
  color: var(--color-gold);
}

.trust-title {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.trust-text {
  font-size: 0.75rem;
  opacity: 0.7;
}

/* Section Styling */
.section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .section {
    padding: 6rem 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold-dark);
  margin-bottom: 1rem;
}

.section-title {
  margin-bottom: 1rem;
}

.section-title span {
  color: var(--color-gold);
}

.section-description {
  max-width: 600px;
  margin: 0 auto;
  color: var(--color-charcoal-light);
}

/* Category Grid */
.category-section {
  background: var(--color-cream);
  position: relative;
}

.category-section::before {
  content: '';
  position: absolute;
  inset: 1rem;
  border: 2px solid var(--color-gold);
  pointer-events: none;
}

.category-section::after {
  content: '';
  position: absolute;
  inset: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  pointer-events: none;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.category-card {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: var(--radius-lg);
  overflow: hidden;
  group: true;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.category-card:hover img {
  transform: scale(1.1);
}

.category-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(45, 42, 38, 0.9), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
}

.category-card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.25rem;
}

.category-card-count {
  font-size: 0.875rem;
  color: var(--color-gold);
}

.category-card-link {
  position: absolute;
  inset: 0;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Product Card */
.product-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-gold);
}

.product-card-image {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.product-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card-image img {
  transform: scale(1.05);
}

.product-card-badges {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-badge {
  padding: 0.25rem 0.75rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: var(--radius-full);
}

.product-badge-sale {
  background: var(--color-maroon);
  color: white;
}

.product-badge-new {
  background: var(--color-gold);
  color: var(--color-charcoal);
}

.product-card-actions {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateX(10px);
  transition: all var(--transition-fast);
}

.product-card:hover .product-card-actions {
  opacity: 1;
  transform: translateX(0);
}

.product-action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.product-action-btn:hover {
  background: var(--color-gold);
}

.product-card-content {
  padding: 1.25rem;
}

.product-card-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold-dark);
  margin-bottom: 0.5rem;
}

.product-card-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-card-title a {
  color: var(--color-charcoal);
}

.product-card-title a:hover {
  color: var(--color-gold);
}

.product-card-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.product-price-current {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-maroon);
}

.product-price-compare {
  font-size: 0.875rem;
  color: var(--color-charcoal-light);
  text-decoration: line-through;
}

.product-card-button {
  width: 100%;
}

/* Mix & Match Banner */
.mix-match-section {
  background: linear-gradient(135deg, var(--color-charcoal), var(--color-charcoal-light));
  position: relative;
  overflow: hidden;
}

.mix-match-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.mix-match-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .mix-match-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.mix-match-content {
  color: white;
}

.mix-match-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid var(--color-gold);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

.mix-match-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

@media (min-width: 768px) {
  .mix-match-title {
    font-size: 2.5rem;
  }
}

.mix-match-title span {
  color: var(--color-gold);
}

.mix-match-description {
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.mix-match-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.mix-match-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mix-match-feature-icon {
  width: 24px;
  height: 24px;
  color: var(--color-gold);
}

.mix-match-feature-text {
  font-size: 0.875rem;
}

.mix-match-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.mix-match-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.3);
}

.mix-match-image:first-child {
  transform: translateY(1rem);
}

.mix-match-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3/4;
}

/* Sampler Section */
.sampler-section {
  background: var(--color-cream);
}

.sampler-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 2px solid rgba(212, 175, 55, 0.2);
}

.sampler-inner {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .sampler-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.sampler-image {
  position: relative;
}

.sampler-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}

.sampler-image-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  background: var(--color-gold);
  color: var(--color-charcoal);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: var(--radius-full);
}

.sampler-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .sampler-content {
    padding: 3rem;
  }
}

.sampler-title {
  margin-bottom: 1rem;
}

.sampler-title span {
  color: var(--color-gold);
}

.sampler-description {
  color: var(--color-charcoal-light);
  margin-bottom: 1.5rem;
}

.sampler-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.sampler-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
}

.sampler-feature-icon {
  width: 16px;
  height: 16px;
  color: var(--color-gold);
}

.sampler-price {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.sampler-price-current {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-maroon);
}

.sampler-price-compare {
  font-size: 1.125rem;
  color: var(--color-charcoal-light);
  text-decoration: line-through;
}

.sampler-savings {
  padding: 0.25rem 0.75rem;
  background: rgba(128, 0, 0, 0.1);
  color: var(--color-maroon);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

/* Footer */
.footer {
  background: var(--color-charcoal);
  color: white;
  padding: 4rem 0 2rem;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 2fr repeat(3, 1fr);
  }
}

.footer-brand-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
}

.footer-brand-title span {
  color: var(--color-gold);
}

.footer-brand-description {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.footer-social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  transition: all var(--transition-fast);
}

.footer-social-link:hover {
  background: var(--color-gold);
  color: var(--color-charcoal);
}

.footer-column-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-column-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-gold);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-gold);
  padding-left: 0.5rem;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-copyright {
  font-size: 0.875rem;
  opacity: 0.7;
}

.footer-payment {
  display: flex;
  gap: 0.5rem;
}

.footer-payment img {
  height: 24px;
  opacity: 0.7;
}

/* Cart Drawer */
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: white;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  z-index: 200;
  transform: translateX(100%);
  transition: transform var(--transition-normal);
}

.cart-drawer.open {
  transform: translateX(0);
}

.cart-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 199;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-normal);
}

.cart-drawer-overlay.open {
  opacity: 1;
  visibility: visible;
}

.cart-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.cart-drawer-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
}

.cart-drawer-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cart-drawer-close:hover {
  background: var(--color-gold);
}

.cart-drawer-content {
  padding: 1.5rem;
  height: calc(100vh - 180px);
  overflow-y: auto;
}

.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.cart-empty-icon {
  width: 80px;
  height: 80px;
  color: var(--color-gold);
  opacity: 0.5;
  margin-bottom: 1.5rem;
}

.cart-empty-title {
  font-family: var(--font-heading);
  margin-bottom: 0.5rem;
}

.cart-empty-text {
  font-size: 0.875rem;
  color: var(--color-charcoal-light);
  margin-bottom: 1.5rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  overflow: hidden;
  flex-shrink: 0;
}

.cart-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-content {
  flex: 1;
}

.cart-item-title {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.cart-item-variant {
  font-size: 0.75rem;
  color: var(--color-charcoal-light);
  margin-bottom: 0.5rem;
}

.cart-item-price {
  font-weight: 600;
  color: var(--color-maroon);
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.cart-quantity-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cart-quantity-btn:hover {
  background: var(--color-gold);
  border-color: var(--color-gold);
}

.cart-quantity-value {
  width: 32px;
  text-align: center;
  font-weight: 600;
}

.cart-item-remove {
  color: var(--color-charcoal-light);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.cart-item-remove:hover {
  color: var(--color-maroon);
}

.cart-drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: white;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.cart-subtotal {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cart-subtotal-label {
  font-size: 0.875rem;
}

.cart-subtotal-value {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-maroon);
}

.cart-checkout-btn {
  width: 100%;
}

/* Collection Page */
.collection-hero {
  background: linear-gradient(135deg, var(--color-charcoal), var(--color-charcoal-light));
  padding: 4rem 0;
  text-align: center;
  color: white;
}

.collection-hero-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

@media (min-width: 768px) {
  .collection-hero-title {
    font-size: 3.5rem;
  }
}

.collection-hero-title span {
  color: var(--color-gold);
}

.collection-hero-count {
  color: var(--color-gold);
}

.collection-filters {
  background: var(--color-cream);
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.collection-filters-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.collection-filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-full);
  background: white;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-charcoal);
}

.sort-select {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-md);
  background: white;
  cursor: pointer;
}

/* Product Page */
.product-page {
  padding: 2rem 0;
}

.product-page-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .product-page-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.product-gallery {
  display: grid;
  gap: 1rem;
}

.product-gallery-main {
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
}

.product-gallery-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-gallery-thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.product-gallery-thumb {
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.product-gallery-thumb:hover,
.product-gallery-thumb.active {
  border-color: var(--color-gold);
}

.product-gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 1rem 0;
}

.product-info-vendor {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold-dark);
  margin-bottom: 0.5rem;
}

.product-info-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-info-price {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.product-info-price-current {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-maroon);
}

.product-info-price-compare {
  font-size: 1.25rem;
  color: var(--color-charcoal-light);
  text-decoration: line-through;
}

.product-info-description {
  color: var(--color-charcoal-light);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.product-options {
  margin-bottom: 2rem;
}

.product-option {
  margin-bottom: 1.5rem;
}

.product-option-label {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.product-option-values {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.product-option-btn {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-md);
  background: white;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.product-option-btn:hover,
.product-option-btn.selected {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-charcoal);
}

.product-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.product-quantity-label {
  font-weight: 600;
}

.product-quantity-controls {
  display: flex;
  align-items: center;
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: var(--radius-md);
}

.product-quantity-btn {
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.product-quantity-btn:hover {
  background: rgba(212, 175, 55, 0.1);
}

.product-quantity-value {
  width: 60px;
  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;
}

.product-add-btn {
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
}

.product-buy-btn {
  width: 100%;
  padding: 1rem 2rem;
}

.product-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.product-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.product-feature-icon {
  width: 24px;
  height: 24px;
  color: var(--color-gold);
}

.product-feature-text {
  font-size: 0.875rem;
}

/* Page Styles */
.page-hero {
  background: linear-gradient(135deg, var(--color-charcoal), var(--color-charcoal-light));
  padding: 4rem 0;
  text-align: center;
  color: white;
}

.page-hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

@media (min-width: 768px) {
  .page-hero-title {
    font-size: 3.5rem;
  }
}

.page-hero-title span {
  color: var(--color-gold);
}

.page-content {
  padding: 4rem 0;
  max-width: 800px;
  margin: 0 auto;
}

.page-content h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color-charcoal);
}

.page-content p {
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--color-charcoal-light);
}

.page-content ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.page-content li {
  margin-bottom: 0.5rem;
  line-height: 1.8;
  color: var(--color-charcoal-light);
}

/* FAQ Accordion */
.faq-section {
  padding: 4rem 0;
}

.faq-item {
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: var(--radius-lg);
  margin-bottom: 1rem;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  text-align: left;
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all var(--transition-fast);
}

.faq-question:hover {
  background: rgba(212, 175, 55, 0.05);
}

.faq-question.active {
  background: rgba(212, 175, 55, 0.1);
}

.faq-icon {
  width: 24px;
  height: 24px;
  color: var(--color-gold);
  transition: transform var(--transition-fast);
}

.faq-question.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.faq-answer.open {
  padding: 1.5rem;
  max-height: 500px;
}

.faq-answer p {
  color: var(--color-charcoal-light);
  line-height: 1.8;
}

/* Contact Form */
.contact-section {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-info {
  background: var(--color-cream);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 2px solid rgba(212, 175, 55, 0.2);
}

.contact-info-title {
  margin-bottom: 1.5rem;
}

.contact-info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-info-icon {
  width: 24px;
  height: 24px;
  color: var(--color-gold);
  flex-shrink: 0;
}

.contact-info-label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.contact-info-value {
  color: var(--color-charcoal-light);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  font-size: 0.875rem;
}

.form-input,
.form-textarea {
  padding: 1rem;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-gold);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* Utilities */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.animate-slide-up {
  animation: slideUp 0.5s ease forwards;
}

/* Responsive Utilities */
@media (max-width: 767px) {
  .hide-mobile { display: none !important; }
}

@media (min-width: 768px) {
  .hide-desktop { display: none !important; }
}
```

### assets/theme.js
```javascript
/* ============================================
   HUMA TRADERS - THEME JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initCartDrawer();
  initHeroCarousel();
  initProductGallery();
  initFAQAccordion();
  initQuantityControls();
  initAddToCart();
});

/* Mobile Menu */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  
  if (!menuToggle || !mobileMenu) return;
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    menuOverlay.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  }
}

/* Cart Drawer */
function initCartDrawer() {
  const cartToggle = document.querySelectorAll('.cart-toggle');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-drawer-close');
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  
  if (!cartDrawer) return;
  
  cartToggle.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      openCartDrawer();
    });
  });
  
  if (cartClose) {
    cartClose.addEventListener('click', closeCartDrawer);
  }
  
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
  }
  
  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* Hero Carousel */
function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  
  const slides = carousel.querySelectorAll('.hero-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  
  let currentSlide = 0;
  let autoplayInterval;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }
  
  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }
  
  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }
  
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  if (prevBtn) prevBtn.addEventListener('click', function() {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });
  
  if (nextBtn) nextBtn.addEventListener('click', function() {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', function() {
      stopAutoplay();
      showSlide(i);
      startAutoplay();
    });
  });
  
  showSlide(0);
  startAutoplay();
}

/* Product Gallery */
function initProductGallery() {
  const mainImage = document.querySelector('.product-gallery-main img');
  const thumbs = document.querySelectorAll('.product-gallery-thumb');
  
  if (!mainImage || !thumbs.length) return;
  
  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      const newSrc = this.querySelector('img').src;
      mainImage.src = newSrc;
      
      thumbs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', function() {
      const isOpen = question.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(function(otherItem) {
        otherItem.querySelector('.faq-question').classList.remove('active');
        otherItem.querySelector('.faq-answer').classList.remove('open');
      });
      
      // Toggle current item
      if (!isOpen) {
        question.classList.add('active');
        answer.classList.add('open');
      }
    });
  });
}

/* Quantity Controls */
function initQuantityControls() {
  document.querySelectorAll('.product-quantity-controls, .cart-item-quantity').forEach(function(control) {
    const minusBtn = control.querySelector('[data-action="minus"]');
    const plusBtn = control.querySelector('[data-action="plus"]');
    const input = control.querySelector('.product-quantity-value, .cart-quantity-value');
    
    if (!minusBtn || !plusBtn || !input) return;
    
    minusBtn.addEventListener('click', function() {
      let value = parseInt(input.textContent || input.value) || 1;
      if (value > 1) {
        value--;
        if (input.tagName === 'INPUT') {
          input.value = value;
        } else {
          input.textContent = value;
        }
        input.dispatchEvent(new Event('change'));
      }
    });
    
    plusBtn.addEventListener('click', function() {
      let value = parseInt(input.textContent || input.value) || 1;
      value++;
      if (input.tagName === 'INPUT') {
        input.value = value;
      } else {
        input.textContent = value;
      }
      input.dispatchEvent(new Event('change'));
    });
  });
}

/* Add to Cart */
function initAddToCart() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        updateCartCount();
        
        // Open cart drawer
        const cartDrawer = document.querySelector('.cart-drawer');
        const cartOverlay = document.querySelector('.cart-drawer-overlay');
        if (cartDrawer) {
          cartDrawer.classList.add('open');
          cartOverlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
        
        // Refresh cart drawer content
        refreshCartDrawer();
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
      });
    });
  });
}

/* Update Cart Count */
function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const countElements = document.querySelectorAll('.cart-count');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    });
}

/* Refresh Cart Drawer */
function refreshCartDrawer() {
  const cartContent = document.querySelector('.cart-drawer-content');
  if (!cartContent) return;
  
  fetch('/cart?view=drawer')
    .then(response => response.text())
    .then(html => {
      cartContent.innerHTML = html;
      initQuantityControls();
    });
}

/* Product Options */
document.querySelectorAll('.product-option-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const optionGroup = this.closest('.product-option');
    optionGroup.querySelectorAll('.product-option-btn').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
    
    // Update variant ID based on selected options
    updateVariantId();
  });
});

function updateVariantId() {
  const selectedOptions = [];
  document.querySelectorAll('.product-option-btn.selected').forEach(function(btn) {
    selectedOptions.push(btn.dataset.value);
  });
  
  // Find matching variant
  const variantSelect = document.querySelector('select[name="id"]');
  if (variantSelect) {
    const options = variantSelect.querySelectorAll('option');
    options.forEach(function(option) {
      if (option.dataset.options === selectedOptions.join(' / ')) {
        variantSelect.value = option.value;
      }
    });
  }
}
```

---

## 4. SECTIONS

### sections/announcement-bar.liquid
```liquid
{%- if section.settings.show_announcement -%}
<div class="announcement-bar">
  <div class="container">
    {{ section.settings.text }}
    {%- if section.settings.link != blank -%}
      <a href="{{ section.settings.link }}">{{ section.settings.link_text }}</a>
    {%- endif -%}
  </div>
</div>
{%- endif -%}

{% schema %}
{
  "name": "Announcement Bar",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_announcement",
      "label": "Show Announcement",
      "default": true
    },
    {
      "type": "text",
      "id": "text",
      "label": "Announcement Text",
      "default": "🌟 Free Shipping on Orders Over ₹999"
    },
    {
      "type": "url",
      "id": "link",
      "label": "Link"
    },
    {
      "type": "text",
      "id": "link_text",
      "label": "Link Text",
      "default": "Shop Now"
    }
  ]
}
{% endschema %}
```

### sections/header.liquid
```liquid
<header class="header">
  <div class="container">
    <div class="header-inner">
      <!-- Logo -->
      <a href="/" class="header-logo">
        {%- if settings.logo != blank -%}
          <img src="{{ settings.logo | image_url: width: 300 }}" alt="{{ shop.name }}" style="width: {{ settings.logo_width }}px;">
        {%- else -%}
          <span class="header-logo-text">Huma<span>Traders</span></span>
        {%- endif -%}
      </a>
      
      <!-- Navigation -->
      <nav class="header-nav">
        {%- for link in linklists.main-menu.links -%}
          <a href="{{ link.url }}">{{ link.title }}</a>
        {%- endfor -%}
      </nav>
      
      <!-- Actions -->
      <div class="header-actions">
        <a href="/search" class="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </a>
        
        <a href="/account" class="header-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </a>
        
        <button class="header-icon cart-toggle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count" {% if cart.item_count == 0 %}style="display: none;"{% endif %}>
            {{ cart.item_count }}
          </span>
        </button>
        
        <button class="menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</header>

{% schema %}
{
  "name": "Header",
  "settings": []
}
{% endschema %}
```

### sections/hero-carousel.liquid
```liquid
<section class="hero-carousel">
  {%- for block in section.blocks -%}
    <div class="hero-slide" style="{% if forloop.first != true %}display: none;{% endif %}">
      {%- if block.settings.image != blank -%}
        <img src="{{ block.settings.image | image_url: width: 1920 }}" alt="{{ block.settings.heading }}">
      {%- else -%}
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #2D2A26, #4A4743);"></div>
      {%- endif -%}
      
      <div class="hero-overlay">
        <div class="container">
          <div class="hero-content">
            {%- if block.settings.badge != blank -%}
              <span class="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                {{ block.settings.badge }}
              </span>
            {%- endif -%}
            
            <h1 class="hero-title">{{ block.settings.heading }}</h1>
            
            {%- if block.settings.text != blank -%}
              <p class="hero-description">{{ block.settings.text }}</p>
            {%- endif -%}
            
            <div class="hero-buttons">
              {%- if block.settings.button_label != blank -%}
                <a href="{{ block.settings.button_link }}" class="btn btn-gold">
                  {{ block.settings.button_label }}
                </a>
              {%- endif -%}
              {%- if block.settings.button_label_2 != blank -%}
                <a href="{{ block.settings.button_link_2 }}" class="btn btn-outline">
                  {{ block.settings.button_label_2 }}
                </a>
              {%- endif -%}
            </div>
          </div>
        </div>
      </div>
    </div>
  {%- endfor -%}
  
  <div class="carousel-arrows">
    <button class="carousel-arrow carousel-prev">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </button>
    <button class="carousel-arrow carousel-next">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </div>
  
  <div class="carousel-controls">
    {%- for block in section.blocks -%}
      <button class="carousel-dot {% if forloop.first %}active{% endif %}"></button>
    {%- endfor -%}
  </div>
</section>

{% schema %}
{
  "name": "Hero Carousel",
  "max_blocks": 5,
  "settings": [],
  "blocks": [
    {
      "type": "slide",
      "name": "Slide",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Background Image"
        },
        {
          "type": "text",
          "id": "badge",
          "label": "Badge Text",
          "default": "Premium Collection"
        },
        {
          "type": "text",
          "id": "heading",
          "label": "Heading",
          "default": "Discover Authentic <span>Indian Fragrances</span>"
        },
        {
          "type": "textarea",
          "id": "text",
          "label": "Text",
          "default": "Experience the essence of tradition with our handcrafted attars and perfumes."
        },
        {
          "type": "text",
          "id": "button_label",
          "label": "Button Label",
          "default": "Shop Now"
        },
        {
          "type": "url",
          "id": "button_link",
          "label": "Button Link"
        },
        {
          "type": "text",
          "id": "button_label_2",
          "label": "Secondary Button Label",
          "default": "View Collection"
        },
        {
          "type": "url",
          "id": "button_link_2",
          "label": "Secondary Button Link"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Hero Carousel",
      "blocks": [
        {
          "type": "slide"
        }
      ]
    }
  ]
}
{% endschema %}
```

### sections/trust-strip.liquid
```liquid
<section class="trust-strip">
  <div class="container">
    <div class="trust-strip-inner">
      {%- for block in section.blocks -%}
        <div class="trust-item">
          <div class="trust-icon">
            {%- case block.settings.icon -%}
              {%- when 'shipping' -%}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              {%- when 'quality' -%}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              {%- when 'support' -%}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              {%- when 'authentic' -%}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              {%- else -%}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            {%- endcase -%}
          </div>
          <h4 class="trust-title">{{ block.settings.title }}</h4>
          <p class="trust-text">{{ block.settings.text }}</p>
        </div>
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Trust Strip",
  "max_blocks": 4,
  "settings": [],
  "blocks": [
    {
      "type": "trust_item",
      "name": "Trust Item",
      "settings": [
        {
          "type": "select",
          "id": "icon",
          "label": "Icon",
          "options": [
            { "value": "shipping", "label": "Shipping" },
            { "value": "quality", "label": "Quality" },
            { "value": "support", "label": "Support" },
            { "value": "authentic", "label": "Authentic" }
          ],
          "default": "shipping"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Title",
          "default": "Free Shipping"
        },
        {
          "type": "text",
          "id": "text",
          "label": "Text",
          "default": "On orders over ₹999"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Trust Strip",
      "blocks": [
        { "type": "trust_item", "settings": { "icon": "shipping", "title": "Free Shipping", "text": "On orders over ₹999" } },
        { "type": "trust_item", "settings": { "icon": "quality", "title": "Premium Quality", "text": "100% authentic products" } },
        { "type": "trust_item", "settings": { "icon": "support", "title": "24/7 Support", "text": "Always here to help" } },
        { "type": "trust_item", "settings": { "icon": "authentic", "title": "Authentic Products", "text": "Certified genuine" } }
      ]
    }
  ]
}
{% endschema %}
```

### sections/category-grid.liquid
```liquid
<section class="section category-section">
  <div class="container">
    <div class="section-header">
      {%- if section.settings.badge != blank -%}
        <span class="section-badge">{{ section.settings.badge }}</span>
      {%- endif -%}
      <h2 class="section-title">{{ section.settings.heading }}</h2>
      {%- if section.settings.text != blank -%}
        <p class="section-description">{{ section.settings.text }}</p>
      {%- endif -%}
    </div>
    
    <div class="category-grid">
      {%- for block in section.blocks -%}
        <div class="category-card">
          {%- if block.settings.image != blank -%}
            <img src="{{ block.settings.image | image_url: width: 600 }}" alt="{{ block.settings.title }}">
          {%- else -%}
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #D4AF37, #E5C76B);"></div>
          {%- endif -%}
          
          <div class="category-card-overlay">
            <h3 class="category-card-title">{{ block.settings.title }}</h3>
            {%- if block.settings.collection != blank -%}
              <span class="category-card-count">{{ block.settings.collection.products_count }} Products</span>
            {%- endif -%}
          </div>
          
          {%- if block.settings.link != blank -%}
            <a href="{{ block.settings.link }}" class="category-card-link" aria-label="{{ block.settings.title }}"></a>
          {%- elsif block.settings.collection != blank -%}
            <a href="{{ block.settings.collection.url }}" class="category-card-link" aria-label="{{ block.settings.title }}"></a>
          {%- endif -%}
        </div>
      {%- endfor -%}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Category Grid",
  "max_blocks": 8,
  "settings": [
    {
      "type": "text",
      "id": "badge",
      "label": "Badge Text",
      "default": "Shop by Category"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Our <span>Collections</span>"
    },
    {
      "type": "textarea",
      "id": "text",
      "label": "Description"
    }
  ],
  "blocks": [
    {
      "type": "category",
      "name": "Category",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Title",
          "default": "Category"
        },
        {
          "type": "collection",
          "id": "collection",
          "label": "Collection"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Custom Link (optional)"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Category Grid",
      "blocks": [
        { "type": "category", "settings": { "title": "Attars" } },
        { "type": "category", "settings": { "title": "Perfumes" } },
        { "type": "category", "settings": { "title": "Topis" } },
        { "type": "category", "settings": { "title": "Burkhas" } }
      ]
    }
  ]
}
{% endschema %}
```

### sections/featured-products.liquid
```liquid
<section class="section">
  <div class="container">
    <div class="section-header">
      {%- if section.settings.badge != blank -%}
        <span class="section-badge">{{ section.settings.badge }}</span>
      {%- endif -%}
      <h2 class="section-title">{{ section.settings.heading }}</h2>
      {%- if section.settings.text != blank -%}
        <p class="section-description">{{ section.settings.text }}</p>
      {%- endif -%}
    </div>
    
    <div class="product-grid">
      {%- for product in section.settings.collection.products limit: section.settings.products_to_show -%}
        {% render 'product-card', product: product %}
      {%- else -%}
        {%- for i in (1..4) -%}
          <div class="product-card">
            <div class="product-card-image">
              <div style="width: 100%; height: 100%; background: #f0f0f0;"></div>
            </div>
            <div class="product-card-content">
              <p class="product-card-category">Category</p>
              <h3 class="product-card-title">Sample Product {{ i }}</h3>
              <div class="product-card-price">
                <span class="product-price-current">₹999</span>
              </div>
              <button class="btn btn-gold product-card-button">Add to Cart</button>
            </div>
          </div>
        {%- endfor -%}
      {%- endfor -%}
    </div>
    
    {%- if section.settings.show_view_all -%}
      <div class="text-center mt-4">
        <a href="{{ section.settings.collection.url }}" class="btn btn-outline">View All Products</a>
      </div>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "Featured Products",
  "settings": [
    {
      "type": "text",
      "id": "badge",
      "label": "Badge Text",
      "default": "Featured Collection"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Bestselling <span>Products</span>"
    },
    {
      "type": "textarea",
      "id": "text",
      "label": "Description"
    },
    {
      "type": "collection",
      "id": "collection",
      "label": "Collection"
    },
    {
      "type": "range",
      "id": "products_to_show",
      "min": 2,
      "max": 12,
      "step": 1,
      "default": 4,
      "label": "Products to show"
    },
    {
      "type": "checkbox",
      "id": "show_view_all",
      "label": "Show 'View All' button",
      "default": true
    }
  ],
  "presets": [
    {
      "name": "Featured Products"
    }
  ]
}
{% endschema %}
```

### sections/mix-match-banner.liquid
```liquid
<section class="section mix-match-section">
  <div class="container">
    <div class="mix-match-inner">
      <div class="mix-match-content">
        {%- if section.settings.badge != blank -%}
          <span class="mix-match-badge">{{ section.settings.badge }}</span>
        {%- endif -%}
        
        <h2 class="mix-match-title">{{ section.settings.heading }}</h2>
        
        {%- if section.settings.text != blank -%}
          <p class="mix-match-description">{{ section.settings.text }}</p>
        {%- endif -%}
        
        <div class="mix-match-features">
          {%- for block in section.blocks -%}
            <div class="mix-match-feature">
              <svg class="mix-match-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span class="mix-match-feature-text">{{ block.settings.text }}</span>
            </div>
          {%- endfor -%}
        </div>
        
        {%- if section.settings.button_label != blank -%}
          <a href="{{ section.settings.button_link }}" class="btn btn-gold">{{ section.settings.button_label }}</a>
        {%- endif -%}
      </div>
      
      <div class="mix-match-images">
        {%- if section.settings.image_1 != blank -%}
          <div class="mix-match-image">
            <img src="{{ section.settings.image_1 | image_url: width: 600 }}" alt="Mix and Match">
          </div>
        {%- endif -%}
        {%- if section.settings.image_2 != blank -%}
          <div class="mix-match-image">
            <img src="{{ section.settings.image_2 | image_url: width: 600 }}" alt="Mix and Match">
          </div>
        {%- endif -%}
      </div>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Mix & Match Banner",
  "max_blocks": 4,
  "settings": [
    {
      "type": "text",
      "id": "badge",
      "label": "Badge Text",
      "default": "Special Offer"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Mix & Match <span>Collections</span>"
    },
    {
      "type": "textarea",
      "id": "text",
      "label": "Description",
      "default": "Create your perfect combination with our curated collections."
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button Label",
      "default": "Explore Now"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    },
    {
      "type": "image_picker",
      "id": "image_1",
      "label": "Image 1"
    },
    {
      "type": "image_picker",
      "id": "image_2",
      "label": "Image 2"
    }
  ],
  "blocks": [
    {
      "type": "feature",
      "name": "Feature",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Feature Text",
          "default": "Premium Quality"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Mix & Match Banner",
      "blocks": [
        { "type": "feature", "settings": { "text": "Mix 3 Products" } },
        { "type": "feature", "settings": { "text": "Save 15%" } },
        { "type": "feature", "settings": { "text": "Free Gift Box" } },
        { "type": "feature", "settings": { "text": "Free Shipping" } }
      ]
    }
  ]
}
{% endschema %}
```

### sections/footer.liquid
```liquid
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <!-- Brand Column -->
      <div class="footer-brand">
        <h3 class="footer-brand-title">Huma<span>Traders</span></h3>
        <p class="footer-brand-description">{{ section.settings.description }}</p>
        <div class="footer-social">
          {%- if settings.social_facebook != blank -%}
            <a href="{{ settings.social_facebook }}" class="footer-social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          {%- endif -%}
          {%- if settings.social_instagram != blank -%}
            <a href="{{ settings.social_instagram }}" class="footer-social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          {%- endif -%}
          {%- if settings.social_twitter != blank -%}
            <a href="{{ settings.social_twitter }}" class="footer-social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          {%- endif -%}
          {%- if settings.social_youtube != blank -%}
            <a href="{{ settings.social_youtube }}" class="footer-social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
              </svg>
            </a>
          {%- endif -%}
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="footer-column">
        <h4 class="footer-column-title">Quick Links</h4>
        <ul class="footer-links">
          {%- for link in linklists.footer.links -%}
            <li><a href="{{ link.url }}">{{ link.title }}</a></li>
          {%- endfor -%}
        </ul>
      </div>
      
      <!-- Categories -->
      <div class="footer-column">
        <h4 class="footer-column-title">Categories</h4>
        <ul class="footer-links">
          {%- for collection in collections limit: 5 -%}
            <li><a href="{{ collection.url }}">{{ collection.title }}</a></li>
          {%- endfor -%}
        </ul>
      </div>
      
      <!-- Support -->
      <div class="footer-column">
        <h4 class="footer-column-title">Support</h4>
        <ul class="footer-links">
          <li><a href="/pages/contact">Contact Us</a></li>
          <li><a href="/pages/faqs">FAQs</a></li>
          <li><a href="/pages/shipping">Shipping Info</a></li>
          <li><a href="/pages/returns">Returns Policy</a></li>
          <li><a href="/pages/privacy">Privacy Policy</a></li>
          <li><a href="/pages/terms">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; {{ 'now' | date: '%Y' }} {{ shop.name }}. All rights reserved.</p>
      <div class="footer-payment">
        {{ 'visa' | payment_type_svg_tag }}
        {{ 'master' | payment_type_svg_tag }}
        {{ 'paypal' | payment_type_svg_tag }}
        {{ 'american_express' | payment_type_svg_tag }}
      </div>
    </div>
  </div>
</footer>

{% schema %}
{
  "name": "Footer",
  "settings": [
    {
      "type": "textarea",
      "id": "description",
      "label": "Brand Description",
      "default": "Discover authentic Indian fragrances and traditional wear. Premium quality products with a legacy of excellence."
    }
  ]
}
{% endschema %}
```

### sections/cart-drawer.liquid
```liquid
<div class="cart-drawer-overlay"></div>
<div class="cart-drawer">
  <div class="cart-drawer-header">
    <h3 class="cart-drawer-title">Your Cart ({{ cart.item_count }})</h3>
    <button class="cart-drawer-close" aria-label="Close cart">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  
  <div class="cart-drawer-content">
    {%- if cart.item_count == 0 -%}
      <div class="cart-empty">
        <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4 class="cart-empty-title">Your cart is empty</h4>
        <p class="cart-empty-text">Looks like you haven't added anything yet.</p>
        <a href="/collections/all" class="btn btn-gold">Start Shopping</a>
      </div>
    {%- else -%}
      {%- for item in cart.items -%}
        <div class="cart-item" data-line="{{ forloop.index }}">
          <div class="cart-item-image">
            <img src="{{ item.image | image_url: width: 200 }}" alt="{{ item.product.title }}">
          </div>
          <div class="cart-item-content">
            <h4 class="cart-item-title">{{ item.product.title }}</h4>
            {%- unless item.variant.title == 'Default Title' -%}
              <p class="cart-item-variant">{{ item.variant.title }}</p>
            {%- endunless -%}
            <p class="cart-item-price">{{ item.final_line_price | money }}</p>
            
            <div class="cart-item-quantity">
              <button class="cart-quantity-btn" data-action="minus">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span class="cart-quantity-value">{{ item.quantity }}</span>
              <button class="cart-quantity-btn" data-action="plus">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
          <button class="cart-item-remove" aria-label="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      {%- endfor -%}
    {%- endif -%}
  </div>
  
  {%- if cart.item_count > 0 -%}
    <div class="cart-drawer-footer">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-value">{{ cart.total_price | money }}</span>
      </div>
      <a href="/checkout" class="btn btn-maroon cart-checkout-btn">Checkout</a>
    </div>
  {%- endif -%}
</div>

{% schema %}
{
  "name": "Cart Drawer",
  "settings": []
}
{% endschema %}
```

---

## 5. SNIPPETS

### snippets/product-card.liquid
```liquid
{%- comment -%}
  Product Card Snippet
  Usage: {% render 'product-card', product: product %}
{%- endcomment -%}

<div class="product-card">
  <div class="product-card-image">
    {%- if product.featured_image != blank -%}
      <img src="{{ product.featured_image | image_url: width: 600 }}" alt="{{ product.featured_image.alt | escape | default: product.title }}">
    {%- else -%}
      <div style="width: 100%; height: 100%; background: #f0f0f0;"></div>
    {%- endif -%}
    
    <div class="product-card-badges">
      {%- if product.compare_at_price > product.price -%}
        <span class="product-badge product-badge-sale">Sale</span>
      {%- endif -%}
      {%- if product.created_at > 'now' | date: '%s' | minus: 2592000 | date: '%Y-%m-%d' -%}
        <span class="product-badge product-badge-new">New</span>
      {%- endif -%}
    </div>
    
    <div class="product-card-actions">
      <button class="product-action-btn" aria-label="Quick view">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
      <button class="product-action-btn" aria-label="Add to wishlist">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  </div>
  
  <div class="product-card-content">
    <p class="product-card-category">{{ product.type }}</p>
    <h3 class="product-card-title">
      <a href="{{ product.url }}">{{ product.title }}</a>
    </h3>
    
    <div class="product-card-price">
      <span class="product-price-current">{{ product.price | money }}</span>
      {%- if product.compare_at_price > product.price -%}
        <span class="product-price-compare">{{ product.compare_at_price | money }}</span>
      {%- endif -%}
    </div>
    
    <form action="/cart/add" method="post" enctype="multipart/form-data">
      <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
      <input type="hidden" name="quantity" value="1">
      <button type="submit" class="btn btn-gold product-card-button" {% unless product.available %}disabled{% endunless %}>
        {%- if product.available -%}
          Add to Cart
        {%- else -%}
          Sold Out
        {%- endif -%}
      </button>
    </form>
  </div>
</div>
```

---

## 6. TEMPLATES

### templates/index.liquid
```liquid
{{ content_for_layout }}
```

### templates/index.json
```json
{
  "sections": {
    "hero": {
      "type": "hero-carousel",
      "blocks": {
        "slide-1": {
          "type": "slide",
          "settings": {
            "badge": "Premium Collection",
            "heading": "Discover Authentic <span>Indian Fragrances</span>",
            "text": "Experience the essence of tradition with our handcrafted attars and perfumes, made using centuries-old techniques.",
            "button_label": "Shop Collection",
            "button_link": "/collections/all",
            "button_label_2": "Learn More",
            "button_link_2": "/pages/about"
          }
        }
      },
      "block_order": ["slide-1"]
    },
    "trust": {
      "type": "trust-strip",
      "blocks": {
        "trust-1": { "type": "trust_item", "settings": { "icon": "shipping", "title": "Free Shipping", "text": "On orders over ₹999" } },
        "trust-2": { "type": "trust_item", "settings": { "icon": "quality", "title": "Premium Quality", "text": "100% authentic" } },
        "trust-3": { "type": "trust_item", "settings": { "icon": "support", "title": "24/7 Support", "text": "Always here" } },
        "trust-4": { "type": "trust_item", "settings": { "icon": "authentic", "title": "Certified", "text": "Genuine products" } }
      },
      "block_order": ["trust-1", "trust-2", "trust-3", "trust-4"]
    },
    "categories": {
      "type": "category-grid",
      "settings": {
        "badge": "Shop by Category",
        "heading": "Our <span>Collections</span>"
      },
      "blocks": {
        "cat-1": { "type": "category", "settings": { "title": "Attars" } },
        "cat-2": { "type": "category", "settings": { "title": "Perfumes" } },
        "cat-3": { "type": "category", "settings": { "title": "Topis" } },
        "cat-4": { "type": "category", "settings": { "title": "Burkhas" } }
      },
      "block_order": ["cat-1", "cat-2", "cat-3", "cat-4"]
    },
    "featured": {
      "type": "featured-products",
      "settings": {
        "badge": "Featured Collection",
        "heading": "Bestselling <span>Products</span>",
        "products_to_show": 8,
        "show_view_all": true
      }
    },
    "mix-match": {
      "type": "mix-match-banner",
      "settings": {
        "badge": "Special Offer",
        "heading": "Mix & Match <span>Collections</span>",
        "text": "Create your perfect combination with our curated collections and save more.",
        "button_label": "Explore Now",
        "button_link": "/collections/all"
      },
      "blocks": {
        "f-1": { "type": "feature", "settings": { "text": "Mix 3 Products" } },
        "f-2": { "type": "feature", "settings": { "text": "Save 15%" } },
        "f-3": { "type": "feature", "settings": { "text": "Free Gift Box" } },
        "f-4": { "type": "feature", "settings": { "text": "Free Shipping" } }
      },
      "block_order": ["f-1", "f-2", "f-3", "f-4"]
    }
  },
  "order": ["hero", "trust", "categories", "featured", "mix-match"]
}
```

### templates/collection.liquid
```liquid
<section class="collection-hero">
  <div class="container">
    <h1 class="collection-hero-title">{{ collection.title }}</h1>
    <p class="collection-hero-count">{{ collection.products_count }} Products</p>
  </div>
</section>

<section class="collection-filters">
  <div class="container">
    <div class="collection-filters-inner">
      <div class="collection-filter-group">
        <button class="filter-btn active">All</button>
        {%- for tag in collection.all_tags -%}
          <button class="filter-btn">{{ tag }}</button>
        {%- endfor -%}
      </div>
      
      <select class="sort-select" onchange="window.location.href = this.value;">
        <option value="{{ collection.url }}?sort_by=best-selling">Best Selling</option>
        <option value="{{ collection.url }}?sort_by=price-ascending">Price: Low to High</option>
        <option value="{{ collection.url }}?sort_by=price-descending">Price: High to Low</option>
        <option value="{{ collection.url }}?sort_by=created-descending">Newest First</option>
      </select>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="product-grid">
      {%- for product in collection.products -%}
        {% render 'product-card', product: product %}
      {%- else -%}
        <p>No products found in this collection.</p>
      {%- endfor -%}
    </div>
    
    {%- if paginate.pages > 1 -%}
      <div class="pagination">
        {{ paginate | default_pagination }}
      </div>
    {%- endif -%}
  </div>
</section>
```

### templates/product.liquid
```liquid
<section class="product-page">
  <div class="container">
    <div class="product-page-inner">
      <!-- Gallery -->
      <div class="product-gallery">
        <div class="product-gallery-main">
          {%- if product.featured_image != blank -%}
            <img src="{{ product.featured_image | image_url: width: 1200 }}" alt="{{ product.title }}">
          {%- endif -%}
        </div>
        
        {%- if product.images.size > 1 -%}
          <div class="product-gallery-thumbs">
            {%- for image in product.images -%}
              <div class="product-gallery-thumb {% if forloop.first %}active{% endif %}">
                <img src="{{ image | image_url: width: 200 }}" alt="{{ image.alt | escape | default: product.title }}">
              </div>
            {%- endfor -%}
          </div>
        {%- endif -%}
      </div>
      
      <!-- Info -->
      <div class="product-info">
        {%- if product.vendor != blank -%}
          <p class="product-info-vendor">{{ product.vendor }}</p>
        {%- endif -%}
        
        <h1 class="product-info-title">{{ product.title }}</h1>
        
        <div class="product-info-price">
          <span class="product-info-price-current">{{ product.price | money }}</span>
          {%- if product.compare_at_price > product.price -%}
            <span class="product-info-price-compare">{{ product.compare_at_price | money }}</span>
          {%- endif -%}
        </div>
        
        <div class="product-info-description">
          {{ product.description }}
        </div>
        
        <form action="/cart/add" method="post" enctype="multipart/form-data">
          <!-- Options -->
          {%- unless product.has_only_default_variant -%}
            <div class="product-options">
              {%- for option in product.options_with_values -%}
                <div class="product-option">
                  <p class="product-option-label">{{ option.name }}</p>
                  <div class="product-option-values">
                    {%- for value in option.values -%}
                      <button type="button" class="product-option-btn {% if forloop.first %}selected{% endif %}" data-value="{{ value }}">
                        {{ value }}
                      </button>
                    {%- endfor -%}
                  </div>
                </div>
              {%- endfor -%}
            </div>
          {%- endunless -%}
          
          <select name="id" style="display: none;">
            {%- for variant in product.variants -%}
              <option value="{{ variant.id }}" data-options="{{ variant.options | join: ' / ' }}">
                {{ variant.title }} - {{ variant.price | money }}
              </option>
            {%- endfor -%}
          </select>
          
          <!-- Quantity -->
          <div class="product-quantity">
            <span class="product-quantity-label">Quantity</span>
            <div class="product-quantity-controls">
              <button type="button" class="product-quantity-btn" data-action="minus">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span class="product-quantity-value">1</span>
              <button type="button" class="product-quantity-btn" data-action="plus">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
          
          <input type="hidden" name="quantity" value="1">
          
          <button type="submit" class="btn btn-gold product-add-btn" {% unless product.available %}disabled{% endunless %}>
            {%- if product.available -%}
              Add to Cart
            {%- else -%}
              Sold Out
            {%- endif -%}
          </button>
        </form>
        
        <a href="/checkout" class="btn btn-maroon product-buy-btn">Buy Now</a>
        
        <div class="product-features">
          <div class="product-feature">
            <svg class="product-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span class="product-feature-text">Free Shipping</span>
          </div>
          <div class="product-feature">
            <svg class="product-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span class="product-feature-text">Secure Payment</span>
          </div>
          <div class="product-feature">
            <svg class="product-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span class="product-feature-text">Easy Returns</span>
          </div>
          <div class="product-feature">
            <svg class="product-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <span class="product-feature-text">100% Authentic</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### templates/cart.liquid
```liquid
<section class="page-hero">
  <div class="container">
    <h1 class="page-hero-title">Your <span>Cart</span></h1>
  </div>
</section>

<section class="section">
  <div class="container">
    {%- if cart.item_count == 0 -%}
      <div class="cart-empty" style="padding: 4rem 0; text-align: center;">
        <svg style="width: 80px; height: 80px; color: #D4AF37; opacity: 0.5; margin-bottom: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h2>Your cart is empty</h2>
        <p style="margin-bottom: 1.5rem; color: #4A4743;">Looks like you haven't added anything yet.</p>
        <a href="/collections/all" class="btn btn-gold">Start Shopping</a>
      </div>
    {%- else -%}
      <form action="/cart" method="post">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(212, 175, 55, 0.2);">
              <th style="text-align: left; padding: 1rem 0;">Product</th>
              <th style="text-align: center; padding: 1rem 0;">Quantity</th>
              <th style="text-align: right; padding: 1rem 0;">Total</th>
            </tr>
          </thead>
          <tbody>
            {%- for item in cart.items -%}
              <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.1);">
                <td style="padding: 1.5rem 0;">
                  <div style="display: flex; gap: 1rem; align-items: center;">
                    <img src="{{ item.image | image_url: width: 100 }}" alt="{{ item.product.title }}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 0.5rem;">
                    <div>
                      <h4 style="font-family: 'Playfair Display', serif;">{{ item.product.title }}</h4>
                      {%- unless item.variant.title == 'Default Title' -%}
                        <p style="font-size: 0.875rem; color: #4A4743;">{{ item.variant.title }}</p>
                      {%- endunless -%}
                      <p style="color: #800000; font-weight: 600;">{{ item.price | money }}</p>
                    </div>
                  </div>
                </td>
                <td style="text-align: center;">
                  <input type="number" name="updates[]" value="{{ item.quantity }}" min="0" style="width: 60px; text-align: center; padding: 0.5rem; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 0.25rem;">
                </td>
                <td style="text-align: right; font-weight: 600; color: #800000;">
                  {{ item.final_line_price | money }}
                </td>
              </tr>
            {%- endfor -%}
          </tbody>
        </table>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 2rem; border-top: 2px solid rgba(212, 175, 55, 0.2);">
          <button type="submit" class="btn btn-outline" name="update">Update Cart</button>
          
          <div style="text-align: right;">
            <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">
              Subtotal: <strong style="color: #800000;">{{ cart.total_price | money }}</strong>
            </p>
            <a href="/checkout" class="btn btn-maroon">Checkout</a>
          </div>
        </div>
      </form>
    {%- endif -%}
  </div>
</section>
```

### templates/page.liquid
```liquid
<section class="page-hero">
  <div class="container">
    <h1 class="page-hero-title">{{ page.title }}</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="page-content">
      {{ page.content }}
    </div>
  </div>
</section>
```

### templates/page.contact.liquid
```liquid
<section class="page-hero">
  <div class="container">
    <h1 class="page-hero-title">Contact <span>Us</span></h1>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <h2 class="contact-info-title">Get in Touch</h2>
        
        <div class="contact-info-item">
          <svg class="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div>
            <p class="contact-info-label">Address</p>
            <p class="contact-info-value">123 Perfume Street, Mumbai, India</p>
          </div>
        </div>
        
        <div class="contact-info-item">
          <svg class="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div>
            <p class="contact-info-label">Phone</p>
            <p class="contact-info-value">+91 98765 43210</p>
          </div>
        </div>
        
        <div class="contact-info-item">
          <svg class="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div>
            <p class="contact-info-label">Email</p>
            <p class="contact-info-value">info@humatraders.com</p>
          </div>
        </div>
      </div>
      
      <form class="contact-form" action="/contact" method="post">
        <input type="hidden" name="form_type" value="contact">
        <input type="hidden" name="utf8" value="✓">
        
        <div class="form-group">
          <label class="form-label" for="name">Your Name</label>
          <input type="text" id="name" name="contact[name]" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="email">Your Email</label>
          <input type="email" id="email" name="contact[email]" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label class="form-label" for="phone">Phone Number</label>
          <input type="tel" id="phone" name="contact[phone]" class="form-input">
        </div>
        
        <div class="form-group">
          <label class="form-label" for="message">Message</label>
          <textarea id="message" name="contact[body]" class="form-textarea" required></textarea>
        </div>
        
        <button type="submit" class="btn btn-gold">Send Message</button>
      </form>
    </div>
  </div>
</section>
```

### templates/page.faqs.liquid
```liquid
<section class="page-hero">
  <div class="container">
    <h1 class="page-hero-title">Frequently Asked <span>Questions</span></h1>
  </div>
</section>

<section class="faq-section">
  <div class="container" style="max-width: 800px;">
    <div class="faq-item">
      <button class="faq-question">
        What are Attars and how are they different from perfumes?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>Attars are traditional Indian perfumes made from natural botanical sources like flowers, herbs, spices, and wood. Unlike modern perfumes that use alcohol as a base, attars use a base of sandalwood oil. This makes them alcohol-free, longer-lasting, and more concentrated.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-question">
        How long does shipping take?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>Standard shipping within India takes 5-7 business days. Express shipping is available for 2-3 business days delivery. International shipping typically takes 10-15 business days depending on the destination country.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-question">
        What is your return policy?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>We offer a 7-day return policy for unused and unopened products. If you're not satisfied with your purchase, you can initiate a return within 7 days of delivery. Please note that opened fragrance products cannot be returned for hygiene reasons.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-question">
        Are your products authentic?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>Yes, all our products are 100% authentic and sourced directly from trusted manufacturers. We guarantee the quality and authenticity of every item we sell. Each product comes with a certificate of authenticity where applicable.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-question">
        Do you offer international shipping?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. You can see the shipping cost at checkout before completing your order.</p>
      </div>
    </div>
    
    <div class="faq-item">
      <button class="faq-question">
        How do I track my order?
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer">
        <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the courier's website. You can also log into your account to see your order status.</p>
      </div>
    </div>
  </div>
</section>
```

### templates/404.liquid
```liquid
<section class="page-hero" style="min-height: 60vh; display: flex; align-items: center;">
  <div class="container text-center">
    <h1 style="font-size: 8rem; color: #D4AF37; margin-bottom: 1rem;">404</h1>
    <h2 class="page-hero-title">Page Not <span>Found</span></h2>
    <p style="color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Sorry, the page you are looking for doesn't exist or has been moved.</p>
    <a href="/" class="btn btn-gold">Return Home</a>
  </div>
</section>
```

---

## 7. LOCALES

### locales/en.default.json
```json
{
  "general": {
    "accessibility": {
      "skip_to_text": "Skip to content"
    }
  },
  "products": {
    "product": {
      "add_to_cart": "Add to Cart",
      "sold_out": "Sold Out",
      "quantity": "Quantity"
    }
  },
  "cart": {
    "general": {
      "title": "Your Cart",
      "empty": "Your cart is empty",
      "subtotal": "Subtotal",
      "checkout": "Checkout"
    }
  }
}
```

---

## HOW TO USE THIS THEME

### Option 1: Using Shopify Theme Editor (Easiest)
1. Go to your Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Upload zip file"
3. Create a ZIP file with the folder structure shown above
4. Upload and publish

### Option 2: Manual Setup
1. Go to Shopify Admin → Online Store → Themes
2. Click "Customize" on your current theme
3. Click the three dots → "Edit code"
4. Create/replace files according to the structure above

### Option 3: Using Shopify CLI
1. Install Shopify CLI
2. Create a new theme folder with the structure above
3. Run `shopify theme push` to upload

### Required Setup After Installation
1. Create these link lists in Navigation:
   - `main-menu` - For header navigation
   - `footer` - For footer links

2. Create these pages:
   - Contact
   - FAQs
   - About
   - Shipping
   - Returns
   - Privacy
   - Terms

3. Add products to collections
4. Upload images for hero slides and categories
5. Configure theme settings

---

**Note**: This is a complete Shopify 2.0 theme with JSON templates. Copy each section into the appropriate file in your Shopify theme editor.
