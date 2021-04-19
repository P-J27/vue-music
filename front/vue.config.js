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