<template>
  <div class="lg:flex lg:justify-center">
    <div class="lg:w-1/2 lg:mx-6">
      <div class="text-center border-b-2 border-purple-200">
        <h2 class="text-2xl pt-4">{{ student.firstname }} {{ student.lastname }}'s Profile</h2>
        <p class="leading-tight pb-2">{{ student.status }} at {{ student.university }}</p>
      </div>

      <h2 class="text-lg pt-1 text-center my-4">Skills include:</h2>
      <div class="flex flex-wrap justify-center border-b-2 border-purple-200">
        <div v-for="(s, index) in student.skills" :key="index"
          class="bg-purple-400 text-center text-white text-sm py-1 px-2 lg:mt-1 lg:mb-6 lg:mx-3 rounded-full mb-4 mx-2">
          {{ s }}
        </div>
      </div>

      <div class="mx-6">
        <h2 v-if="student.experiences.length !== 0" class="text-lg pt-4 lg:ml-32">Experiences:</h2>
        <div v-for="(exp, index) in student.experiences" :key="index"
          class="text-sm text-gray-700 text-justify p-2 my-3 lg:mx-40 bg-purple-100 rounded-lg">
          {{ exp }}
        </div>
      </div>
      
      <div class="mx-6">
        <h2 v-if="student.wishes.length !== 0" class="text-lg pt-4 lg:ml-32">Wishes:</h2>
        <div class="text-sm text-gray-700 text-justify p-2 my-2 lg:mx-40 bg-purple-100 rounded-lg">
          {{ student.wishes }}
        </div>
      </div>
    </div>
    <div class="lg:w-1/2">
      <div class="text-center">
        <h2 class="text-2xl pt-4 mb-4">{{ student.firstname }} {{ student.lastname }}'s CV</h2>
        <iframe src="https://www.bellevue.edu/student-support/career-services/pdfs/resume-samples.pdf" type="application/pdf" width="100%" height="900px"> </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      student: {}
    }
  },
  created() {
    this.fetchStudent()
  },
  methods: {
    fetchStudent() {
      axios.get(`http://localhost:3000/students/${this.$route.params.studentID}`, { withCredentials: true })
      .then(res => {
          const id = res.data['id']
          const uni = res.data['university']
          const skills = res.data['skills']
          const experiences = res.data['experiences']
          const shortExperiences = res.data['shortExperiences']
          const stat = res.data['status']
          const resume = res.data['resume']
          const email = res.data['user']['email']
          const fname = res.data['user']['firstname']
          const lname = res.data['user']['lastname']
          const wishes = res.data['wishes']
          const student = {
            id: id,
            university: uni,
            skills: skills,
            experiences: experiences,
            shortExperiences: shortExperiences,
            status: stat,
            resume: resume,
            email: email,
            firstname: fname,
            lastname: lname,
            wishes: wishes,
            marked: false
          }
          this.student = student
        })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>