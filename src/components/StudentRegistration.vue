<template>
  <form v-on:submit.stop="register()" class="w-full max-w-lg container mx-auto md:mt-12 lg:mt-24">

    <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          First Name
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-300" id="grid-first-name" type="text" placeholder="Jane">
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-300" id="grid-last-name" type="text" placeholder="Doe">
      </div>
    </div>
    
    <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
      <div class="w-full px-3">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-email">
          Email
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-300" id="grid-email" type="email" placeholder="jane@email.com">
      </div>
    </div>

    <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
      <div class="w-full px-3">
        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Password
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-purple-300" id="grid-password" type="password" placeholder="******************">
        <p class="text-gray-600 leading-tight text-xs italic">It should be atleast 8 characters long, contain numbers, letters and special characters</p>
      </div>
    </div>
    
    <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          University
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-300" id="grid-password" type="text" placeholder="University of X">
      </div>
    </div>

    <div class="flex flex-wrap mb-6 sm:-mx-3">
      <label class="mx-3 text-gray-700 uppercase text-xs font-bold">Select your skills</label>
      <multi-select v-model="skills" :options="skillsOptions" :multiple="true" 
        :close-on-select="false" :clear-on-select="true" 
        label="name" track-by="name" placeholder="select skills" class="mx-3">
      </multi-select>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import MultiSelect from 'vue-multiselect'

Vue.component('multi-select', MultiSelect)

export default {
  components: {
    MultiSelect
  },
  data() {
    return {
      skills: [],
      skillsOptions: [
        { name: 'Docker', language: 'JavaScript' },
        { name: 'C#', language: 'JavaScript' },
        { name: 'Java', language: 'Ruby' },
        { name: 'Spring MVC', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Go', language: 'PHP' },
        { name: 'C++', language: 'PHP' },
        { name: 'Unreal Engine', language: 'PHP' },
        { name: 'Unit Testing', language: 'PHP' },
        { name: 'PHP', language: 'Elixir' }
      ]
    }
  },
  methods: {
    register() {
      const endpoint = 'http://localhost:3000/signup/student'

      const payload = new FormData()
      payload.append('resume', '')
      payload.append('studentData', JSON.stringify(''))

      axios.post(endpoint, payload)
    },
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  .multiselect__tag {
    border-radius: 80px;
    background: #d6bcfa;
  }

  .multiselect__tags {
    border-color: #edf2f7;
    padding-top: 10px;
  }

  .multiselect__option--highlight, .multiselect__option--highlight:after {
    border-radius: 20px;
    background: #d6bcfa;
  }

  .multiselect__option--selected {
    border-radius: 20px;
  }

  .multiselect__tag-icon {
    font-weight: 300;
  }

  .multiselect__tag-icon:hover {
    background-color: none;
  }
</style>

<style scoped>
</style>