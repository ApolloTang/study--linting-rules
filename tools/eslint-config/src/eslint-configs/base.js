require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['@typescript-eslint', 'simple-import-sort'],

  extends: [
    // Endable eslint's inbuilt "recommended" config - it turns on a small,
    // sensible set of rules which lint for well-known best-practices.
    // Eslint Recommended are listed in: https://eslint.org/docs/rules/
    'eslint:recommended',

    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],

  settings: {
    jest: {
      version: 'detect', // <--- https://github.com/microsoft/vscode-eslint/issues/1145#issuecomment-780130183
    },
  },

  parser: '@typescript-eslint/parser', // Enable type aware linting with typescript-eslint/parser
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
  },

  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/', // Although we do not use 'build' as output folder name, we add this as a precaution
  ],

  rules: {
    // --------------------------------------
    // General
    // --------------------------------------

    // Disallow 'console.log', but console.{warn, error, info} is acceptable.
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],

    // Warn you that a variable is declared but not being used.
    'no-unused-vars': 'error',

    // The 'use strict' directive is no longer necessary since
    // ES2015 has fixed JS confusing behaviours.
    strict: ['error', 'never'],

    // Use easily understood coersion. For example, instead of
    // using the binary bitwise operator to find a needle in haystack:
    //     ~haystack.indexOf('needle'),
    // let's use an expression that easily understood by everybody:
    //     haystack.indexOf('needle') !== -1
    'no-implicit-coercion': 'error',

    // --------------------------------------
    // Jest
    // --------------------------------------

    // Warn you that you are missing calling an 'expect' in a test (without an expect() a test is pointless).
    'jest/expect-expect': 'warn',

    // --------------------------------------
    // Import
    // --------------------------------------

    'no-duplicate-imports': 'error',

    // Configuration for simple-import-sort/imports
    'sort-imports': 'off', // required, turn off for simple-import-sort plugin to work'
    'simple-import-sort/imports': [
      'off',
      {
        groups: [
          ['^\\u0000'], // Side effect, eg: import('some-polyfill'), it dectect null characters b/c 'from' is missing
          ['^react', '^@?\\w'], // 3rd party library, react come first, Scoped libraries next
          ['^(@mycompany|@myscope)(/.*|$)'], // Company's scoped packages
          [
            // Order of various import patterns
            '^(~.+)(/.*|$)',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          ['^.+\\.css$'], // Style imports
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],

      extends: [
        // Disables rules from eslint:recommended which are already
        // handled by TypeScript. Disabled rules are listed in:
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'plugin:@typescript-eslint/eslint-recommended',

        // Enable official typescript recommended rules are listed in:
        //   https://typescript-eslint.io/rules/
        // Link to actual source code:
        //   https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
        'plugin:@typescript-eslint/recommended',

        // Enable type aware linting. It uses tsconfig.json
        // specified in package's eslintrc.js. Rules are listed in:
        //   https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      rules: {
        // ------------------------------------------
        // required work around
        // ------------------------------------------

        // Without the following, you will get inconsistent behaviour, see:
        // https://github.com/typescript-eslint/typescript-eslint/issues/50
        '@typescript-eslint/explicit-function-return-type': 'off',

        // ------------------------------------------
        // Rule Forgivness,
        // forgive you for breaking rules.
        // ------------------------------------------

        // We should avoid using @ts-ignore, instead please use
        // @ts-expect-error.
        '@typescript-eslint/ban-ts-comment': 'warn',

        // -------------------------------------------
        // Rules not recommended officially but
        // enforcements or relax for spacific reason
        // -------------------------------------------

        // Types must be declared before usage
        '@typescript-eslint/no-use-before-define': 'off',
        // Consider using the following setting:
        // '@typescript-eslint/no-use-before-define': [
        //   'error',
        //   {
        //     enums: true, // warns every reference to a enum before the enum declaration
        //     typedefs: true, // warns every reference to a type before the type declaration
        //     ignoreTypeReferences: false, // check all type references.
        //   },
        // ],

        // Allow use of 'require' statement outside import statements.
        // This is necessary when mock module multiple times with different values, see:
        //   https://stackoverflow.com/questions/49650323/jest-mock-module-multiple-times-with-different-values
        // And also to get webpack bundle fonts, see:
        //   see example web-app
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    // JavaScript files
    {
      files: ['**/*.{js,jsx}'],
    },
  ],
};
