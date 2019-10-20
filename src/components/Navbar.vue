<template>
  <nav class="flex items-center justify-between flex-wrap bg-purple-400 p-2 lg:px-8 lg:mb-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a id="home" href="#home" class="font-semibold text-xl tracking-tight">CScoupler</a>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-semi-bold lg:flex-grow flex justify-center">
        <a href="#students" class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
          Students
        </a>
        <a href="#projects" class="block mt-4 lg:inline-block lg:mt-0 text-white mx-16">
          Projects
        </a>
        <a href="#companies" class="block mt-4 lg:inline-block lg:mt-0 text-white">
          Companies
        </a>
      </div>
      <div class="flex">
        <a href="#login" class="text-white">Sign in</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
  a{
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