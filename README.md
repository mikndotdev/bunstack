# Bunstack (Bun + React + TanStack Router Template)

A modern web application starter template using Bun, React 19, TanStack Router, and TailwindCSS. No Vite required!

## Features

- ⚡ **Bun** - Fast JavaScript runtime and package manager
- ⚛️ **React 19** - Latest React version with improved performance
- 🧭 **TanStack Router** - Type-safe file-based routing
- 🎨 **TailwindCSS v4** - Utility-first CSS framework
- 🔄 **HMR** - Hot Module Replacement for quick development
- 🧰 **TypeScript** - Type safety for better development experience
- 🔍 **Biome** - Fast code formatter and linter

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/mikndotdev/bunstack.git
cd bun-react-template

# Install dependencies
bun install
```

### Development

Start the development server with hot reloading:

```bash
bun dev
```

### Building for Production

Build the application for production:

```bash
bun build
```

### Preview Production Build

Preview the production build locally:

```bash
bun preview
```

## Project Structure

```
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── routes/         # File-based routes
│   └── index.tsx       # Application entry point
├── public/             # Public files
├── build.ts            # Build configuration
├── package.json
└── tsconfig.json
```