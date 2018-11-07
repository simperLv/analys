'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

    env: require('./dev.env'),
    //    host: '127.0.0.1',
 host:'0.0.0.0',
    port: process.env.PORT || 8080,
    autoOpenBrowser: false,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/mapi': {
         target: 'http://192.168.0.87:8080/sz_zigong/',
            // target: 'http://192.168.0.41:8080/ysos/',
            // target:'http://192.168.0.34:8084/sz_zigong/',
            target: 'http://ygzi9z.natappfree.cc/sz_zigong/',
            // target:'https://39.108.74.221/svn/szkj/project/sxxProject/sxx-zgjd',

                //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/mapi': '/' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}