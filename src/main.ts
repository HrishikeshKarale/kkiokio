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
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount("#portfolio");
