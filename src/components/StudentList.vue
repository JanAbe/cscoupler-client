<template>
  <div class="mt-8 flex">
    <!-- Turn this into it's own component (StudentFilter or something, or not) -->
    <div class="flex-none w-1/3 md:max-w-xs text-gray-700 lg:mr-16 ml-10">
      <div class="flex justify-center">
        <div class="border border-gray-200 rounded fixed mt-16 md:ml-8">
          <h2 class="bg-purple-400 text-center font-semibold text-white py-3">
            Filter menu
          </h2>
          <hr class="mb-4">

          <div v-on:click="toggle()" class="mb-4 px-4 py-2 mx-6 bg-purple-400 hover:bg-purple-500 rounded-full cursor-pointer text-center">
            <input hidden v-bind:checked="markedToggle" type="checkbox" class="mr-3">
            <p v-if="!markedToggle" class="text-sm font-semibold text-white">Show marked students</p>
            <p v-if="markedToggle" class="text-sm font-semibold text-white">Show all students</p>
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input v-model="skillQuery" class="border-b-2 border-purple-300 text-gray-600 p-2 w-full" name="searchSkill" type="text" placeholder="Search for skills, e.g Rust">
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input v-model="uniQuery" class="border-b-2 border-purple-300 text-gray-600 p-2 w-full" type="text" placeholder="Search for a university">
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input class="border-b-2 border-purple-300 text-gray-600 p-2 w-full" type="text" placeholder="Search for a city">
          </div>
          <hr>

          <div class="flex justify-center border border-transparent">
            <button class="bg-purple-400 rounded-full p-1 text-sm font-semibold w-full mx-6 my-2 hover:bg-purple-500 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="markedToggle" class="flex flex-wrap w-2/3 ">
      <student-card v-for="student in markedStudents" v-bind:student="student" :key="student.id" />
    </div>
    <div v-else-if="!markedToggle" class="flex flex-wrap w-2/3 ">
      <student-card v-for="student in filteredStudents" v-bind:student="student" :key="student.id" />
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
      students: [],
      markedToggle: false,
      filterOn: false,
      skillQuery: '',
      uniQuery: ''
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
    },
    // toggle toggles between showing all students
    // and showing only the marked ones
    toggle() {
      this.markedToggle = !this.markedToggle
    },
  }, 
  computed: {
    markedStudents: function() {
      return this.students.filter(s => s.marked)
    },
    filteredStudents: function() {
      if (this.skillQuery === '' && this.uniQuery === '') {
        return this.students
      }
       
      const filteredOnSkills = this.students.filter(s => {
        return s.skills.map(s => s.toLowerCase()).includes(this.skillQuery.toLowerCase())
      })

      let filteredOnUniversity = []
      if (!filteredOnSkills.length) {
        filteredOnUniversity = this.students.filter(s => s.university.toLowerCase().includes(this.uniQuery.toLowerCase()))
      } else {
        filteredOnUniversity = filteredOnSkills.filter(s => s.university.toLowerCase().includes(this.uniQuery.toLowerCase()))
      }

      return filteredOnUniversity
    }
  }
}
</script>

<style scoped>

</style>
