const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    fileName: "bundle.js",
    path: path.resolve(__dirname, "src/main/resources/static"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
