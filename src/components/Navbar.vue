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
      <div class="lg:flex-grow lg:flex lg:justify-center">
        <router-link to="/students" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4 lg:ml-0 lg:mr-4">
          Students
        </router-link>
        <router-link to="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4">
          Projects
        </router-link>
        <router-link to="/companies" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-4">
          Companies
        </router-link>
      </div>
      <!-- div below should be shown to signed-in users only -->
      <div v-show="false" class="lg:flex text-white mx-4 lg:mt-0">
        <div class="mt-4 lg:mt-0">
          <a href="#account">
            Account
          </a>
        </div>
        <div class="mt-4 lg:mt-0">
          <a href="#sign-out" class="lg:ml-4">
            Sign out
          </a>
        </div>
      </div>
      <div v-show="true" class="lg:flex text-white mx-4 lg:mt-0">
        <div class="mt-4 lg:mt-0">
          <router-link to="/profile" class="mr-4">Profile(Student)</router-link>
        </div>
        <div class="mt-4 lg:mt-0">
          <router-link to="/signup/company" class="mr-4">Register(Company)</router-link>
        </div>
        <div class="mt-4 lg:mt-0">
          <router-link to="/signup/student">Register(Student)</router-link>
        </div>
        <div class="mt-4 lg:mt-0">
          <router-link to="/signin" class="lg:ml-4">Sign in</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenuContent() {
      const menuContent = document.querySelector('#menu-content')
      if (menuContent.style.display === 'none') {
        menuContent.style.display = 'block'
        return
      }
      menuContent.style.display = 'none'
    },
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