import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './index.css'

// Import components
import Todos from './components/Todos.vue'
import IndividualTodo from './components/IndividualTodo.vue'
import ErrorTest from './components/ErrorTest.vue'
import Error404 from './components/Error404.vue'

// Define routes
const routes= [
  { path: '/', component: Todos },
  { path: '/todo/:id', component: IndividualTodo },
  { path: '/test-error', component: ErrorTest },
  { path: '/:pathMatch(.*)*', component: Error404 }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount('#app')