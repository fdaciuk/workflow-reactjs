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
  newConfig.module.loaders = newConfig.module.loaders.map((loader) => {
    if (loader.test.test('test.js') && loader.enforce !== 'pre') {
      return Object.assign({}, loader, {
        query: Object.assign({}, loader.query, {
          presets: loader.query.presets.map((preset) => (
            Array.isArray(preset) && preset[0] === 'es2015'
              ? preset[0]
              : preset
          ))
        })
      })
    }
    return loader
  })

  newConfig.resolve = common.resolve

  return newConfig
}
