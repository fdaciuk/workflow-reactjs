'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use
  })

  newConfig.module.preLoaders = [preloaders]
  newConfig.resolve = common.resolve

  newConfig.module.loaders = newConfig.module.loaders.map((loader) => {
    if (loader.test.test('test.js')) {
      return Object.assign({}, loader, {
        query: Object.assign({}, loader.query, {
          presets: loader.query.presets.map((preset) => {
            console.log(preset)
            if (Array.isArray(preset) && preset[0] === 'es2015') {
              return preset[0]
            }
            return preset
          })
        })
      })
    }
    return loader
  })

  return newConfig
}
