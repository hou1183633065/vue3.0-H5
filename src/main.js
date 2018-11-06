import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./globalFun";
import "./registerServiceWorker";

import VueParticles from "vue-particles";
import BaiduMap from "vue-baidu-map";

Vue.config.productionTip = false;

Vue.use(VueParticles);
Vue.use(BaiduMap, {
  ak: "aGf0sLjv7DOonc61fINdATGez2d3O8xB"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
