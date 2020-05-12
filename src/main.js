import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Signin from './components/Signin.vue'
import StudentList from './components/StudentList.vue'
import ProjectList from './components/ProjectList.vue'
import CompanyList from './components/CompanyList.vue'
import StudentProfile from './components/StudentProfile.vue'
import StudentAccount from './components/StudentAccount.vue'
import CompanyAccount from './components/CompanyAccount.vue'
import CompanyProfile from './components/CompanyProfile.vue'
import StudentRegistration from './components/StudentRegistration.vue'
import CompanyRegistration from './components/CompanyRegistration.vue'
import RepresentativeProfile from './components/RepresentativeProfile.vue'
import RepresentativeRegistration from './components/RepresentativeRegistration.vue'
import '@/assets/css/tailwind.css'

// main.js is the entry point to vue, here vue gets imported 
// aswell as our main component (App.vue). It's also the place
// where our routes are defined.

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/signup/student', component: StudentRegistration },
  { path: '/students', component: StudentList },
  { path: '/signup/company', component: CompanyRegistration },
  { path: '/signup/representatives/invite/:companyID/:invitationID', component: RepresentativeRegistration },
  { path: '/signin', component: Signin },
  { path: '/profile', component: StudentProfile },
  { path: '/projects', component: ProjectList },
  { path: '/students/:studentID/profile', component: StudentAccount }, 
  { path: '/companies', component: CompanyList },
  { path: '/companies/:companyID/profile', component: CompanyAccount },
  { path: '/account', component: RepresentativeProfile },
  { path: '/companies/:companyID/account', component: CompanyProfile }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
