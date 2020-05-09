import Vue from "vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/Less/fontAwesome/fontawesome.less";
import "@/Less/bootstrap.less";
import App from "@/App.vue";
// import EventBus from "./store/eventBus";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // EventBus,
  render: h => h(App)
}).$mount("#app");
