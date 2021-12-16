const path = require('path')
const BS = require('browser-sync')
// const HttpProxy = require('http-proxy-middleware')
const bs = BS.create()
const SRC_DIR = path.resolve(path.join(__dirname, '../src'))
const DEV_DIR = path.resolve(__dirname)
const INDEX_DIR = path.resolve(__dirname + '/..')

async function init () {
  bs.init({
    server: [ DEV_DIR, INDEX_DIR ],
    port: 8080,
    open: false,
    ui: false,
    // middleware: [{
    //   route: '/api',
    //   handle: HttpProxy.createProxyMiddleware({ 
    //     target: 'https://modurad.otevrenamesta.cz/', 
    //     pathRewrite: {'^/api' : '/omstredni/userman'},
    //     changeOrigin: true
    //   })
    // }]
  })
  bs.watch(DEV_DIR + '/index.html').on('change', bs.reload)
  bs.watch(SRC_DIR + '/**/*.js').on('change', function (filepath, file) {
    bs.reload(filepath)
  })
}
init()