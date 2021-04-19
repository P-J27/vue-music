import axios from 'axios'
export function request(config) {
    //创建axios 实例
    const ac = axios.create({
        baseURL: '/api',
        timeout: 10000
    })
    // 请求拦截
    ac.interceptors.request.use(reconfig => {
        return reconfig
    })
    // 响应拦截
    ac.interceptors.response.use(res => {
        return res.data
    })
    // 返回请求实体
    return ac(config)
}