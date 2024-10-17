import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
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
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
