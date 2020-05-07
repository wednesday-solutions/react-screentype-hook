const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sdk-template.js",
    library: "sdk-template-data",
    libraryTarget: "umd"
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_"
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  resolve: {
    modules: ["node_modules", "app"],
    alias: {
      src: path.resolve(__dirname, "./src"),
      services: path.resolve(__dirname, "./src/services"),
      selectors: path.resolve(__dirname, "./src/selectors"),
      reducers: path.resolve(__dirname, "./src/reducers"),
      utils: path.resolve(__dirname, "./src/utils")
    },
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"]
  }
};
