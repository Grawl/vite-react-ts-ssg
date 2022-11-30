import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'node:path'
import { defineConfig } from 'vite'

dotenv.config()

export default defineConfig({
	plugins: [
		react(),
	],
	build: {
		assetsInlineLimit: 0,
	},
	base: process.env.PUBLIC_BASE_URL,
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
