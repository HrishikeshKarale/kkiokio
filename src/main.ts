import Vue from "vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/Less/fontAwesome/fontawesome.less";
import "@/Less/bootstrap.less";
import App from "@/App.vue";

Vue.config.productionTip = false;

/*
link: https://medium.com/vuejobs/create-a-global-event-bus-in-vue-js-838a5d9ab03a

emitting an event: this.$eventHub.$emit('change-name', this.newName);

catching an event: this.$eventHub.$on('change-name', this.changeName)

destroy event: this.$eventHub.$off('change-name');
*/
Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
