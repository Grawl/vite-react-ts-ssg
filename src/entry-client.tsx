import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'

const root = document.getElementById('root')

if (!root) {
	throw Error('root element not found')
}

hydrateRoot(
	root,
	<BrowserRouter>
		<App />
	</BrowserRouter>,
)
