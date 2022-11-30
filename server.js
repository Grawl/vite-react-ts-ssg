import dotenv from 'dotenv'
import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const { PORT } = process.env

export async function createServer(
	root = process.cwd(),
	isProd = process.env.NODE_ENV === 'production',
	hmrPort,
) {
	const resolve = (p) => path.resolve(__dirname, p)

	const indexProd = isProd
		? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
		: ''

	const app = express()

	/**
	* @type {import('vite').ViteDevServer}
	*/
	let vite
	if (isProd) {
		app.use((await import('compression')).default())
		app.use(
			(await import('serve-static')).default(resolve('dist/client'), {
				index: false,
			}),
		)
	} else {
		vite = await (await import('vite')).createServer({
			root,
			logLevel: 'info',
			server: {
				middlewareMode: true,
				hmr: {
					port: hmrPort,
				},
			},
			appType: 'custom',
		})
		// use vite's connect instance as middleware
		app.use(vite.middlewares)
	}

	app.use('*', async (req, res) => {
		try {
			const url = req.originalUrl

			let template, render, viteHTML

			if (isProd) {
				template = indexProd
				// @ts-ignore
				render = (await import('./dist/server/entry-server.js')).render
			} else {
				// always read fresh template in dev
				template = '<!--app-html-->'
				viteHTML = await vite.transformIndexHtml(url, '')
				render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
			}

			const context = {}
			const appHtml = render(url, context)

			if (context.url) {
				// Somewhere a `<Redirect>` was rendered
				return res.redirect(301, context.url)
			}

			const html = template
				.replace(`<!--app-html-->`, appHtml)
				.replace('<!--vite-html-->', viteHTML)

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
		} catch (e) {
			if(!isProd) vite.ssrFixStacktrace(e)
			console.log(e.stack)
			res.status(500).end(e.stack)
		}
	})

	return { app, vite }
}

const port = PORT ?? 5173
createServer().then(({ app }) =>
	app.listen(port, () => {
		console.log(`http://localhost:${port}`)
	}),
)
