import Vue from "vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "@/Less/fontAwesome/fontawesome.less";
import "@/Less/bootstrap.less";
import App from "@/App.vue";

Vue.config.productionTip = false;

/*
global eventbus
link: https://medium.com/vuejobs/create-a-global-event-bus-in-vue-js-838a5d9ab03a
emitting an event: this.$globalEventBus.$emit('change-name', this.newName);
catching an event: this.$globalEventBus.$on('change-name', this.changeName)
destroy event: this.$globalEventBus.$off('change-name');

component eventbus:
link: https://blog.logrocket.com/using-event-bus-in-vue-js-to-pass-data-between-components/
initialization; import eventbus from "@/store/eventBus"
emmit an event: eventbus.$emit('changeIt', 'changed header');
catching an event: eventbus.$on('changeIt', (data) => {
                    this.header = data;
                  })
destroy event: eventbus.$off();
link the catch event to lifecycle hook to catch the event better
*/
Vue.prototype.$globalEventBus = new Vue(); // Global event bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
