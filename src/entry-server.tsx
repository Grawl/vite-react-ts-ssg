import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { App } from './app'

export const render = (url: string) => (
	renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>,
	)
)
