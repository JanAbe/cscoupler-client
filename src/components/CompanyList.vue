<template>
  <div class="mt-4 md:mt-8 md:flex">
    <div class="flex-none text-gray-700 mb-6 mx-6 md:w-1/3 md:max-w-xs lg:mr-16 md:ml-10">
      <div class="flex justify-center">
        <div class="border border-gray-300 rounded md:fixed md:mt-16 md:ml-8">
          <h2 class="bg-purple-400 text-center font-semibold text-white py-3">
            Filter menu
          </h2>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input v-model="cityQuery" class="border-b-2 border-purple-300 text-gray-600 p-2 w-full" type="text" placeholder="Search by city">
          </div>
          <hr>

          <div class="flex justify-center">
            <button @click="clearAllFilters()" class="bg-purple-400 rounded p-1 text-sm font-semibold w-full mx-6 my-2 hover:bg-purple-500 text-white">
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mx-6 md:w-2/3 ">
      <company-card v-for="company in filteredCompanies" v-bind:company="company" :key="company.id" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CompanyCard from './CompanyCard'

export default {
  name: 'CompanyList',
  components: {
    CompanyCard
  },
  data() {
    return {
      companies: [],
      cityQuery: ''
    }
  },
  created() {
    this.fetchAllCompanies()
  },
  methods: {
    fetchAllCompanies() {
      axios.get('http://localhost:3000/companies/all', { withCredentials: true })
      .then(res => {
        res.data.forEach(c => {
          const id = c['id']
          const name = c['name']
          const information = c['information']
          const description = c['description']
          const locations = c['locations']
          const representatives = c['representatives']
          const projects = c['projects'] === null ? [] : c['projects']

          const company = {
            id: id,
            name: name,
            information: information,
            description: description,
            locations: locations,
            representatives: representatives,
            projects: projects
          }
          this.companies.push(company)
        })
      })
      .catch(err => console.log(err))
    },
    clearAllFilters() {
      this.cityQuery = ''
    }
  },
  computed: {
    filteredCompanies: function() {
      if (this.cityQuery === '') {
        return this.companies
      }

      const filteredOnCity = this.companies.filter(c => {
        return c.locations.map(l => l['city'].toLowerCase()).includes(this.cityQuery.toLowerCase())
      })

      return filteredOnCity
    }
  }
}
</script>

<style scoped>

</style>