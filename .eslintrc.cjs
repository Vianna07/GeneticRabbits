module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', "node_modules"],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				printWidth: 80,
				singleQuote: false,
				semi: true,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: false,
				bracketSpacing: true,
				endOfLine: 'auto',
			},
		],
  },
}
