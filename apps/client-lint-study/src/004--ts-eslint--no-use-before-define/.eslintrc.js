require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@myscope/eslint-config/src/eslint-configs/react.js'],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true, //<----- https://stackoverflow.com/a/64488474/3136861
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'warn',
      // The follow options seem to by buggy
      {
        enums: true, // warns every reference to a enum before the enum declaration
        typedefs: true, // warns every reference to a type before the type declaration
        ignoreTypeReferences: false, // check all type references.
      },
    ],
  },
};
