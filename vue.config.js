const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/' : '/'
module.exports = {
    lintOnSave: false,
    publicPath: PUBLIC_PATH,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) //@代表src路径
            .set('_c', resolve('src/components')) //_c代表src/components路径
    },
    //打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        proxy: {
            // 配置跨域
            '/kpi': {
                target: 'http://oa.chinahuian.cn/',
                // target: 'http://10.0.0.16:8001/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/kpi': '/kpi'
                }
            }
        }
    }
}