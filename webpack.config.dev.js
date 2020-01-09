const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "./dist/public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "tests", "node_modules"],
    extensions: [".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCaseOnly",
              sourceMap: true,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentWidth: 2,
                includePaths: ["./src/scss/base", "./src/scss/partials"]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          sizes: [300, 400, 500, 600, 700, 800, 900, 1000, 1200],
          quality: 95,
          name: "images/[name]-[width]-[hash:8].[ext]"
        }
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "pdf/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    hot: true,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebPackPlugin({
      favicon: "./public/icons/favicon.ico",
      template: "./public/index.html",
      inlineSource: ".(js|css)$"
    })
  ]
};
