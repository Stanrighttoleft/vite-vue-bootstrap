import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// motion-v

//GSAP(animations)
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// register GSAP (animations)
gsap.registerPlugin(ScrollTrigger);

// import pinia
import { createPinia } from "pinia";
// Import Bootstrap CSS

// Optional: Import Bootstrap JS (for modals, tooltips, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

// Use installed plugins
app.use(createPinia());
app.use(ElementPlus);

app.use(router);

app.mount("#app");
