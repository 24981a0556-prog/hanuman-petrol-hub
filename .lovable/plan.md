

# Hanuman Petroleums — Mobile-First Petrol Pump Website

## Overview
A single-page scroll website optimized for conversions (call, directions, WhatsApp). Mobile-first, bilingual (English/Hindi), with floating action buttons.

## Assets
- Copy the Hanuman logo to `public/images/hanuman-logo.jpeg` (navbar, hero, footer, favicon)
- Copy the Indian Oil watermark logo to `public/images/watermark-logo.png` (hero background only, 5-8% opacity)

## Design System
- Primary: `#FF6600`, Secondary: `#003399`, BG: white/light gray
- Clean sans-serif typography, card-based UI, rounded corners, soft shadows
- Update CSS theme variables to match the orange/blue brand

## Structure (all in index route — single scroll page as requested)

### Sticky Navbar
- Logo top-left, nav links (Home, Services, Reviews, Contact) with smooth scroll
- Language toggle (EN/HI) top-right
- Mobile hamburger menu

### Hero Section (Home)
- Watermark logo centered at ~6% opacity behind content
- Gradient overlay background
- Business name, tagline, subtitle
- Two CTA buttons: "Call Now" (tel links) and "Get Directions" (Google Maps link)
- Brief about text

### Services Section
- 3 cards: Petrol (MS), Diesel (HSD), Mobile Tanker Services
- Trust badges row: 24/7 Service, Reliable Fuel, Quick Service

### Reviews Section
- 4.3 star rating display with "Based on Google Reviews"
- Google-style review cards with sample reviews

### Contact Section
- Full address, click-to-call phone numbers
- "Open 24 Hours" badge
- Embedded Google Maps iframe

### Footer
- Small logo, business info, quick links

### Floating Action Buttons
- Fixed bottom-right stack: Call, WhatsApp, Maps
- All linking to the specified URLs

## Bilingual Support
- React context for language toggle (EN/HI)
- All UI strings translated: buttons, section headings, labels

## SEO
- Proper meta title, description, og tags in route head()

## Performance
- Large touch targets for mobile
- Smooth scroll behavior
- Minimal dependencies, fast load

