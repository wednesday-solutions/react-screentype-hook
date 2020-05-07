const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "react-screentype-hook.js",
    library: "react-screentype-hook",
    libraryTarget: "umd"
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_"
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "react"
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      })
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ],
  resolve: {
    modules: ["node_modules", "app"],
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"]
  }
};
