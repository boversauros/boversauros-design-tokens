# Boversauros Design Tokens

A proof of concept for deploying design tokens via npm and CDN using GitHub Actions.

## About

Boversauros Design Tokens demonstrates a streamlined approach to managing and distributing design tokens. It showcases automated deployment of both light and dark theme tokens using GitHub Actions, making them available through npm and a CDN (Cloudflare R2).

## Features

- Light and dark theme tokens
- Automated build and deployment process
- npm package distribution
- CDN distribution via Cloudflare R2
- GitHub Actions for CI/CD

## Folder Structure

```
boversauros-design-tokens/
├── src/
│   └── css/
│       ├── light/
│       │   └── tokens.css
│       └── dark/
│           └── tokens.css
├── scripts/
│   └── build.js
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── publish.yml
```

- `src/css/`: Contains the source CSS files for light and dark themes
- `scripts/`: Holds the build script
- `.github/workflows/`: Contains the GitHub Actions workflow for CI/CD
