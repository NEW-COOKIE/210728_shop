const path = require('path');
const px2rem = require('postcss-px2rem');

const postcss = px2rem({
    remUnit: 37.5
})

module.exports = {
    lintOnSave: false,

    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },

    configureWebpack: { //内部编写webpack原生配置
        resolve: {
            extensions: ['.js', '.vue', '.json'], //可省略的后缀名
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    },

    devServer: {
        port: 8080,
        proxy: {
            "/api": {
                target: "http://localhost:4000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'zh_CN',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
}
