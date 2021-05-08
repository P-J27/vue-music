/*
 * @Author: PJ
 * @Date: 2021-04-16 17:40:56
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
 */
module.exports = {
  // lintOnSave: false,
  configureWebpack: {
    resolve: {
      // 后缀 在webpack中有配置
      // extensions:[]
      alias: {
        // '@':'src'
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        plugins: "@/plugins"
      }
    }
  },
  devServer: {
    proxy: { // 解决跨域问题
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
        // target: 'http://localhost:3000/',
        target: 'https://autumnfish.cn/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  
}