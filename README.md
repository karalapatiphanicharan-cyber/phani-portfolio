# Premium Portfolio Website

A world-class, SaaS-inspired personal portfolio foundation built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## 🚀 Vision

This project is designed with a "Software as a Service" (SaaS) aesthetic, prioritizing engineering excellence, design precision, and smooth interactions. It moves beyond the typical developer portfolio to feel like a premium software product.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (Customized)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)

## 🏗️ Architecture

The project follows a modular, scalable folder structure:

```text
app/          # App router pages and global styles
components/   # Reusable UI components and section shells
  ui/         # Atomic design components (Buttons, Badges, etc.)
  layout/     # Structural components (Container, Grid, Sections)
  navigation/ # Header and navigation components
  sections/   # Feature-specific sections (Hero, etc.)
lib/          # Utility functions and shared animation variants
styles/       # Global CSS and theme configuration
public/       # Static assets (fonts, icons, images)
```

## ✨ Features (Phase 1 & 2)

- **Premium Design System:** Custom dark theme with glassmorphism, glowing borders, and subtle gradients.
- **Responsive Layout:** Adaptive grid system and containers for all viewports (Mobile to Ultra-wide).
- **Animation Engine:** Pre-configured Framer Motion variants for consistent reveals and hover effects.
- **Hero Section:** High-impact landing area featuring animated code visuals and social integration.
- **Accessibility:** Semantic HTML and ARIA support following WCAG best practices.

## 🏁 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📜 Development Workflow

- **Linting:** `npm run lint` ensures code quality and consistency.
- **Formatting:** Prettier is used for automated code formatting.
- **Styling:** Tailwind 4 `@theme` directive is used in `app/globals.css` for design tokens.

---

Designed & Built with Precision.
