# Template: [Vite](https://vitejs.dev) + [React](https://reactjs.org) + [TypeScript](https://typescriptlang.org) + SSG

Nothing useless, built from scratch

> **[SSG](https://dev.to/anshuman_bhardwaj/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs-5cja)** – stands for **S**erver **S**ide **G**eneration, or **S**tatic **S**ite **G**enerator – is a technique to generate static HTML + JS + CSS out of `.tsx` / `.ts` / preprocessors sources

# Create a project using this template

> npx degit Grawl/vite-react-ts-ssg

You can add desirable folder name in the end of that command to copy template into it

# `yarn dev` to start developing

You can copy `.env.example` as `.env` and change development server port

# `yarn build` to get static files

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
