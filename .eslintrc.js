// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: 'babel-eslint',

    extends: [
        'react-app',
    ],

    globals: {
        __DEV__: true,
    },

    env: {
        browser: true,
    },

    rules: {
        "semi": ['warn', "never"],
        "jsx-a11y/href-no-hash": "off",

        // Not supporting nested package.json yet
        // https://github.com/benmosher/eslint-plugin-import/issues/458
        'import/no-extraneous-dependencies': 'off',

        // Recommend not to leave any console.log in your code
        // Use console.error, console.warn and console.info instead
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],

        // Automatically convert pure class to function by
        // babel-plugin-transform-react-pure-class-to-function
        // https://github.com/kriasoft/react-starter-kit/pull/961
        'react/prefer-stateless-function': 'off',

        // ESLint plugin for prettier formatting
        // https://github.com/prettier/eslint-plugin-prettier
        // 'prettier/prettier': [
        //     'warn',
        //     {
        //         // https://github.com/prettier/prettier#options
        //         singleQuote: true,
        //         trailingComma: 'all',
        //         tabWidth: 4,
        //         semi: false,
        //         bracketSpacing: false,
        //     },
        // ],
    },

    settings: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules'],
            },
        },
    },
};