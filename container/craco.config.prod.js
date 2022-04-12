const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const commonConfig = require('./webpack.common');
const commonConfig = {}
const packageJson = require('./package.json');
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  webpack: {
    output: {
      mode: 'production',
      filename: '[name].[contenthash].js',
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            auth: `auth@${domain}/auth/remoteEntry.js`,
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

module.exports = merge(commonConfig, prodConfig);