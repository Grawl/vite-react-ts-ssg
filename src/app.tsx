import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import { GlobalNav } from './layouts/components/nav'
import { routes } from './routes'

import './layouts/global.css'

export const App = () => {
	return (
		<>
			<GlobalNav />
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
