// import eslintConfigPrettier from "eslint-config-prettier/flat";
import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { configs, config } from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const setAssetsImportRule = patterns => {
  return patterns.map(pattern => ({
    pattern,
    patternOptions: {
      matchBase: true
    },
    group: "object"
  }));
};

const eslintConfig = config(
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  configs.recommended,
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: { process: "readonly" },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        tsconfig: ["./tsconfig.json"]
      }
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin
    },
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      jsxA11yPlugin.flatConfigs.recommended
    ],
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json"]
        }
      },
      "import/ignore": ["vscode"],
      "import/core-modules": ["vscode"]
    },
    rules: {
      // Typescript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
          caughtErrors: "none",
          destructuredArrayIgnorePattern: "^_",
          argsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      // Import rules
      "import/no-duplicates": "off",
      "no-extra-boolean-cast": "off",
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"], ["object"]],
          pathGroups: [
            ...setAssetsImportRule([
              "*.svg",
              "*.svg?inline",
              "*.svg?url",
              "*.png",
              "*.jpg",
              "*.jpeg",
              "*.gif",
              "*.webp",
              "*.avif",
              "*.json",
              "*.md",
              "*.txt",
              "*.tif",
              "*.tiff",
              "*.woff",
              "*.woff2"
            ])
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: false }
        }
      ],
      // React Hooks rules
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
      // jsx-a11y rules
      ...jsxA11yPlugin.configs.recommended.rules,
      // Next.js rules
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error"
    }
  }
);

export default eslintConfig;
