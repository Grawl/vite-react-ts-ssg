import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'

const app = document.getElementById('app')

if (!app) {
	throw Error('#app not found')
}

hydrateRoot(
	app,
	<BrowserRouter>
		<App />
	</BrowserRouter>,
)
