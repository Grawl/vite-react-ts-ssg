// Pre-render the app into static HTML.
// run `yarn build` and then `dist/static` can be served as a static site.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { appTemplate } from './template.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')

const { render } = await import('./dist/server/entry-server.js')

// TODO use `routes` from `./src/routes.ts`
// determine routes to pre-render from src/pages
const routesToPrerender = fs
	.readdirSync(toAbsolute('src/pages'))
	.map((file) => {
		const name = file
			.replace(/\.[jt]sx$/, '')
			.toLowerCase()
		return name === 'home' ? `/` : `/${name}`
	})

;(async () => {
	// pre-render each route
	for (const url of routesToPrerender) {
		const context = {}
		const appHtml = await render(url, context)
		const html = appTemplate(template, appHtml)
		const filePath = `dist/static${url === '/' ? '/index' : url}.html`
		fs.writeFileSync(toAbsolute(filePath), html)
		console.log('📦 pre-rendered:', filePath)
	}
})()
