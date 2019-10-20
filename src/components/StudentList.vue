<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <student-card v-for="student in students" v-bind:student="student" :key="student.id" />
    </div>
  </div>
</template>

<script>
import StudentCard from './StudentCard'
import axios from 'axios'

export default {
  name: 'StudentList',
  components: {
    StudentCard
  },
  data() {
    return {
      students: []
    }
  },
  created() {
    this.fetchAllStudents()
  },
  methods: {
    fetchAllStudents() {
      axios.get('http://localhost:3000/students/all')
      .then(res => {
        res.data.forEach(s => {
          const id = s['id']
          const uni = s['university']
          const skills = s['skills']
          const exp = s['experience']
          const stat = s['status']
          const resume = s['resume']
          const email = s['user']['email']
          const fname = s['user']['firstname']
          const lname = s['user']['lastname']
          const student = {
            id: id,
            university: uni,
            skills: skills,
            experience: exp,
            status: stat,
            resume: resume,
            email: email,
            firstname: fname,
            lastname: lname,
            marked: false
          }
          this.students.push(student)
        })
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
