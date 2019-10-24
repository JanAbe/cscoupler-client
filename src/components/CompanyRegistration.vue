<template>
  <div class="flex justify-between h-full">
    <div class="hidden lg:block lg:w-1/2">
      <img src="../assets/connect.png" alt="" class="sm:mx-0">
    </div>

    <form v-on:submit.prevent="register()" id="company-form" class="lg:w-1/2 mx-auto lg:ml-32 lg:mr-auto max-w-lg md:mt-6 border-2 border-gray-200 rounded-lg pb-4">
      <h2 class="font-semibold text-md pt-2 pb-6 px-2 lg:px-6 mx-6 sm:mx-0">Company Registration</h2>

      <div class="px-2 lg:px-6">
        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 mb-3 lg:mb-1">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="name">
              Name
            </label>
            <input id="name" v-model="name" type="text" placeholder="Company name..." 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.name }}</p>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ nameConflictError }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="information">
              Information
            </label>
            <input id="information" v-model="information" type="text" placeholder="We specialize in cybersecurity software" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.information }}</p>
          </div>
        </div>
        
        <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
              City
            </label>
            <input id="city" v-model="city" type="text" placeholder="New York City" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.city }}</p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zipcode">
              Zipcode
            </label>
            <input id="zipcode" v-model="zipcode" type="text" placeholder="2819 YO" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.zipcode }}</p>
          </div>
        </div>
        
        <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
          <div class="w-full md:w-2/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="street">
              Street
            </label>
            <input id="street" v-model="street" type="text" placeholder="Mainstreet" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.street }}</p>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-3 lg:mb-1">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="number">
              Number
            </label>
            <input id="number" v-model="number" type="text" placeholder="21 A" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.number }}</p>
          </div>
        </div>
      </div>

      <hr class="my-2">

      <div class="px-2 lg:px-6">
        <h2 class="font-semibold text-md pt-2 pb-6 mx-6 sm:mx-0">Representative Registration</h2>
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
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="jobTitle">
              Job Title
            </label>
            <input id="jobTitle" v-model="jobTitle" type="text" placeholder="Recruiter" 
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.jobTitle }}</p>
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
      </div>

      <div class="flex flex-wrap mt-8 sm:-mx-3 justify-between px-6">
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
import axios from 'axios'
import { validateFirstName,
         validateLastName,
         validateEmail,
         validatePassword,
         validateCompanyName,
         validateCompanyInfo,
         validateCity,
         validateStreet,
         validateZipcode,
         validateNumber,
         validateJobTitle } from "../validators";

export default {
  data() {
    return {
      validationErrors: {},
      emailConflictError: '',
      nameConflictError: '',
      name: '',
      information: '',
      street: '',
      zipcode: '',
      city: '',
      number: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      jobTitle: ''
    }
  }, 
  methods: {
    register() {
      const formIsValid = this.validateForm()
      if (!formIsValid) {
        return
      }

      const endpoint = 'http://localhost:3000/signup/company'
      const data = {
        name: this.name,
        information: this.information,
        locations: [
          {
            street: this.street,
            zipcode: this.zipcode,
            city: this.city,
            number: this.number
          }
        ],
        representatives: [
          {
            jobTitle: this.jobTitle,
            user: {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password
            }
          },
        ]
      }

      console.log(JSON.stringify(data))
      axios.post(endpoint, JSON.stringify(data))
      .catch(err => {
        console.log('error, oh no!! ' + err)
      })
    },

    validateForm() {
      this.validationErrors = {}
      
      const name = validateCompanyName(this.name)
      if (!name.isValid) {
        this.validationErrors.name = name.error      
      }

      const info = validateCompanyInfo(this.information)
      if (!info.isValid) {
        this.validationErrors.information = info.error      
      }

      const city = validateCity(this.city)
      if (!city.isValid) {
        this.validationErrors.city = city.error      
      }
      
      const street = validateStreet(this.street)
      if (!street.isValid) {
        this.validationErrors.street = street.error      
      }

      const zipcode = validateZipcode(this.zipcode)
      if (!zipcode.isValid) {
        this.validationErrors.zipcode = zipcode.error
      }
      
      const number = validateNumber(this.number)
      if (!number.isValid) {
        this.validationErrors.number = number.error      
      }

      const jobTitle = validateJobTitle(this.jobTitle)
      if (!jobTitle.isValid) {
        this.validationErrors.jobTitle = jobTitle.error      
      }

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

      // check if no errors are present
      if (!Object.entries(this.validationErrors).length) {
        return true // form is valid
      }

      return false
    }
  }
}
</script>

<style scoped>
  #company-form {
    height: max-content;  
  }
</style>