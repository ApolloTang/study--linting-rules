require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@myscope/eslint-config/src/eslint-configs/react.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
