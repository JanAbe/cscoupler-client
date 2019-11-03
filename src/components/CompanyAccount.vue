<template>
  <div class="container mx-auto my-4">
    <div>
      <h1 class="text-grey-700 text-3xl text-center border-b-2 border-purple-400">
        {{ company.name }}
      </h1>
    </div>

    <div>
      <p class="text-center">
        {{ company.information }}
      </p>
    </div>

    <div class="mx-4 md:mx-24 lg:mx-64 text-center mt-8">
      <p>
        During the duration of an internship, interns own their projects from start to finish. 
        At that time, Fluugle teams provide feedback on the intern’s overall performance. At the start
        you get assigned one mentor who will assist you during your internship.
      </p>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-8 md:mt-16">
      Addresses
    </h2>
    <div class="flex flex-wrap justify-center mx-auto mb-8">
      <div v-for="(l, index) in company.locations" :key="index" class="px-4 py-2">
        <div class="flex mx-3 mb-1 sm:-mx-3">
          <div class="w-full px-3 lg:mb-1">
            <p class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none border-purple-300 border-purple-300">
              {{ l.street }} {{ l.number }} <br>
              {{ l.zipcode }}, {{ l.city}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-8">
      Representatives
    </h2>
    <div class="md:flex md:flex-wrap md:justify-center">
      <div v-for="(r, index) in company.representatives" :key="index" class="md:flex bg-white rounded-lg p-6 pl-4 mx-4 shadow-lg mt-2 border border-gray-300">
        <img class="h-16 w-16 md:h-20 md:w-20 rounded-full mx-auto" src="../assets/avatar.png" alt="">
        <div class="text-center md:text-left">
          <h2 class="text-lg">
            {{ r.user.firstname }} {{ r.user.lastname }}
          </h2>
          <div class="text-purple-500"> {{ r.jobTitle }} </div>
          <div class="text-gray-600"> {{ r.user.email }}</div>
        </div>
      </div>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-16">
      Projects
    </h2>
    <div class="lg:flex lg:flex-wrap md:ml-40 mx-4 lg:mx-1">
      <div class="lg:flex lg:flex-wrap">
        <project-card v-for="(p, index) in company.projects" v-bind:project="p" :key="index" class="my-2" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard'

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      company: {}
    }
  },
  created() {
    this.fetchCompany()
  },
  methods: {
    fetchCompany() {
      axios.get(`http://localhost:3000/companies/${this.$route.params.companyID}`, { withCredentials: true })
      .then(res => {
        this.company = {
          id: res.data['id'],
          name: res.data['name'],
          information: res.data['information'],
          locations: res.data['locations'],
          representatives: res.data['representatives'],
          projects: res.data['projects']
        }
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>