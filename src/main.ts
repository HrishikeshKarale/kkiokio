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
//global emitter
import emitter from './eventBus';

const app = createApp(App);
app.config.globalProperties.booleanTrue = true;
app.use(router)
	.use(store)
	.provide('$store', store)
	.provide('$axios', axios)
	.provide('$true', true)
	.provide('$emitter', emitter)
app.mount("#portfolio");
