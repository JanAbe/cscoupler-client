<template>
  <div class="container mx-auto my-4">
    <div>
      <h1 class="text-grey-700 text-3xl text-center border-b-2 border-purple-400">
        {{ company.name }}
      </h1>
    </div>
    
    <div class="mx-4 md:mx-24 lg:mx-64 text-center mt-8">
      <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center">
        Company Description
      </h2>
      <textarea class="w-full p-2 border border-gray-200 rounded text-gray-700 mt-2" v-model="company.description">
      </textarea>
    </div>

    <div class="mx-4 md:mx-24 lg:mx-64 text-center mt-8">
      <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center">
        Internship Information
      </h2>
      <textarea class="w-full p-2 border border-gray-200 rounded text-gray-700 mt-2" v-model="company.information">
      </textarea>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-8 md:mt-16">
      Addresses
    </h2>
    <div class="flex flex-wrap justify-around mx-auto mb-8 mt-2">
      <div v-for="(l, index) in company.locations" :key="index" class="px-4 pt-3 rounded border border-gray-300">
        <div class="flex flex-wrap mx-3 mb-6 md:mb-1 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
              City
            </label>
            <input id="city" v-model="l.city" type="text" placeholder="New York City" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.city }}</p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zipcode">
              Zipcode
            </label>
            <input id="zipcode" v-model="l.zipcode" type="text" placeholder="2819 YO" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.zipcode }}</p>
          </div>
        </div>
        
        <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
              Street
            </label>
            <input id="street" v-model="l.street" type="text" placeholder="Mainstreet" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-6 md:mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.street }}</p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="number">
              Number
            </label>
            <input id="number" v-model="l.number" type="text" placeholder="21 A" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.number }}</p>
          </div>
        </div>
      </div>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-16">
      Projects
    </h2>
    <div class="lg:flex lg:flex-wrap md:ml-40 mx-4 lg:mx-1">
      <div class="lg:flex lg:flex-wrap">
        <div v-for="(p, index) in company.projects" :key="index" class="my-2">
          <div class="min-w-sm self-start border mb-6 rounded-lg bg-white md:ml-8 max-w-sm shadow-xl hover:shadow-none">

            <div class="flex flex-wrap justify-center border-b-2 border-purple-400">
              <p class="p-2 text-xl text-grey-dark mx-4 mt-1 mb-2">
                Internship at {{ company.name }}
              </p>
              <div class="flex justify-end">
                <button @click="deleteProject(p.ID)" class="px-3 my-4 rounded-full text-white text-sm bg-red-300 hover:bg-red-400">Delete</button>
              </div>
            </div>

            <h4 class="pl-2">Description:</h4>
            <div class="flex flex-wrap text-center mb-1">
              <textarea class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg w-full" v-model="p.description">
              </textarea>
            </div>

            <h4 class="pl-2">Duration:</h4>
            <div class="flex flex-wrap text-center mb-1">
              <textarea class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg w-full" v-model="p.duration">
              </textarea>
            </div>

            <h4 class="pl-2">Compensation:</h4>
            <div class="flex flex-wrap text-center mb-1">
              <textarea class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg w-full" v-model="p.compensation">
              </textarea>
            </div>

            <h4 class="pl-2">Desired Skills:</h4>
            <div class="flex flex-wrap justify-center sm:flex-grow">
              <span v-for="(rec, index) in p.recommendations" :key="index"
                class="flex-grow text-center bg-indigo-100 rounded-full px-2 py-1 mb-1 text-sm text-gray-700 mx-2">
                {{ rec }}
              </span> 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center border-t-2 border-purple-400">
      <button @click="update()" class="py-2 px-5 mt-2 text-white rounded-full bg-purple-400 hover:bg-purple-500">Update Company Data</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      validationErrors: {},
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
          description: res.data['description'],
          information: res.data['information'],
          locations: res.data['locations'],
          representatives: res.data['representatives'],
          projects: res.data['projects']
        }
      })
      .catch(err => console.log(err))
    },
    update() {
      // todo: validate newly provided data

      axios.put(`http://localhost:3000/companies/edit/${this.$route.params.companyID}`, JSON.stringify(this.company), { withCredentials: true })
      .then(() => {
        location.reload()
      })
      .catch(err => console.log(err))
    },
    deleteProject(id) {
      axios.delete(`http://localhost:3000/projects/delete/${id}`, { withCredentials: true })
      .then(() => {

      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  @media (min-width: 1024px) {
    .min-w-sm {
      width: 382px;
    }
  }
</style>