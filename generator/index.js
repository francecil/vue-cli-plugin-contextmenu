module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    dependencies: {
      '@gahing/vcontextmenu': '^1.0.0'
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/contextmenu.js'`)

  api.render({
    './src/plugins/contextmenu.js': './templates/plugins/contextmenu.js',
  })
}