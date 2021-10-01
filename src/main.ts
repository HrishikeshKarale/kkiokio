/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/registerServiceWorker";
//icons
import "@/Less/fontAwesome/fontawesome.less";
//css files
import "@/Less/bootstrap.less";
//api calls
import axios from "axios";
import VueAxios from "vue-axios";
//global emitter
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.booleanTrue = true;
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount("#portfolio");
