const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'import',
		'unused-imports',
		'simple-import-sort',
	],
	rules: {
		'eol-last': ['warn', 'always'],
		'linebreak-style': ['warn', 'unix'],
		'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
		'no-trailing-spaces': 'warn',
		'semi': ['warn', 'never'],
		'comma-dangle': ['warn', 'always-multiline'],
		'indent': ['warn', 'tab', { SwitchCase: 1 }],
		'quotes': ['error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],
		'quote-props': ['error', 'consistent'],
		//
		'unused-imports/no-unused-imports': ['warn'],
		'simple-import-sort/imports': ['warn', {
			groups: [
				// general dependencies
				['^react'],
				// node_modules
				['^@?\\w'],
				// Root
				['^src'],
				// Aliases
				['^pages\\/?'],
				// Anything not matched in another group
				['^'],
				// Side effects like `import 'foo'`
				['^\\u0000'],
			],
		}],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		//
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json',
			},
			plugins: [
				'@typescript-eslint',
			],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'@typescript-eslint/indent': ['warn', 'tab'],
				'@typescript-eslint/member-delimiter-style': ['warn', {
					multiline: { delimiter: 'none' },
					singleline: { delimiter: 'comma' },
				}],
				'@typescript-eslint/quotes': ['warn', 'single', {
					'avoidEscape': true,
					'allowTemplateLiterals': true,
				}],
				'@typescript-eslint/consistent-type-imports': ['error', {
					prefer: 'type-imports',
					disallowTypeAnnotations: false,
				}],
			},
		},
	],
})
