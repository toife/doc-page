import { createApp } from "vue";
import App from "./App.vue";
import "./app.scss";
import routes from "./config/routes";
import { createRouter, createWebHashHistory } from "vue-router";
import { createToife } from "@toife/vue";

const app = createApp(App);
// Toife app
const toife = createToife(app, {
  name: 'themes'
});
toife.subscribeAll();
// toife.preventDefault();

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
