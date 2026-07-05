# Khansa - Fullstack Web Developer Portfolio

A modern, production-ready personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## ✨ Features

- 🎨 Dark theme with elegant neon/vibrant accents (purple, cyan, pink)
- 📱 Fully responsive (mobile-first design)
- 🎭 Smooth scroll, hover effects, and scroll animations
- 🔍 SEO optimized with proper meta tags
- ⚡ Fast and performant
- ♿ Accessible
- 🌟 Glassmorphism effects
- ✨ Particle background in hero section
- 📜 Clean, modern UI/UX

## 📦 Sections

1. **Navbar** - Logo + links with mobile menu
2. **Hero** - Name, title, CTAs with animated particles
3. **About Me** - Professional bio with stats
4. **Skills** - Frontend & Backend with progress bars
5. **Featured Projects** - Premium project cards with hover tilt
6. **Experience** - Timeline view of work history
7. **Testimonials** - Client feedback
8. **Contact** - Form with validation + social links
9. **Footer** - Copyright + quick links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page combining all sections
│   │   └── globals.css         # Global styles and custom CSS
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with mobile menu
│   │   ├── Hero.tsx            # Hero section with particles
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx          # Skills with progress bars
│   │   ├── Projects.tsx        # Featured projects grid
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with links
│   ├── lib/                    # Utility functions
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { /* ... */ },
  accent: { cyan: "#22D3EE", pink: "#EC4899", purple: "#A855F7" },
  dark: { /* ... */ },
}
```

### Content

Update the content in each component file:
- **Hero:** `src/components/Hero.tsx`
- **About:** `src/components/About.tsx`
- **Skills:** `src/components/Skills.tsx`
- **Projects:** `src/components/Projects.tsx`
- **Experience:** `src/components/Experience.tsx`
- **Testimonials:** `src/components/Testimonials.tsx`
- **Contact:** `src/components/Contact.tsx`

### Resume/CV

Place your PDF resume in the `public/` folder as `resume.pdf`

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Khansa**
- Location: Karachi, Pakistan
- Email: hello@khansa.dev
- GitHub: https://github.com/khansa
- LinkedIn: https://linkedin.com/in/khansa
