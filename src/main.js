import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import StudentList from './components/StudentList.vue'
import StudentRegistration from './components/StudentRegistration.vue'
import '@/assets/css/tailwind.css'

// main.js is the entry point to vue, here vue gets imported 
// aswell as our main component (App.vue)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/students/register', component: StudentRegistration },
  { path: '/students', component: StudentList }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
