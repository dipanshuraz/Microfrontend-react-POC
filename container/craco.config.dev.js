const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const commonConfig = require('./webpack.common');
const commonConfig = {}
const packageJson = require('./package.json');

const devConfig = {
  webpack: {
    mode: 'development',
    devServer: {
      port: 3000,
      historyApiFallback: {
        index: 'index.html',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            wallet: "wallet@http://localhost:3001/remoteEntry.js",
            exchange: "exchange@http://localhost:3002/remoteEntry.js",
          },
          shared: packageJson.dependencies
        }),

        // new HtmlWebpackPlugin({
        //   template: './public/index.html',
        // }),

      ],
    },
  },
  configure: (webpackConfig) => ({
    ...webpackConfig,
    output: {
      ...webpackConfig.output,
      publicPath: "auto",
    },
  }),
};

module.exports = merge(commonConfig, devConfig);