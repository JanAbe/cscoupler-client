<template>
  <div id="app">
    <navbar />
    <student-registration />
    <!-- <student-list /> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import StudentList from './components/StudentList.vue'
import StudentRegistration from './components/StudentRegistration.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    // StudentList,
    StudentRegistration
  },
}
</script>

<style>  
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: inherit;
}
</style>
