<template>
  <div class="mt-8 flex">
    <!-- Turn this into it's own component (StudentFilter or something) -->
    <div class="flex-none w-1/3 md:max-w-xs text-gray-700 lg:mr-16 ml-10">
      <div class="flex justify-center">
        <div class="border border-gray-200 rounded fixed mt-16 md:ml-8">
          <h2 class="bg-pink-200 text-center font-semibold text-gray-700 py-3">
            Filter menu
          </h2>
          <hr class="mb-4">

          <div class="mb-4 px-4 py-2">
            <input v-on:click="!markedToggle" v-model="markedToggle" type="checkbox" class="mr-3">
            Show marked students only
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <!-- <multi-select :options="['1', '2', '3']" :multiple="true" 
              :close-on-select="false" :clear-on-select="true" :show-labels="false"
              label="skill" track-by="skill" placeholder="Filter on skills" id="skills">
            </multi-select> -->
            <input class="border-b-2 border-pink-200 text-gray-600 p-2 w-full" type="text" placeholder="Docker, Java, Spring ...">
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input class="border-b-2 border-pink-200 text-gray-600 p-2 w-full" type="text" placeholder="University of Oklahoma...">
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input class="border-b-2 border-pink-200 text-gray-600 p-2 w-full" type="text" placeholder="New York City ...">
          </div>
        </div>
      </div>
    </div>
    <div v-if="markedToggle" class="flex flex-wrap w-2/3 ">
      <student-card v-for="student in markedStudents" v-bind:student="student" :key="student.id" />
    </div>
    <div v-if="!markedToggle" class="flex flex-wrap w-2/3 ">
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
      students: [],
      markedToggle: false
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
  }, 
  computed: {
    markedStudents: function() {
      return this.students.filter(s => s.marked)
    }
  }
}
</script>

<style scoped>

</style>
