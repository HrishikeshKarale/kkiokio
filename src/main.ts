/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/registerServiceWorker";
import "@/Less/fontAwesome/fontawesome.less";
import "@/Less/bootstrap.less";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .mount("#portfolio");
