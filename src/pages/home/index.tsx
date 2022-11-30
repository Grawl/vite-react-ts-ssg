import React from 'react'

import { PageHead } from '../../layouts/components/head'
import styles from './style.module.css'

export const Home = () => {
	return (
		<div className='page'>
			<PageHead title='Home' titleTemplate='%s' />
			<h1>Home</h1>
			<p>Home page text</p>
			<p className={styles.icon}>⚙️</p>
		</div>
	)
}
