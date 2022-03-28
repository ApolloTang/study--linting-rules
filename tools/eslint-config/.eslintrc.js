require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['./src/eslint-configs/node.js'],
  parserOptions: {
    project: './jsconfig.json',
    createDefaultProgram: true, //<----- https://stackoverflow.com/a/64488474/3136861
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  rules: {},
};
