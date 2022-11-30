import { Helmet } from 'react-helmet'

import dedent from 'dedent-js'

export const appTemplate = (vite, app) => {
	const helmet = Helmet.renderStatic()
	const attributes = s => s ? ` ${s}` : ''
	const {
		htmlAttributes,
		bodyAttributes,
		// titleAttributes,
		title,
		meta,
		link,
		noscript,
		base,
		script,
		style,
	} = helmet
	return dedent`
		<!doctype html>
		<html${attributes(htmlAttributes.toString())}>
			<head>
				${base.toString()}
				${title.toString()}
				${meta.toString()}
				${link.toString()}
				${noscript.toString()}
				${script.toString()}
				${style.toString()}
				${vite}
			</head>
			<body${attributes(bodyAttributes.toString())}>
				<div id='root'>${app}</div>
			</body>
		</html>
	`
}
