<template>
  <div class="flex h-full">
    <form id="student-update-form" class="w-2/5 bg-white rounded-lg px-4 pt-4 pb-2 lg:ml-24 lg:mr-10 lg:mt-10">
      <h2 class="font-semibold text-md pb-6 mx-6 sm:mx-0">Your profile</h2>
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

      <div class="flex flex-wrap mx-3 sm:-mx-3 border-b-2 border-purple-200">
        <div class="w-full px-3 my-4">
          <label v-on:click="selectResume()" class="text-xs font-semibold rounded-full mb-6 px-4 py-3 bg-purple-400 text-white hover:bg-purple-500" role="button" for="resume-upload">
            Change CV / Resume
          </label>
          <span id="selected-file-name" class="block pt-2 lg:mt-0 md:inline ml-2 text-gray-500">No new CV / Resume selected</span>
          <input id="resume-upload" class="hidden" type="file">
          <p class="text-red-600 leading-tight text-xs italic pl-2 md:mt-3">{{ validationErrors.resume }}</p>
        </div>
      </div>

      <div class="flex justify-center mt-4">
        <button v-on:click.stop="update()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600">Update profile</button>
      </div>
    </form>

    <div class="w-3/5 bg-purple-100">
      <div class="mt-24 border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-lg shadow-xl hover:shadow-none">
        <div class="sm:flex sm:items-center px-2">
          <div>
            <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 my-2 sm:mb-0 sm:mr-4 sm:ml-0" src="../assets/avatar.png" alt="">
          </div>
          <div class="text-center py-1 sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">
                {{firstname}} {{lastname}} 
              </p>
              <p class="text-sm leading-tight text-grey-dark">Student at {{university}}</p>
              <div class="py-px mx-6 md:mx-0 md:mr-4 border-b-2 border-purple-300 "></div>
            </div>
            <div class="flex flex-wrap justify-around sm:flex-grow">
              <student-skill v-for="(skill, index) in skills.slice(0,3)" v-bind:skill="skill" :key="index"/> 
            </div>
          </div>
        </div>
        <div v-if="experience !== null" class="flex flex-wrap text-center">
          <student-experience class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-gray-100 rounded-lg" 
            v-for="(exp, index) in experience.slice(0,2)" 
            v-bind:experience="exp" 
            :key="index"/>
        </div>
        <div class="flex flex-wrap text-center">
          <p class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-purple-100 rounded-lg">
            Looking for a start-up company working on socially relevant problems in the Bay area.
          </p>
        </div>
        <div class="flex justify-between px-4 pb-2 pt-1">
          <button disabled class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">Message</button>
          <button disabled class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">View Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { parseJWT } from '../util'
import MultiSelect from 'vue-multiselect'
import StudentSkill from './StudentSkill.vue'
import StudentExperience from './StudentExperience'

export default {
  components: {
    MultiSelect,
    StudentSkill,
    StudentExperience
  },
  created() {
    this.fetchStudent()
  },
  data() {
    return {
      validationErrors: {},
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      status: '',
      university: '',
      skills: [],
      experience: [],
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
    fetchStudent() {
      const studentID = parseJWT(document.cookie.split('=')[1])['ID']
      axios.get(`http://localhost:3000/students/${studentID}`, { withCredentials: true })
      .then(res => {
        const student = res.data
        this.firstname = student.user.firstname
        this.lastname = student.user.lastname
        this.email = student.user.email
        this.skills = student.skills.map(s => {
          return {skill: s}
        })
        this.experience = student.experience
        this.university = student.university
        this.status = {stat: student.status}
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  #student-update-form {
    height: max-content;
  }
</style>