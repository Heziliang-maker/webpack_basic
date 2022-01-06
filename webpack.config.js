/*
 * @Date: 2022-01-06
 * @Description: webpack config
 */

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    // [] : contain object
    rules: [
      {
        test: /\.css$/i, //pattern
        //loader: "css-loader",
        //use: []  contain multiple loaders ## from end -> start
        /**
         *   {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
         */
        use: ["style-loader", "css-loader", "postcss-loader"], //{loader:"style-loader"},{loader:"css-loader"},
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
