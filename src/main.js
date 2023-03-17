import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import router from './router'

createApp(App).use(router).mount('#app')

// const app = createApp(App)
// app.mount("#app")