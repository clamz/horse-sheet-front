'use strict'
const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')

base.devtool = '#source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

// push loader for .css file
base.module.loaders.push(
  {
    test: /\.css$/,
    loader: _.cssLoader
  }
)

module.exports = base
