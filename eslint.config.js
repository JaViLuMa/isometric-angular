// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const unicorn = require("eslint-plugin-unicorn").default;
const sonarjs = require("eslint-plugin-sonarjs");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    plugins: { unicorn, sonarjs },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "isometric",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: ["element", "attribute"],
          prefix: "isometric",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-shadow": "error",
      "no-await-in-loop": "error",
      "no-new-func": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "no-negated-condition": "error",
      "@typescript-eslint/parameter-properties": "error",
      "no-param-reassign": "error",
      "unicorn/numeric-separators-style": "error",
      yoda: "error",
      curly: ["error", "all"],
      "no-lonely-if": "error",
      "unicorn/no-lonely-if": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "unicorn/new-for-builtins": "error",
      "default-case": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "operator-assignment": ["error", "always"],
      "unicorn/throw-new-error": "error",
      "@typescript-eslint/no-array-constructor": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "Use a union type or an `as const` object instead of enum.",
        },
      ],
      "no-nested-ternary": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-at": "error",
      "sonarjs/cognitive-complexity": ["error", 20],
      "unicorn/prefer-date-now": "error",
      "max-lines-per-function": [
        "error",
        { max: 60, skipBlankLines: true, skipComments: false },
      ],
      "unicorn/no-for-each": "error",
      "no-implicit-coercion": "error",
      "no-useless-concat": "error",
      "sonarjs/prefer-while": "error",
      "no-console": "error",
      "no-unassigned-vars": "error",
      "no-empty": ["error", { allowEmptyCatch: false }],
      "no-empty-static-block": "error",
      "@typescript-eslint/no-empty-function": "error",
      "no-var": "error",
      "require-await": "error",
      "unicorn/error-message": "error",
      "unicorn/require-number-to-fixed-digits-argument": "error",
      "no-dupe-else-if": "error",
      "no-irregular-whitespace": "error",
      "no-octal-escape": "error",
      "no-template-curly-in-string": "error",
      "guard-for-in": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-ngsrc": "error",
    },
  },
]);
