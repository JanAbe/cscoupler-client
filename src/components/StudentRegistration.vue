<template>
  <div class="flex h-screen">
    <div class="hidden lg:block lg:w-1/2 lg:bg-purple-600">
      <img src="../assets/svg/online-cv.svg" alt="" class="sm:mx-0 lg:mx-32 lg:mt-8">
    </div>

    <form v-on:submit.prevent="register()" id="student-form" class="w-1/2 mx-auto max-w-lg container md:mt-12 border-2 border-gray-200 rounded-lg px-8 pt-8 pb-4">
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300" id="grid-first-name" type="text" placeholder="Jane">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300" id="grid-last-name" type="text" placeholder="Doe">
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-email">
            Email
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300" id="grid-email" type="email" placeholder="jane@email.com">
        </div>
      </div>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Password
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300" id="grid-password" type="password" placeholder="******************">
          <p class="text-gray-600 leading-tight text-xs italic">It should be atleast 8 characters long, contain numbers, letters and special characters</p>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-university">
            University
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300" id="grid-university" type="text" placeholder="University of X">
        </div>
      </div>

      <div class="flex flex-wrap mb-6 sm:-mx-3">
        <label class="mx-3 text-gray-700 uppercase text-xs font-bold mb-2" for="grid-skills">Select up to 5 of your skills</label>
        <multi-select v-model="skills" :options="skillsOptions" :multiple="true" 
          :close-on-select="false" :clear-on-select="true" :max="5"
          label="name" track-by="name" placeholder="Select your skills" class="mx-3" id="grid-skills">
        </multi-select>
      </div>

      <div class="flex flex-wrap mx-3 sm:-mx-3">
        <div class="w-full px-3 my-4">
          <label v-on:click="selectResume()" class="text-xs font-semibold rounded-full mb-6 px-4 py-3 bg-purple-400 text-white hover:bg-purple-500" role="button" for="resume-upload">
            Upload CV / Resume
          </label>
          <span id="selected-file-name" class="ml-2 text-gray-500">No CV / Resume selected</span>
          <input id="resume-upload" class="hidden" type="file">
        </div>
      </div>

      <div class="flex flex-wrap mt-12 sm:-mx-3 justify-between">
        <button class="text-xs font-semibold rounded-full mx-3 px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">
          Cancel
        </button>
        <button class="text-xs font-semibold rounded-full mx-3 px-4 py-1 bg-purple-500 border border-purple-500 text-white hover:bg-purple-600">
          Register
        </button>
      </div>
    </form>
  </div>
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

    selectResume() {
      const resumeUpload = document.querySelector('#resume-upload')
      resumeUpload.addEventListener('change', (event) => {
        const resumeName = event.target.files[0].name
        document.querySelector('#selected-file-name').textContent = resumeName
      })
    }
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

  .multiselect__tags:hover {
    border-color: #d6bcfa;
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
    background-color: #d6bcfa;
  }

  .multiselect__placeholder {
    padding-left: 5px;
    color: #d3d9e1;
    font-size: 1.2em;
  }
</style>

<style scoped>
  #student-form {
    height: max-content;
  }
</style>