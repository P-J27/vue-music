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