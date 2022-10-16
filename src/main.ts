import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'



const app = createApp(App)
app.use(router)
    app.mount('#app')
