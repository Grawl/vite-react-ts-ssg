import { Helmet } from 'react-helmet'

import dedent from 'dedent-js'

export const appTemplate = (vite, app) => {
	const helmet = Helmet.renderStatic()
	const attributes = s => s ? ` ${s}` : ''
	return dedent`
		<!doctype html>
		<html${attributes(helmet.htmlAttributes.toString())}>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				${vite}
			</head>
			<body${attributes(helmet.bodyAttributes.toString())}>
				<div id='root'>${app}</div>
			</body>
		</html>
	`
}
