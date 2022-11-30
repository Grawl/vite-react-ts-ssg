import React, { useState } from 'react'

import { PageHead } from '../../layouts/components/head'
import styles from './style.module.css'

export const Home = () => {
	const [count, setCount] = useState(0)
	return (
		<div className='page'>
			<PageHead titleTemplate='%s' />
			<h1>Home</h1>
			<p>Home page text</p>
			<p>You clicked {count} times</p>
			<button
				className={styles.button}
				onClick={() => setCount(count + 1)}
			>
				Click me
			</button>
		</div>
	)
}
