module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      "prettier/prettier":"error",
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      complexity: ["error", 6],
      "@typescript-eslint/no-var-requires": "off",
      "no-useless-escape": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-inferrable-types": "off",
    },
  };
  