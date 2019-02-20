module.exports = {
    env: {
        browser: true,
        es6: true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": 0,
        "indent": ["error", 4, {"SwitchCase": 1}],
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint"
};
