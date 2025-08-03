import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import reactEslint from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react: reactEslint,
			prettier: prettierPlugin,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},
)
