import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      vue: pluginVue
    },
    rules: {
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
    ...pluginJs.configs.recommended,
  },
  {
    ...tseslint.configs.recommended[0],
    rules: {
      ...tseslint.configs.recommended[0].rules,
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
]
