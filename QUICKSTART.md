# 🚀 Quick Start Guide - Khansa Portfolio

## Run the Development Server

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
D:\Khansa\Quater-4\portfolio\
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + SEO metadata
│   │   ├── page.tsx            # Main page (combines all sections)
│   │   └── globals.css         # Global styles + custom animations
│   │
│   └── components/
│       ├── Navbar.tsx          # Sticky navigation + mobile menu
│       ├── Hero.tsx            # Hero section + particle background
│       ├── About.tsx           # About me + stats
│       ├── Skills.tsx          # Skills with animated progress bars
│       ├── Projects.tsx        # Project cards with 3D hover effect
│       ├── Experience.tsx      # Work experience timeline
│       ├── Testimonials.tsx    # Client testimonials
│       ├── Contact.tsx         # Contact form + validation
│       └── Footer.tsx          # Footer with social links
│
├── public/                     # Static assets (add resume.pdf here)
├── tailwind.config.ts          # Custom theme + animations
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## Customization Guide

### 1. Update Personal Info
Edit these files in `src/components/`:
- **Hero.tsx** - Name, title, tagline
- **About.tsx** - Bio paragraphs
- **Contact.tsx** - Email, phone, social links

### 2. Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "#8B5CF6", /* ... */ },
  accent: { cyan: "#22D3EE", pink: "#EC4899" },
}
```

### 3. Add Your Resume
Place your PDF at: `public/resume.pdf`

### 4. Update Projects
Edit the `projects` array in `src/components/Projects.tsx`

### 5. Update Experience
Edit the `experiences` array in `src/components/Experience.tsx`

### 6. Update Testimonials
Edit the `testimonials` array in `src/components/Testimonials.tsx`

### 7. Update Skills
Edit the skill arrays in `src/components/Skills.tsx`

## Features Included

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark theme with neon accents
✅ Smooth scroll animations
✅ Particle background effect
✅ 3D hover tilt on project cards
✅ Animated skill progress bars
✅ Contact form with validation
✅ SEO optimized with meta tags
✅ Accessible (ARIA labels, keyboard navigation)
✅ Glassmorphism effects
✅ Custom scrollbar styling
✅ Loading animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3.4
- Framer Motion
- Lucide React Icons

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the output folder
```

### Manual Server
```bash
npm run build
npm run start
```

## Need Help?

Check the full README.md for detailed documentation.
