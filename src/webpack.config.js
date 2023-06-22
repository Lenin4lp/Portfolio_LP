var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  module: {
    optimization: {
      usedExports: true,
    },
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          plugins: ["lodash"],
          presets: [["env", { modules: false, targets: { node: 4 } }]],
        },
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
