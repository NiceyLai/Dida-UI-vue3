import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Nicey from './components/Nicey.vue'

import Nicey2 from "./components/Nicey2.vue";

const history = createWebHashHistory()

const router = createRouter({

  history: history,

  routes: [
    {
      path: "/",
      component: Nicey,
    },
    {
      path: "/xxx",
      component: Nicey2,
    },
    ],
  
});

const app = createApp(App)
app.use(router)
    app.mount('#app')
