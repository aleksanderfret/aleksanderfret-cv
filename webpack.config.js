import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import autoprefixer from "autoprefixer";
import WebpackPwaManifest from "webpack-pwa-manifest";

export default config = {
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
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(png|jpg)$/,
        use: "file-loader"
      },
      {
        test: /\.md$/,
        use: [{ loader: "html-loader" }, { loader: "markdown-loader" }]
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
    new HtmlWebpackPlugin({
      favicon: "./public/icons/favicon.ico",
      template: "./public/index.html",
      inlineSource: ".(js|css)$"
    })
  ]
};
