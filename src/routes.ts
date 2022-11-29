import { About } from './pages/about'
import { Home } from './pages/home'

type Route = {
	name: string
	path: string
	Component: () => JSX.Element
}

export const routes: Route[] = [
	{
		name: 'home',
		path: '/',
		Component: Home,
	},
	{
		name: 'about',
		path: '/about',
		Component: About,
	},
]
