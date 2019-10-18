import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

// main.js is the entry point to vue, here vue gets imported 
// aswell as our main component (App.vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
