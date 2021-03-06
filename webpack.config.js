const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');

module.exports = (env, argv) => {
  function isDev() {
    return argv.mode === "development";
  }
  var config = {
    entry: {
      editor: "./src/editor.js",
      script: "./src/script.js",
    },
    output: {
      filename: "[name].js",
      clean: true,
    },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: (chunkData) => {
          return chunkData.chunk.name === "script" ? "style.css" : "[name].css";
        },
      }),
    ],
    devtool: isDev() ? "cheap-module-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: ["@babel/plugin-proposal-class-properties"],
                presets: [
                  "@babel/preset-env",
                  [
                    "@babel/preset-react",
                    {
                      pragma: "wp.element.createElement",
                      pragmaFrag: "wp.element.Fragment",
                      development: isDev(),
                    },
                  ],
                ],
              },
            },
            "eslint-loader",
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    externals: {
      jquery: "jQuery",
      lodash: "lodash",
      "@wordpress/blocks": ["wp", "blocks"],
      "@wordpress/i18n": ["wp", "i18n"],
      "@wordpress/block-editor": ["wp", "blockEditor"],
      "@wordpress/components": ["wp", "components"],
      "@wordpress/element": ["wp", "element"],
    },
  };

  return config;
};
