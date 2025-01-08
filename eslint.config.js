// eslint.config.js
/** @type {import('eslint').Linter.Config} */
const config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Adicione suas regras personalizadas aqui
    },
};

export default config;