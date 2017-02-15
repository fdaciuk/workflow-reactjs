'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use
  })

  newConfig.module.loaders = newConfig.module.loaders.concat(preloaders)
  newConfig.resolve = common.resolve

  return newConfig
}
