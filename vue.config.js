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
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    }
}
