<template>
  <div id="app">
    <student-list v-bind:students="students"/>
  </div>
</template>

<script>
import StudentList from './components/StudentList.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    StudentList
  },
  data() {
    return {
      students: []
    }
  },
  created() {
    axios.get('http://localhost:3000/students/all')
    .then(res => {
      this.students = res.data
    })
    .catch(err => console.log(err))
  }
}
</script>

<style>  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
