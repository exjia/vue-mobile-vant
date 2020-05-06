import axios from 'axios'
import {
    publicPATH
} from '@/config'
class HttpRequest {
    constructor(publicPath = publicPATH) { //如果传入publicPath用，如果没传用publicPATH
        this.publicPath = publicPath
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            publicPATH: this.publicPath,
            headers: {
                //
            }
        }
        return config
    }
    distroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) { //如果队列中没有请求了关掉loading
            // Spin.hide()
        }
    }
    interceptors(instance, url) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show()
            } //队列里有请求不调用loading，没有的时候调用
            this.queue[url] = true
                // config.headers['Authorization'] = getToken() //token存头部
            return config
        }, error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            this.distroy(url) // 请求完成队列中删掉url
            const {
                data,
                status
            } = res
            return {
                data,
                status
            } //对返回结果进行筛选,只返回data和status
        }, error => {
            this.distroy(url)
            return Promise.reject(error.response.data)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options) //Object.assign合并对象，如果有重复后面覆盖前面
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest