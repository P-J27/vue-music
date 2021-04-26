/*
 * @Author: PJ
 * @Date: 2021-04-16 17:29:40
 * @Description: 
 * @Github: https://github.com/P-J27/vue-music
 * @Gitee: https://gitee.com/p_pj/vue-music
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//导入element-ui样式表
import "element-ui/lib/theme-chalk/index.css";
//导入全局样式表
import "./assets/css/base.css";

//导入字体图标样式表
import "./assets/fonts/iconfont.css";
//导入自定义工具类
import utils from "./utils/utils";
Vue.prototype.$utils = utils;

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
