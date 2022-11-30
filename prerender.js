// Pre-render the app into static HTML.
// run `yarn build` and then `dist/static` can be served as a static site.

import dedent from 'dedent-js'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const { render } = await import('./dist/server/entry-server.js')

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
			.replace('<!--vite-html-->', '')
		const filePath = `dist/static${url === '/' ? '/index' : url}.html`
		fs.writeFileSync(toAbsolute(filePath), dedent(appHtml))
		console.log('📦 pre-rendered:', filePath)
	}
})()
