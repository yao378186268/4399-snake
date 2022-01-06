const path = require("path")
const htmlWebpackPublic = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/index.ts",

  //   打包文件所在的位置
  output: {
    // 打包之前先清空dist文件夹
    clean: true,
    //   打包的文件目录
    path: path.resolve(__dirname, "dist"),
    // 打包的文件名
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        //   打包的文件类型规则，以.ts结尾
        test: /.ts$/,
        // 打包用的工具
        use: "ts-loader",
        // 要排除的文件
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browse: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },

  plugins: [
    new htmlWebpackPublic({
      template: "./src/index.html",
    }),
  ],

  // 模块引入文件可以是.ts/.js
  resolve: {
    extensions: [".ts", ".js"],
  },
}
