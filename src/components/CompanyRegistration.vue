<template>
  <div class="container mx-auto bg-white">
    <form v-on:submit.prevent="register()" id="company-form" class="lg:mt-16 md:mt-6 border-2 border-gray-200 rounded-lg pt-4 pb-2">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="font-semibold text-md pt-2 pb-6 px-2 lg:px-6 mx-6 sm:mx-0">Company Registration <span class="float-right text-sm rounded-full bg-purple-200 p-4 h-8 w-8 flex items-center justify-center">1</span></h2>

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
        </div>

        <div class="w-1/2 border-l border-purple-200">
          <div class="px-2 lg:px-6">
            <h2 class="font-semibold text-md pt-2 pb-6 mx-6 sm:mx-0">Representative Registration <span class="float-right text-sm rounded-full bg-purple-200 p-4 h-8 w-8 flex items-center justify-center">2</span></h2>

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
        </div>
      </div>

      <div class="flex mt-1 sm:-mx-3 justify-center px-6">
        <router-link to="/home" class="text-xs font-semibold rounded-full mx-6 px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">
          Cancel
        </router-link>
        <button class="text-xs font-semibold rounded-full mx-6 px-4 py-1 bg-purple-500 border border-purple-500 text-white hover:bg-purple-600">
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

      axios.post(endpoint, JSON.stringify(data))
      .then(() => {
        location.reload()
      })
      .catch(err => {
        switch(err.response.status) {
          case 409:
            this.emailConflictError = 'Submitted email might already be taken'
            this.nameConflictError = 'The submitted company is already registered and has existing representatives. Ask another representative of your company to send an invite link.'
            break
          case 400:
            console.log('404 bad request. Something went wrong')
            break
        }
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
    },
  }
}
</script>

<style scoped>
  #company-form {
    height: max-content;  
  }
</style>