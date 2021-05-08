/*
 * @Author: PJ
 * @Date: 2021-04-19 09:23:11
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
 */
import axios from 'axios'
export function request(config) {
    //创建axios 实例
    const ac = axios.create({
        baseURL: '/api',
        // baseURL: 'https://autumnfish.cn/',
        timeout: 100000
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