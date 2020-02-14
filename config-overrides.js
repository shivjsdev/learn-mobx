const path = require("path");
const {
  override,
  addPostcssPlugins,
  disableEsLint,
  addDecoratorsLegacy,
  addWebpackAlias
} = require("customize-cra");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    "@store": path.resolve(__dirname, "src/store")
  }),

  // adds tailwindcss
  addPostcssPlugins([require("tailwindcss")])
);
