import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Optional: Import Bootstrap JS (for modals, tooltips, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
