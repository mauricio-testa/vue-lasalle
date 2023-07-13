import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'

import Aula1 from './components/Aula1.vue'
import Aula2 from './components/Aula2.vue'
import Home from './components/Home.vue'

const routes = [
  { path: '/aula1', component: Aula1 },
  { path: '/aula2', component: Aula2 },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
