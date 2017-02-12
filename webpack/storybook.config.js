'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.use = newConfig.module.loaders.concat(common.standardPreLoader)
  newConfig.resolve = common.resolve

  return newConfig
}
