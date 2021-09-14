# TypeScript starter package

This is my personal, opinionated template for a TypeScript package that uses Jest for testing and modern ESM modules.

## Yarn for package management

Yarn 2 introduced new features that make it a very compelling replacement for NPM.

- The package manager is bundled with the package itself. No need for a package manager manager.
- The Plug 'n Play system is a better alternative to `node_modules`

To update the Yarn version in this repo:

```sh
yarn set version latest
```

## Tests

Jest is a very popular test runner. That popularity and ubiquity makes it compelling, and their support for ESM modules is nearly there.

Tests are written in a separate directory. The name of the directory does not matter, so I use the `__tests__` convention supported natively by Jest. By putting tests in an external directory, it encourages me to write tests from the perspective of a user instead of from the perspective of the code author. Tests should only be written against the public API.

## ESLint and Prettier

Again, very popular tools with good support by Yarn 2 and popular editors/IDEs.

## ESM and exports

ESM module syntax is the future, and everything here speaks exclusively in ESM.

Package exports now come in two flavors. Read more here: https://nodejs.org/api/packages.html#packages_package_entry_points

The way that entry points are defined depends on the project, and neither format is defined in this starter package.
