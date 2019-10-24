import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Signin from './components/Signin.vue'
import StudentList from './components/StudentList.vue'
import StudentRegistration from './components/StudentRegistration.vue'
import CompanyRegistration from './components/CompanyRegistration.vue'
import RepresentativeRegistration from './components/RepresentativeRegistration.vue'
import '@/assets/css/tailwind.css'

// main.js is the entry point to vue, here vue gets imported 
// aswell as our main component (App.vue). It's also the place
// where our routes are defined.

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/signup/student', component: StudentRegistration },
  { path: '/students', component: StudentList },
  { path: '/signup/company', component: CompanyRegistration },
  { path: '/signup/representatives/invite/:companyID/:invitationID', component: RepresentativeRegistration },
  { path: '/signin', component: Signin }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
