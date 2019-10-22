<template>
  <div class="mt-8 flex">
    <!-- Turn this into it's own component (StudentFilter or something) -->
    <div>
      <div class="w-1/4 border mb-2 rounded-lg bg-white max-w-sm bg-gray-100 lg:mx-12">
        <h2 class="mx-4">Filter menu</h2>
        <div class="mb-2">
          <div class="flex justify-end pt-2 pr-3">
          </div>
          <div class="sm:flex sm:items-center px-2">
            <div class="text-center py-1 sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-xl leading-tight">
                  test test
                </p>
                <p class="text-sm leading-tight text-grey-dark">Newly graduate of Marmaduke university</p>
                <div class="py-px mx-6 md:mx-0 md:mr-4 border-b-2 border-purple-300 "></div>
              </div>
              <div class="flex flex-wrap justify-around sm:flex-grow">
                <p>jajaja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/4 flex flex-wrap">
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
