const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const commonConfig = require('./webpack.common');
const commonConfig = {}
const packageJson = require('./package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "wallet",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/bootstrap",
          },
          shared: packageJson.dependencies,
        }),

        // new HtmlWebpackPlugin({
        //   template: './public/index.html',
        // }),

      ],
    },
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: "auto",
      },
    }),
  },
};

module.exports = merge(commonConfig, devConfig);