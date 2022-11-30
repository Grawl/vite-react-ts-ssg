import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom/server'

import { App } from './app'

export function render(url: string) {
	const string = renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	)

	const helmet = Helmet.renderStatic()

	const attributes = (string?: string) =>
		string ? ` ${string}` : ''

	return `
		<!doctype html>
		<html${attributes(helmet.htmlAttributes.toString())}>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				<!--vite-html-->
			</head>
			<body${attributes(helmet.bodyAttributes.toString())}>
				${string}
			</body>
		</html>
	`
}
