import { createApp } from "vue";
import store from "@/store/index";
import BootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import router from "./router";
import { clickOutside } from "@/directives/clickOutside";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.directive("click-outside", clickOutside);

app.mount("#app");
