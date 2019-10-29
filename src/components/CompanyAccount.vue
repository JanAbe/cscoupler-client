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

    <div class="mt-4">
      <p class="">
        During the duration of an internship, interns own their projects from start to finish. 
        At that time, Fluugle teams provide feedback on the intern’s overall performance. At the start
        you get assigned one mentor who will assist you during your internship.
      </p>
    </div>

    <div class="flex justify-between">
      <div v-for="(l, index) in company.locations" :key="index" class="my-2 p-4">
        <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City
            </h2>
            <p class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none border-purple-300 border-purple-300">
              {{ l.city}}
            </p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Zipcode
            </h2>
            <p class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none border-purple-300 border-purple-300">
              {{ l.zipcode }}
            </p>
          </div>
        </div>
        
        <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Street
            </h2>
            <p class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none border-purple-300 border-purple-300">
              {{ l.street }}
            </p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <h2 class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Number
            </h2>
            <p class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none border-purple-300 border-purple-300">
              {{ l.number }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <h3>Projects</h3>
      <div class="w-1/2 text-center">
        <div v-for="(p, index) in company.projects" :key="index" class="my-2">
          {{ p.description }}
        </div>
      </div>

      <h3>Representatives</h3>
      <div class="w-1/2 text-center">
        <div v-for="(r, index) in company.representatives" :key="index" class="my-2">
          {{ r.user.firstname }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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