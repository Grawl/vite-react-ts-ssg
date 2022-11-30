import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '@/routes'

import styles from './style.module.css'

export const GlobalNav = () => {
	return (
		<nav className={styles.root}>
			<ul className={styles.nav}>
				{routes.map(({ name, path }) => {
					return (
						<li key={path}>
							<Link to={path}>{name}</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
