import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'

hydrateRoot(
	document.getElementById('app'),
	<BrowserRouter>
		<App />
	</BrowserRouter>,
)
