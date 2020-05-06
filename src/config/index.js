export const publicPATH = process.env.NODE_ENV === 'production' ?
    '/api/' : //生产环境调用接口
    '' //如果没有配置代理写服务端url
    //基础路径