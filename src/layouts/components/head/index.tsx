import React from 'react'
import { Helmet } from 'react-helmet'

import faviconICO from './assets/favicon.ico'
import faviconSVG from './assets/favicon.svg'
import metaImage from './assets/poster.png'

type Props = {
	title?: string
	titleTemplate?: string
}

export const PageHead = (props: Props) => {
	const defaults = {
		title: 'Full Title',
	}

	const meta: Record<string, string> = {
		name: 'Title',
		title: props.title || defaults.title,
		description: 'Description',
		lang: 'ru',
		url: import.meta.env.BASE_URL,
		color: '#3961da',
	}

	const titleTemplate = props.titleTemplate ?? `%s | ${meta.name}`

	return <Helmet titleTemplate={titleTemplate}>
		<html lang={meta.lang} />
		<meta
			name='viewport'
			content='width=device-width, initial-scale=1.0'
		/>
		<title>{meta.title}</title>
		<meta name='description' content={meta.description} />
		<meta property='og:title' content={meta.title} />
		<meta property='og:description' content={meta.description} />
		<meta property='og:type' content='website' />
		<meta property='og:url' content={meta.url} />
		<meta property='og:site_name' content={meta.name} />
		<meta property='og:image' content={metaImage} />
		<meta property='og:image:width' content='1526' />
		<meta property='og:image:height' content='1526' />
		<meta property='og:image:alt' content={meta.title} />
		<meta name='theme-color' content={meta.color} />
		<link rel='icon' href={faviconICO} sizes='any' />
		<link rel='icon' href={faviconSVG} type='image/svg+xml' />
	</Helmet>
}
