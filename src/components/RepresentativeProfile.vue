<template>
  <div class="mx-auto container">
    <div class="lg:flex">
      <form id="representative-update-form" class="w-1/2 bg-white md:px-4 pt-4 pb-3 ">
        <div class="flex justify-between">
          <h2 class="text-lg font-semibold text-md mx-6 sm:mx-0">Your profile</h2>
          <button @click="visitCompanyAccount()" class="py-1 px-3 text-white bg-purple-400 hover:bg-purple-500 rounded-full text-xs font-semibold text-md mx-6 sm:mx-0">Go to Company Profile</button>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-gray-700 mb-2 mt-6" for="first-name">
              First Name
            </label>
            <input id="first-name" v-model="firstname" type="text" placeholder="John" 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.firstname }}</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block text-gray-700 mb-2 md:mt-6" for="last-name">
              Last Name
            </label>
            <input id="last-name" v-model="lastname" type="text" placeholder="Smith"
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.lastname }}</p>
          </div>
        </div>
        
        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="email">
              Email
            </label>
            <input id="email" v-model="email" type="email" placeholder="johnsmith@email.com" 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.email }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="jobTitle">
              Job Title
            </label>
            <input id="jobTitle" v-model="jobTitle" type="text" placeholder="Recruiter" 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.jobTitle }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-4">
          <button v-on:click.stop="update()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600">Update profile</button>
        </div>
      </form>

      <div class="px-6 lg:w-1/2 lg:pl-8 lg:ml-12 border-t border-purple-400 lg:border-t-0">
        <div>
          <h2 class="text-xl text-center mt-4 md:ml-8 lg:mx-auto font-semibold">Invitations</h2>
          <table id="test" class="mx-auto lg:mx-auto lg:w-full mt-4">
            <thead>
              <tr class="bg-purple-100">
                <th class="border text-sm font-normal w-3/6 px-3">Invitation</th>
                <th class="border text-sm font-normal w-2/6 px-3">Valid until</th>
                <th class="border text-sm font-normal w-1/6 px-3">Used</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in invitations" :key="i.id">
                <td class="border px-4 py-1 text-sm select-all"><span>{{ i.URL }}</span></td>
                <td class="border px-4 py-1 text-sm text-center">{{ i.ExpiryDate }}</td>
                <td class="border px-4 py-1 text-sm text-center">{{ i.Used }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center my-4">
            <button @click="generateInvitation()" class="bg-white text-purple-400 hover:bg-purple-400 hover:text-white border border-purple-400 rounded-full py-1 px-2 text-xs font-semibold">
              Generate invitation
            </button>
          </div>
        </div>
      </div> 
    </div>

    <div class="lg:flex border-t border-purple-400 lg:border-t-2 lg:border-gray-200">
      <form class="bg-white px-4 pt-4 pb-2 mb-2 w-full">
        <h2 class="text-lg font-semibold text-md pb-5 mx-6 sm:mx-0">Add project</h2>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Description
            </label>
            <textarea v-model="description" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Duration
            </label>
            <textarea v-model="duration" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Compensation
            </label>
            <textarea v-model="compensation" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-4 sm:-mx-3">
          <div>
            <div class="flex mb-1">
              <h2 class="mx-3">Recommendations</h2>
              <button @click="addRecommendation()" class="py-px px-2 md:px-6 text-xs bg-purple-400 hover:bg-purple-500 rounded-full text-white">Add recommendation</button>
            </div>
          </div>
          
          <div v-for="(r, index) in recommendations" v-bind:key="index" class="w-full px-3 mb-3 lg:mb-1 mt-1">
            <div>
              <button @click="deleteRecommendation(index)" class="bg-red-400 hover:bg-red-500 text-white text-xs rounded-full py-px px-3 mb-1 float-right">Delete</button>
              <textarea v-model="recommendations[index]" type="text"
                class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
              <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.recommendations }}</p>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center mt-4">
          <button v-on:click.stop="addProject()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600">Add project</button>
        </div>
      </form>

      <div class="hidden lg:block w-full ml-12"> 
        <div class="text-xl mt-4 mb-2 md:ml-8 lg:mx-auto max-w-sm ">
          <h2>Live preview of the new project</h2>
        </div>

        <div class="self-start border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer">
          <div class="flex flex-wrap justify-center border-b-2 border-purple-400">
            <p class="p-2 text-xl text-grey-dark mx-4 mt-1 mb-2">
              Internship at {{ company }}
            </p>
          </div>

          <h4 class="pl-2">Description:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ description }}
            </p>
          </div>

          <h4 class="pl-2">Duration:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ duration }}
            </p>
          </div>

          <h4 class="pl-2">Compensation:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ compensation }}
            </p>
          </div>

          <h4 class="pl-2">Desired Skills:</h4>
          <div class="flex flex-wrap justify-center sm:flex-grow">
            <span v-for="(rec, index) in recommendations" :key="index"
              class="flex-grow text-center bg-indigo-100 rounded-full px-2 py-1 mb-1 text-sm text-gray-700 mx-2">
              {{ rec }}
            </span> 
          </div>

          <div class="flex justify-center px-4 pb-2 pt-1 mt-2 pt-2 border-t-2 border-purple-400">
            <button class="disabled cursor-not-allowed text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">
              Message Recruiter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { parseJWT } from '../util'

