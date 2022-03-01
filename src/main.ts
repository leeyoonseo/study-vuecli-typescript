import { createApp } from "vue";
// import { createPinia } from "pinia";
import store from "@/store/index";
import App from "./App.vue";
import router from "./router";
import { clickOutside } from "@/directives/clickOutside";

const app = createApp(App);
// .use(createPinia())
app.use(store);
app.use(router);

app.directive("click-outside", clickOutside);

app.mount("#app");
