module.exports = {
  ignorePatterns: ['vite-env.d.ts'],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
        'eslint:recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        'no-undef': 'off',
        'no-irregular-whitespace': ['off', { skipTemplates: true }],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false },
        ],
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-no-bind': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'jsx-a11y/anchor-is-valid': [2, { depth: 1 }],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                controlComponents: [
                    'InputSelect',
                    'SectionTitle',
                    'InputTitle',
                    'InputText',
                    'TextArea',
                ],
                depth: 5,
            },
        ],
        'no-console': 'off',
    },
}