export default {
  data() {
    return {
      validationErrors: {},
      invitations: [],
      firstname: '',
      lastname: '',
      email: '',
      jobTitle: '',
      recommendations: [''],
      description: '',
      compensation: '',
      duration: '',
      companyID: '',
      company: ''
    }
  },
  created() {
    this.fetchRepresentative()
    this.fetchCreatedInvitations()
  },
  methods: {
    generateInvitation() {
      // this should actually be a POST request, but that didn't work for some reason, so a GET request is used instead.
      axios.get('http://localhost:3000/representatives/invitelink', { withCredentials: true })
      .then(() => {
        this.fetchCreatedInvitations()
      })
      .catch(err => console.log(err))
    },
    fetchCreatedInvitations() {
      this.invitations = []
      axios.get('http://localhost:3000/representatives/invitations', { withCredentials: true })
      .then(res => {
        res.data.forEach(i => {
          i['URL'] = 'http://localhost:8080/#' + i['URL']
          i['ExpiryDate'] = new Date(i['ExpiryDate']).toLocaleString('NL')
          this.invitations.push(i)
        })
      })
      .catch(err => console.log(err))
    },
    validFor(i) {
      // checks for how long the invitation is valid
      return i
    },
    fetchRepresentative() {
      const representativeID = parseJWT(document.cookie.split('=')[1])['ID']
      axios.get(`http://localhost:3000/representatives/${representativeID}`, { withCredentials: true })
      .then(res => {
        this.firstname = res.data['user']['firstname']
        this.lastname = res.data['user']['lastname']
        this.email = res.data['user']['email']
        this.jobTitle = res.data['jobTitle']
        this.companyID = res.data['companyID']
        this.fetchCompanyname()
      })
      .catch(err => console.log(err))
    },
    fetchCompanyname() {
      axios.get(`http://localhost:3000/companies/name/${this.companyID}`, { withCredentials: true })
      .then(res => {
        this.company = res.data
      })
      .catch(err => console.log(err))
    },
    update() {
      const representativeID = parseJWT(document.cookie.split('=')[1])['ID']
      const data = {
        user: {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
        },
        jobTitle: this.jobTitle
      }

      axios.put(`http://localhost:3000/representatives/edit/${representativeID}`, JSON.stringify(data), { withCredentials: true })
      .then(() => {
        // location.reload()
      })
      .catch(err => console.log(err))
    },
    addRecommendation() {
      this.recommendations.push('')
    },
    deleteRecommendation(i) {
      this.recommendations.splice(i, 1)
    },
    addProject() {
      const data = {
        Description: this.description,
        Compensation: this.compensation,
        Duration: this.duration,
        Recommendations: this.recommendations
      }

      axios.post(`http://localhost:3000/representatives/projects/`, JSON.stringify(data), { withCredentials: true })
      .then(() => {
        location.reload()
      })
      .catch(err => console.log(err))
    },
    visitCompanyAccount() {
      this.$router.push(`/companies/${this.companyID}/account`)
    }
  }
}
</script>

<style scoped>
  #test {
    table-layout: fixed;
  }

  #test td span {
    display: block;
    overflow: scroll;
  }
  
  #test td {
    white-space: nowrap;
  }
</style>