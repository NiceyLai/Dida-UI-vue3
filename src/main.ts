import "./lib/dida.scss";
import "./index.scss";
import "github-markdown-css";

import { router } from "./router";
import { createApp } from "vue";
import App from "./App.vue";


const app = createApp(App);
app.use(router);
app.mount("#app");
