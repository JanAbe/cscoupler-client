<template>
  <nav class="flex items-center justify-between flex-wrap bg-purple-600 p-2 lg:px-8">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/home" class="font-semibold text-xl tracking-tight">CScoupler</router-link>
    </div>
    <div class="block lg:hidden">
      <button @click="toggleMenuContent()" class="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div id="menu-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <div v-if="this.isLoggedIn === 'true'" class="lg:flex-grow lg:flex lg:justify-center">
        <router-link v-if="this.role === 'representative'" to="/students" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4 lg:ml-0 lg:mr-4">
          Students
        </router-link>
        <router-link to="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4">
          Projects
        </router-link>
        <router-link to="/companies" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4">
          Companies
        </router-link>
      </div>
      
      <div class="lg:flex ml-auto text-white mx-4 lg:mt-0">
        <div v-if="this.role === 'representative'" class="mt-4 lg:mt-0">
          <router-link to="/account" class="mr-4">Profile</router-link>
        </div>
        <div v-if="this.role === 'student'" class="mt-4 lg:mt-0">
          <router-link to="/profile" class="mr-4">Profile</router-link>
        </div>
        <div class="mt-4 lg:mt-0">
          <router-link to="/signup/company" class="mr-4">Register(Company)</router-link>
        </div>
        <div class="mt-4 lg:mt-0">
          <router-link to="/signup/student">Register(Student)</router-link>
        </div>
        <div v-if="this.isLoggedIn !== 'true'" class="mt-4 lg:mt-0">
          <router-link to="/signin" class="lg:ml-4">Sign in</router-link>
        </div>
        <div v-if="this.isLoggedIn === 'true'" class="mt-4 lg:mt-0">
          <a @click="logout()" href="#sign-out" class="lg:ml-4">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { EventBus } from '../eventbus'

export default {
  data() {
    return {
      isLoggedIn: false,
      role: ''
    }
  },
  created() {
    EventBus.$on('loggedIn', () => {
      this.isLoggedIn = localStorage.getItem('isLoggedIn')
      this.role = localStorage.getItem('role')
    })
  },
  methods: {
    toggleMenuContent() {
      const menuContent = document.querySelector('#menu-content')
      if (menuContent.style.display === 'none') {
        menuContent.style.display = 'block'
        return
      }
      menuContent.style.display = 'none'
    },
    logout() {
      this.isLoggedIn = 'false'
      this.role = ''
      localStorage.setItem('isLoggedIn', 'false')
      localStorage.setItem('role', '')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
  a {
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-bottom: 2px solid;
    border-color: white;
  }

  #home:hover {
    border-bottom: 2px solid transparent;
  }
</style>