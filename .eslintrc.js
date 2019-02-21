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
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": true,
                "object": true
            },
            "AssignmentExpression": {
                "array": true,
                "object": true
            }
        }, {
            "enforceForRenamedProperties": false
        }]
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint"
};
