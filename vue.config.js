module.exports = {
  css: {
    sourceMap: true
  },

  pwa: {
    themeColor: "#9F4034",
    name: "helloWorld",
    msTileColor: "#649C4C"
  },
  configureWebpack: {
    // 库文件加载重定向
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios"
      // 'vant': 'vant'
    }
    // resolve: {
    //   alias: {
    //     '@': ''
    //   }
    // }
  },
  baseUrl: "/my-app/",
  outputDir: "dist1",
  assetsDir: "assets",
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,
  devServer: {
    // 设置主机地址
    host: "localhost",
    // 设置默认端口
    port: 8089,
    // 设置代理
    proxy: {
      "/api": {
        // 目标 API 地址
        target: "http://idsw.muheda.com/IDSW",
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: false
      }
    }
  }
};
