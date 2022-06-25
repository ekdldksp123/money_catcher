module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [ 'airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:react/recommended', 'plugin:import/recommended' ],
	ignorePatterns: [ '*.d.ts', 'node_modules', 'lib', 'build', 'dist', '**/env/*.js', '*.config.js' ],
	overrides: [{
		files: [ '*.ts', '*.tsx' ],
		rules: { 'no-undef': 'off' }
	}],
	parser: '@typescript-eslint/parser',
	parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
	plugins: [ '@typescript-eslint', 'sort-keys-fix' ],
	rules: {
		'@typescript-eslint/ban-ts-comment': [ 'error', { 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': 'error',
		'array-bracket-spacing': [ 'error', 'always', {
			arraysInArrays: false,
			objectsInArrays: false
		}],
		'brace-style': [ 'error', 'allman' ],
		'class-methods-use-this': 'off',
		'comma-dangle': [ 'error', 'never' ],
		'eol-last': [ 'error', 'never' ],
		'import/extensions': 'off',
		'import/named': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/no-cycle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default': 'off',
		'import/no-unresolved': 'off',
		'import/order': [ 'error', {
			alphabetize: {
				caseInsensitive: true,
				order: 'asc'
			},
			groups: [ 'external', 'builtin', 'internal', 'sibling', 'parent', 'index' ],
			'newlines-between': 'always'
		}],
		'import/prefer-default-export': 'off',
		indent: [ 'error', 'tab' ],
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/control-has-associated-label': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'linebreak-style': 'off',
		'max-len': 'off',
		'no-await-in-loop': 'off',
		'no-console': 'off',
		'no-lonely-if': 'off',
		'no-nested-ternary': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-restricted-exports': 'off',
		'no-return-assign': 'off',
		'no-shadow': 'off',
		'no-tabs': [ 'error', { allowIndentationTabs: true }],
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'object-curly-newline': [ 'error', {
			ExportDeclaration: 'never',
			ImportDeclaration: 'never',
			ObjectExpression: {
				minProperties: 3,
				multiline: true
			},
			ObjectPattern: 'never'
		}],
		'react-hooks/exhaustive-deps': 'off',
		'react/button-has-type': 'off',
		'react/destructuring-assignment': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-curly-brace-presence': [ 'error', {
			children: 'never',
			props: 'never'
		}],
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-indent-props': [ 2, 'tab' ],
		'react/jsx-no-useless-fragment': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': [ 'error', {
			callbacksLast: true,
			ignoreCase: true,
			multiline: 'last',
			noSortAlphabetically: false,
			reservedFirst: false,
			shorthandFirst: false,
			shorthandLast: true
		}],
		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/no-unused-prop-types': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'require-jsdoc': 'off',
		'sort-keys-fix/sort-keys-fix': 'error'
	},
	settings: {
		'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx', '.js' ] },
		react: { version: 'detect' }
	}
};