const path = require('path');
const px2rem = require('postcss-px2rem');

module.exports = {

    lintOnSave: false,

    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿750为例， 750 / 10 = 75
                        remUnit: 75.5
                    }),
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
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    }
}
