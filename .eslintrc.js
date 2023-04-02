// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: ['standard-with-typescript',
//   'plugin:prettier/recommended'],
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module'
//   },
//   rules: {
//     'wdio/no-sync': 'error'
//   },
//   parser: '@typescript-eslint/parser',
//   // eslint-disable-next-line no-dupe-keys
//   parserOptions: {
//     project: './tsconfig.json'
//   },
//   plugins :['@typescript-eslint','prettier', 'wdio']
// }

{
  "root"= true,
  "parser"= "@typescript-eslint/parser",
  "plugins"= ["@typescript-eslint"],
  "extends"= [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "rules"= {
      "@typescript-eslint/no-var-requires": 0
  }
}
