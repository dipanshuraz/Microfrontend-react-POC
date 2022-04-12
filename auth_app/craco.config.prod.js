const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const commonConfig = require('./webpack.common');
const commonConfig = {}
const packageJson = require('./package.json');

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "auth",
          exposes: {
            "./App": "./src/App",
          },
          filename: "remoteEntry.js",
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