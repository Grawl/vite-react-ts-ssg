# Template: [Vite](https://vitejs.dev) + [React](https://reactjs.org) + [TypeScript](https://typescriptlang.org) + SSG

[![Known Vulnerabilities](https://snyk.io/test/github/Grawl/vite-react-ts-ssg/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Grawl/vite-react-ts-ssg?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/c875bc2c3f824135f2c9/maintainability)](https://codeclimate.com/github/Grawl/vite-react-ts-ssg/maintainability)
[![Build](https://github.com/Grawl/vite-react-ts-ssg/actions/workflows/build.yml/badge.svg)](https://github.com/Grawl/vite-react-ts-ssg/actions/workflows/build.yml)
[![Node.js ^18.12.1](https://img.shields.io/badge/Node.js-^18.12.1-brightgreen.svg)](https://nodejs.org)
[![NPM ^8.19.2](https://img.shields.io/badge/NPM-^8.19.2-brightgreen.svg)](https://npmjs.com)

Nothing useless, built from scratch

> **[SSG](https://dev.to/anshuman_bhardwaj/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs-5cja)** – stands for **S**erver **S**ide **G**eneration, or **S**tatic **S**ite **G**enerator – is a technique to generate static HTML + JS + CSS out of `.tsx` / `.ts` / preprocessors sources

# Create a project using this template

```
npx degit Grawl/vite-react-ts-ssg
```

You can add desirable folder name in the end of that command to copy template into it

# `npm run dev` to start developing

You can copy `.env.example` as `.env` and change development server port

# `npm run build` to get static files

You will get `dist/static/` folder with all static assets you can deploy anywhere

# Origin

> This template is [`playground/ssr-react`](https://github.com/vitejs/vite/tree/c45c984ce88b9f36a61761b4df849b7e8dd8e3ce/playground/ssr-react) folder of Vite repository with added some features and prepared to be a template with developer experience and all features you want to make a website

Added:

- [TypeScript](https://typescriptlang.org) support
- [ESLint](http://eslint.org) support with minimal config for code style, plus:
  - [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) to sort imports during ESLint `--fix`
  - [unsed-imports](https://github.com/sweepline/eslint-plugin-unused-imports) to remove unused imports during ESLint `--fix`
- [React Helmet](https://github.com/nfl/react-helmet) to rule document `<head>`
- Styling examples using CSS Modules and global CSS
- Runtime example using `useState` (at home page)

Removed:

- **Tests** because who wants to test static sites
- **SSR mode** because we want SSG here

# TODO

- [ ] Use `ts-node` to run all scripts and rewrite all JS to TS
