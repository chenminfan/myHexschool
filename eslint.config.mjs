import globals from "globals"
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    rules: {
      'jsx-first-prop-new-line': 'multiline',
      'jsx-function-call-newline': ["error", "multiline"],
      'jsx-newline': [{ "prevent": true, "allowMultilines": true }],
      'jsx-wrap-multilines': [
        {
          "declaration": "parens",
          "assignment": "parens",
          "return": "parens",
          "arrow": "parens",
          "condition": "ignore",
          "logical": "ignore",
          "prop": "ignore",
          "propertyValue": "ignore"
        }
      ],
      'no-extra-semi': "error",
      'semi-style': ["error", "last"],
      'jsx-quotes': ["error", "prefer-single"],
      'jsx-indent': [2, 2],
      'jsx-indent-props': [2, 2],
      'jsx-curly-newline': [
        { multiline: "consistent", singleline: "consistent" },
      ],
      'no-unused-vars': 'warn',
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      quotes: [2, "single", { avoidEscape: true }],
      "max-len": ["error", { code: 800 }],
      "no-shadow": "off",
      "react/require-default-props": "off",
    },
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/jsx': stylisticJsx,

    },
    rules: {
      '@stylistic/jsx/jsx-indent': ['error', 2],
      '@stylistic/js/indent': ['error', 2],
    }
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
]
