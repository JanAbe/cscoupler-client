<template>
  <div class="flex justify-between h-full">
    <div class="hidden lg:block lg:w-1/2 lg:bg-purple-600">
      <img src="../assets/svg/online-cv.svg" alt="" class="sm:mx-0 lg:mx-32 lg:mt-8">
    </div>

    <form v-on:submit.prevent="register()" id="representative-form" class="lg:w-1/2 mx-auto lg:ml-48 lg:mr-auto max-w-lg md:mt-12 lg:mt-24 border-2 border-gray-200 rounded-lg px-2 lg:px-6 pb-4">
      <div class="px-2 lg:px-6">
        <h2 class="font-semibold text-md pt-2 mx-6 sm:mx-0">Representative Registration</h2>
        <p class="text-red-600 leading-tight text-xs italic pl-px">{{ invalidInvitationError }}</p>
        <p class="text-red-600 leading-tight text-xs italic pl-px">{{ invitationError }}</p>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3 pt-6">
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
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div class="w-full lg:mt-0">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="jobTitle">
                Job Title
              </label>
              <input id="jobTitle" v-model="jobTitle" type="text" placeholder="Recruiter" 
                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
              <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.jobTitle }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="company">
              Company
            </label>
            <input readonly v-model="company" id="company" type="text" placeholder="Fluugle"
              class="cursor-default bg-gray-200 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
              <p class="text-red-600 leading-tight text-xs italic pl-1">{{ companyError }}</p>
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
        <div class="flex flex-wrap mt-8 sm:-mx-3 justify-between">
          <button class="text-xs font-semibold rounded-full mx-3 px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">
            Cancel
          </button>
          <button class="text-xs font-semibold rounded-full mx-3 px-4 py-1 bg-purple-500 border border-purple-500 text-white hover:bg-purple-600">
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { validateFirstName,
         validateLastName,
         validateEmail,
         validatePassword,
         validateJobTitle } from "../validators";

export default {
  data() {
    return {
      validationErrors: {},
      emailConflictError: '',
      invitationError: '',
      invalidInvitationError: '',
      companyError: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      jobTitle: '',
      company: ''
    }
  },
  created() {
    this.fetchCompanyName()
  },
  methods: {
    register() {
      const formIsValid = this.validateForm()
      if (!formIsValid) {
        return
      }

      const companyID = this.$route.params.companyID
      const invitationID = this.$route.params.invitationID

      const endpoint = `http://localhost:3000/signup/representatives/invite/${companyID}/${invitationID}`
      const data = {
        jobTitle: this.jobTitle,
        user: {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }
      }

      axios.post(endpoint, JSON.stringify(data))
      .then(() => {
        location.reload()
      })
      .catch(err => {
        switch(err.response.status) {
          case 409:
            this.emailConflictError = 'Submitted email is already taken'
            break
          case 404:
            this.invitationError = 'Invitation not found'
            break
          case 400:
            this.invalidInvitationError = 'Invitation has already been used or has already expired.'
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
      
      const jobTitle = validateJobTitle(this.jobTitle)
      if (!jobTitle.isValid) {
        this.validationErrors.jobTitle = jobTitle.error      
      }

      const email = validateEmail(this.email)
      if (!email.isValid) {
        this.validationErrors.email = email.error
      }

      const password = validatePassword(this.password)
      if (!password.isValid) {
        this.validationErrors.password = password.error      
      }

      // check if no errors are present
      if (!Object.entries(this.validationErrors).length) {
        return true // form is valid
      }

      return false
    },
    fetchCompanyName() {
      console.log('jaja')
      axios.get(`http://localhost:3000/companies/name/${this.$route.params.companyID}`)
      .then(res => {
        this.company = res.data
      })
      .catch(err => {
        console.log(err)
        switch(err.response.status) {
          case 404:
            console.log('errrrro')
            this.companyError = 'The company you were invited to doesn\'t exist'
            break
          default:
            console.log('oh no')
        }
      })
    }
  }
}
</script>

<style scoped>
  #representative-form {
    height: max-content;
  }
</style>