import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './utils/class-component-hooks'

Vue.config.productionTip = false;

Vue.prototype.$globalVal = "999"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
