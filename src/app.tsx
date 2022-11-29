import { Fragment } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export const App = () => {
	return (
		<>
			<nav>
				<ul>
					{routes.map(({ name, path }) => {
						return (
							<li key={path}>
								<Link to={path}>{name}</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<Routes>
				{routes.map(({ path, Component }) => (
					<Fragment key={path}>
						<Route
							path={path}
							element={<Component/>}
						/>
					</Fragment>
				))}
			</Routes>
		</>
	)
}
