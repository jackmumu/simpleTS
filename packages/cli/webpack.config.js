// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./bin.ts",
  mode: "production", // 设置 mode 选项为 'development' 或 'production'
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node', // 如果你的项目是运行在 Node.js 环境中
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bin.js",
    path: path.resolve(__dirname, "./"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
