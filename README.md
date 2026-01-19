# jerem.io

Personal landing page with animated Three.js particle background.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js

## Features

- Animated 3D particle background
- Glassmorphism UI design
- Fully responsive (mobile-first)
- Lazy-loaded Three.js for performance
- Accessible (ARIA labels, keyboard navigation, reduced motion support)
- SEO optimized with meta tags

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v8+)

### Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

### Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx  # Three.js particle background
│   └── ProjectCard.tsx         # Project card component
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting provider:

```bash
pnpm build
```

Recommended platforms:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## License

MIT
