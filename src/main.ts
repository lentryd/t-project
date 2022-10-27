import { createApp } from "vue";
import App from "./App.vue";

import router from "@/plugins/router";
import component from "@/plugins/component";

createApp(App).use(router).use(component).mount("#app");
