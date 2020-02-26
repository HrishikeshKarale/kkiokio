import Vue from "vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/Less/fontAwesome/fontawesome.less";
import "@/Less/bootstrap.less";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
