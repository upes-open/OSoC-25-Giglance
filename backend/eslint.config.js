import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import'; // Add import plugin

export default tseslint.config(
  {
    ignores: ['build/**', 'dist/**', 'node_modules/**', 'coverage/**', './src/lib/prisma/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}', 'jest.config.js'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      import: importPlugin, // Add this line to register the plugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // TypeScript specific rules
      // Consider enabling these rules and fixing type issues instead
      // Consider enabling these rules and fixing type issues instead
      // '@typescript-eslint/no-unsafe-call': 'warn',
      // '@typescript-eslint/no-unsafe-member-access': 'warn',
      // '@typescript-eslint/no-unsafe-assignment': 'warn',
      // '@typescript-eslint/no-unused-vars': [
      //   'warn',
      //   { 
      //     argsIgnorePattern: '^_',
      //     varsIgnorePattern: '^_',
      //     caughtErrorsIgnorePattern: '^_',
      //   },
      // ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { 
          prefer: 'type-imports', 
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      // General JavaScript rules
      'no-console': 'off', // Allow console in backend
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-unused-vars': 'off',
      'import/no-unresolved': 'error',
      'import/extensions': ['error', 'never', { json: 'always' }],
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
);