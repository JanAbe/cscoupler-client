<template>
  <div id="app">
    <navbar />
    <student-list />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import StudentList from './components/StudentList.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    StudentList,
  },
}
</script>

<style>  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
