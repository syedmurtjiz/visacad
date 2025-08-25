module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unescaped-entities": "off"
  },
  ignorePatterns: [".next/", "node_modules/", "out/", "public/"]
}
