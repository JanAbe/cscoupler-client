<template>
  <div class="container mx-auto mt-6 md:mt-16">
    <form v-on:submit.prevent="signIn()" id="student-form" class="max-w-sm mx-auto md:mt-12 lg:mt-24 md:border-2 md:border-gray-200 md:rounded-lg px-2 lg:px-6 pb-4">
      <h2 class="font-semibold text-md pt-2 pb-6 mx-6 sm:mx-0">Sign in to CScoupler</h2>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 lg:mt-0">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">
            Email
          </label>
          <input id="email" v-model="email" type="email" placeholder="johnsmith@email.com" 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.email }}</p>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ error }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 sm:-mx-3">
        <div class="w-full px-3 mb-3 lg:mb-1">
          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="password">
            Password
          </label>
          <input id="password" v-model="password" type="password" placeholder="******************" 
            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.password }}</p>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ error }}</p>
        </div>
      </div>
      
      <div class="flex mt-2 sm:-mx-3 justify-center">
        <button class="text-xs w-full font-semibold rounded-full mx-3 px-4 py-1 bg-purple-500 border border-purple-500 text-white hover:bg-purple-600">
          Sign in
        </button>
      </div>
    </form>
  </div>  
</template>

<script>
import axios from 'axios'
import { validateEmail } from "../validators";

export default {
  data() {
    return {
      validationErrors: {},
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signIn() {
      const formIsValid = this.validateForm()
      if (!formIsValid) {
        return
      }

      const data = {
        email: this.email,
        password: this.password
      }

      const config = { headers: {'Content-Type' : 'application/json' }, withCredentials: true }
      axios.post('http://localhost:3000/signin', JSON.stringify(data), config)
      .then(() => {
        this.$router.push('/home')
      })
      .catch(err => {
        console.log(err)
        this.error = 'Invalid email/password combination'
      })
    },

    validateForm() {
      this.validationErrors = {}

      const email = validateEmail(this.email)
      if (!email.isValid) {
        this.validationErrors.email = email.error
      }

      const passwordIsEmpty = !this.password.length
      if (passwordIsEmpty) {
        this.validationErrors.password = 'Password is required'      
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

<style>

</style>