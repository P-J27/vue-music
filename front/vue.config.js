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
      // ��׺ ��webpack��������
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
    proxy: { // �����������
      '/api': {
        // �˴���д����Ŀ����Ϊ�� �� /api �滻�� https://autumnfish.cn/
        // target: 'http://localhost:3000/',
        target: 'https://autumnfish.cn/',
        // �������
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  
}