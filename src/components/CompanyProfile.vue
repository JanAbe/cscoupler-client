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
      <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center">
        Internship Information
      </h2>
      <textarea class="w-full p-2 border border-gray-200 rounded text-gray-700 mt-2">
        During the duration of an internship, interns own their projects from start to finish. 
        At that time, Fluugle teams provide feedback on the intern’s overall performance. At the start
        you get assigned one mentor who will assist you during your internship.
      </textarea>
    </div>

    <h2 class="block uppercase tracking-wide text-gray-700 text-sm font-bold text-center mt-8 md:mt-16">
      Addresses
    </h2>
    <div class="flex flex-wrap justify-around mx-auto mb-8 border border-gray-300 mt-2">
      <div v-for="(l, index) in company.locations" :key="index" class="px-4 py-2">
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
          <div class="self-start border mb-6 rounded-lg bg-white md:ml-8 max-w-sm shadow-xl hover:shadow-none">
            <div class="sm:flex sm:items-center">
              <div class="text-center py-1 sm:text-left sm:flex-grow">
                <div class="mb-1 border-b-2 border-purple-400 pb-2">
                  <p class="text-xl text-center leading-tight">
                    {{ company.name }} 
                  </p>
                </div>
              </div>
            </div>
            
            <h4 class="pl-3">Company description:</h4>
            <div class="flex flex-wrap text-center mb-1">
              <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
                {{ company.description }}
              </p>
            </div>

            <h4 class="pl-3">Internship info:</h4>
            <div class="flex flex-wrap text-center mb-1">
              <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
                {{ company.information }}
              </p>
            </div>
          </div>
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
        console.log(this.company)
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>