<template>
  <div class="flex justify-between h-full">
    <div class="hidden lg:block lg:w-1/2 lg:bg-purple-600">
      <img src="../assets/svg/online-cv.svg" alt="" class="sm:mx-0 lg:mx-32 lg:mt-8">
    </div>

    <form v-on:submit.prevent="register()" id="student-form" class="lg:w-1/2 mx-auto lg:ml-48 lg:mr-auto max-w-lg md:mt-12 lg:mt-24 border-2 border-gray-200 rounded-lg px-2 lg:px-6 pb-4">
      <h2 class="font-semibold text-md pt-2 pb-6 mx-6 sm:mx-0">Student Registration</h2>
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="first-name">
            First Name
          </label>
          <input id="first-name" v-model="firstname" type="text" placeholder="John" 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.firstname }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="last-name">
            Last Name
          </label>
          <input id="last-name" v-model="lastname" type="text" placeholder="Smith"
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.lastname }}</p>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 lg:mt-0">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">
            Email
          </label>
          <input id="email" v-model="email" type="email" placeholder="johnsmith@email.com" 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.email }}</p>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ emailConflictError }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 mb-3 lg:mb-1">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="password">
            Password
          </label>
          <input id="password" v-model="password" type="password" placeholder="******************" 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-gray-600 leading-tight text-xs italic pl-1">It should be atleast 8 characters long, contain numbers, letters and special characters</p>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.password }}</p>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full md:w-1/2 px-3 mb-4 lg:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="status">
            Student status
          </label>
          <multi-select class="mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300" v-model="status" :options="statusOptions" :close-on-select="true" :show-labels="false" label="stat" track-by="stat" placeholder="Select student status"></multi-select>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.status }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="university">
            University
          </label>
          <input id="university" v-model="university" type="text" placeholder="University of ..." 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.university }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <label class="mx-3 text-gray-700 uppercase text-xs font-bold mb-2" for="skills">Select up to 5 of your skills</label>
        <multi-select v-model="skills" :options="skillsOptions" :multiple="true" 
          :close-on-select="false" :clear-on-select="true" :max="5"
          label="skill" track-by="skill" placeholder="Select your skills" class="mx-3" id="skills">
        </multi-select>
        <p class="text-red-600 leading-tight text-xs italic pl-1 mx-3 md:mt-1">{{ validationErrors.skills }}</p>
      </div>

      <div class="flex flex-wrap mx-3 sm:-mx-3">
        <div class="w-full px-3 my-4">
          <label v-on:click="selectResume()" class="text-xs font-semibold rounded-full mb-6 px-4 py-3 bg-purple-400 text-white hover:bg-purple-500" role="button" for="resume-upload">
            Upload CV / Resume
          </label>
          <span id="selected-file-name" class="block pt-2 lg:mt-0 md:inline ml-2 text-gray-500">No CV / Resume selected</span>
          <input id="resume-upload" class="hidden" type="file">
          <p class="text-red-600 leading-tight text-xs italic pl-2 md:mt-3">{{ validationErrors.resume }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mt-8 sm:-mx-3 justify-between">
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
import { validateFirstName,
         validateLastName,
         validateEmail,
         validatePassword, 
         validateStatus,
         validateUniversity,
         validateSkills,
         validateResume } from "../validators";

Vue.component('multi-select', MultiSelect)

export default {
  components: {
    MultiSelect
  },
  data() {
    return {
      validationErrors: {},
      emailConflictError: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      status: '',
      university: '',
      skills: [],
      resume: null,
      skillsOptions: [
        { skill: 'Docker' },
        { skill: 'C#' },
        { skill: 'Java' },
        { skill: 'Spring MVC' },
        { skill: 'Laravel' },
        { skill: 'Go' },
        { skill: 'C++' },
        { skill: 'Unreal Engine' },
        { skill: 'Unit Testing' },
        { skill: 'PHP' }
      ],
      statusOptions: [
        { stat: 'Student' },
        { stat: 'Newly-graduated' }
      ]
    }
  },
  methods: {
    register() {
      const formIsValid = this.validateForm()
      if (!formIsValid) {
        return
      }

      const endpoint = 'http://localhost:3000/signup/student'
      const data = {
        user: {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        },
        university: this.university,
        skills: this.skills.map(({ skill }) => skill),
        status: this.status.stat
      }

      const payload = new FormData()
      payload.append('resume', this.resume)
      payload.append('studentData', JSON.stringify(data))

      axios.post(endpoint, payload)
      .then(() => {
        location.reload()
      })
      .catch(err => {
        switch(err.response.status) {
          case 409:
            this.emailConflictError = 'Submitted email is already taken and bound to an account.'
            break
          case 400:
            console.log('bad request feels badman')
            break
        }
      })
    },

    validateForm() {
      this.validationErrors = {}

      const fname = validateFirstName(this.firstname)
      if (!fname.isValid) {
        this.validationErrors.firstname = fname.error      
      }

      const lname = validateLastName(this.lastname)
      if (!lname.isValid) {
        this.validationErrors.lastname = lname.error      
      }

      const email = validateEmail(this.email)
      if (!email.isValid) {
        this.validationErrors.email = email.error
      }

      const password = validatePassword(this.password)
      if (!password.isValid) {
        this.validationErrors.password = password.error      
      }

      const status = validateStatus(this.status)
      if (!status.isValid) {
        this.validationErrors.status = status.error
      }

      const university = validateUniversity(this.university)
      if (!university.isValid) {
        this.validationErrors.university = university.error
      }

      const skills = validateSkills(this.skills)
      if (!skills.isValid) {
        this.validationErrors.skills = skills.error
      }

      const resume = validateResume(this.resume)
      if (!resume.isValid) {
        this.validationErrors.resume = resume.error
      }

      // check if no errors are present
      if (!Object.entries(this.validationErrors).length) {
        return true // form is valid
      }

      return false
    },

    selectResume() {
      const resumeUpload = document.querySelector('#resume-upload')
      resumeUpload.addEventListener('change', (event) => {
        const file = event.target.files[0]
        this.resume = file
        document.querySelector('#selected-file-name').textContent = file.name
      })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  .multiselect {
    color: #4a5568;
  }

  .multiselect__single {
    padding-bottom: 5px;
  }

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