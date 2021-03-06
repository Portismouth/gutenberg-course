module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    wp: "readonly",
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
  },
};
