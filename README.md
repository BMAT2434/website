# Student Portfolio

A minimal, creative, and cleanly-designed personal portfolio built with [Next.js](https://nextjs.org/) and Tailwind CSS. The design focuses on strong typography and subtle CMYK accent colors.

## Live Website

**[https://BMAT2434.github.io/website](https://BMAT2434.github.io/website)**

## Features

- **Next.js App Router**: Utilizes modern Next.js routing for fast, static pages.
- **Static Export**: Configured specifically to be built and exported as static HTML/CSS/JS for easy and cheap hosting on GitHub Pages.
- **Tailwind CSS**: Custom tailored theme featuring:
  - Clean light-mode only aesthetic
  - Custom Inter typography
  - CMYK (Cyan, Magenta, Yellow, Black) thematic accents
- **GitHub Actions**: Fully automated deployment pipeline (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages upon every push to the `main` branch.

## Getting Started Locally

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/website](http://localhost:3000/website) with your browser to see the result.
*(Note: Because the `basePath` is set to `/website` for GitHub Pages, the local dev server will also use that path).*

## Editing Content

You can start editing the content by modifying the files in the `app/` directory:
- `app/page.tsx` - The Home page
- `app/about/page.tsx` - About Me
- `app/projects/page.tsx` - Projects
- `app/skills/page.tsx` - Skills
- `app/resume/page.tsx` - Resume
- `app/blog/page.tsx` - Blog
- `app/contact/page.tsx` - Contact

The page auto-updates as you edit the files locally.
