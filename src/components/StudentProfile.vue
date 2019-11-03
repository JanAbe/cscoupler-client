<template>
  <div class="lg:flex">
    <div class="lg:w-2/6 bg-purple-100 pb-4">
    <!-- todo: make this toggable or something, idk -->
      <!-- <div class="text-center bg-white lg:mx-auto pb-4">
        <h2 class="font-semibold text-sm mx-3 md:pt-1">Tips</h2>
        <div class="py-2">
          <p class="text-xs italic pl-1 mx-3 md:mt-1">Only the first three of your skills get shown on your card, so order them consiously!</p>
          <p class="text-xs italic pl-1 mx-3 md:mt-1">All your skills are visible through the search option though.</p>
        </div>
        <div class="py-2">
          <p class="text-xs italic pl-1 mx-3 md:mt-1">Keep your experience descriptions short and concise, the card below serves as a sneak peek to your profile.</p>
          <p class="text-xs italic pl-1 mx-3 md:mt-1">It's goal is to interest the company recruiters/representatives to view your profile and resume.</p>
        </div>
      </div> -->
      
      <div class="center-fixed md:ml-32 lg:ml-0 mx-4 lg:mt-8">
        <div class="text-xl mt-2 lg:mt-4 lg:mb-2 md:ml-8 max-w-sm">
          <h2>Live preview of your card</h2>
        </div>
        <div class="mt-3 border mb-2 rounded-lg bg-white md:ml-8 mx-auto max-w-sm shadow-xl hover:shadow-none">
          <div class="sm:flex sm:items-center px-2">
            <div>
              <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 my-2 sm:mb-0 sm:mr-4 sm:ml-0" src="../assets/avatar.png" alt="">
            </div>
            <div class="text-center py-1 sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-xl leading-tight break-all">
                  {{firstname}} {{lastname}} 
                </p>
                <p class="text-sm leading-tight text-grey-dark break-all">Student at {{university}}</p>
                <div class="py-px mx-6 md:mx-0 md:mr-4 border-b-2 border-purple-300 "></div>
              </div>
              <div class="flex flex-wrap justify-around sm:flex-grow">
                <student-skill v-for="(skill, index) in skills.slice(0,3)" v-bind:skill="skill.skill" :key="index"/> 
              </div>
            </div>
          </div>
          <div v-if="shortExperiences !== null" class="flex flex-wrap text-center">
            <student-experience class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-gray-100 rounded-lg" 
              v-for="(exp, index) in shortExperiences.slice(0,2)" 
              v-bind:experience="exp" 
              :key="index"/>
          </div>
          <div class="flex flex-wrap text-center">
            <p class="overflow-hidden p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-purple-100 rounded-lg">
              {{ wishes }}
            </p>
          </div>
          <div class="flex justify-between px-4 pb-2 pt-1">
            <button disabled class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white opacity-50 cursor-not-allowed">Message</button>
            <button disabled class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500 opacity-50 cursor-not-allowed">View Profile</button>
          </div>
        </div>
      </div>
    </div>

    <form id="student-update-form" class="lg:w-4/6 bg-white rounded-lg px-2 pt-4 pb-2 mb-2 lg:ml-24 md:mr-12 md:ml-12">
      <h2 class="text-lg font-semibold text-md pb-6 mx-6 sm:mx-0">Your profile</h2>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <label class="mx-3 text-gray-700 mb-2" for="skills">Select up to 5 of your skills</label>
        <multi-select v-model="skills" :options="skillsOptions" :multiple="true" 
          :close-on-select="false" :clear-on-select="true" :max="5"
          label="skill" track-by="skill" placeholder="Select your skills" class="mx-3" id="skills">
        </multi-select>
        <p class="text-red-600 leading-tight text-xs italic pl-1 mx-3 md:mt-1">{{ validationErrors.skills }}</p>
      </div>

      <div class="flex flex-wrap mx-3 mb-4 sm:-mx-3">
        <div>
          <h2 class="mx-3">Experiences (Shorts)</h2>
          <p class="text-gray-600 leading-tight text-xs italic mx-3">Pick two of your past experiences and write a description about them.</p>
          <p class="text-gray-600 leading-tight text-xs italic mx-3">Try to keep them short and powerful, as only 100 characters are allowed!</p>
        </div>
        
        <div class="w-full px-3 mb-3 lg:mb-1 mt-2">
          <textarea v-model="shortExperiences[0]" type="text" maxlength="100" placeholder="Interned at company X, worked on their main product Y. Improved an algorithm's performance by 20%."
            class="text-sm not-resizable appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
        </div>
        
        <div class="w-full px-3 mb-3 lg:mb-1 mt-2">
          <textarea v-model="shortExperiences[1]" type="text" maxlength="100" placeholder="While working part-time as a programmer, I added various security checks against, e.g XSS and SQLi."
            class="text-sm not-resizable appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 mb-3 lg:mb-1 mt-1">
          <h2 class="text-semibold">Wishes</h2>
          <p class="text-gray-600 leading-tight text-xs italic mb-2">Try to keep your whishes short and powerful, as only 100 characters are allowed!</p>
          <textarea v-model="wishes" type="text" maxlength="100" placeholder="Looking for a start-up company focusing on cybersecurity"
            class="text-sm not-resizable appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-4 sm:-mx-3">
        <div>
          <div class="flex mb-1">
            <h2 class="mx-3">Experiences (Full)</h2>
            <button @click="addFullExperience()" class="py-px px-6 text-xs bg-purple-400 hover:bg-purple-500 rounded-full text-white">Add experience</button>
          </div>
          <p class="text-gray-600 leading-tight text-xs italic mx-3">Write about your work experience, past internships or selfmade projects!</p>
          <p class="text-gray-600 leading-tight text-xs italic mx-3">These don't show on your 'card' but do show on your profile.</p> 
        </div>
        
        <div v-for="(e, index) in experiences" v-bind:key="index" class="w-full px-3 mb-3 lg:mb-1 mt-1">
          <div>
            <button @click="deleteExperience(index)" class="bg-red-400 hover:bg-red-500 text-white text-xs rounded-full py-px px-3 mb-1 float-right">Delete</button>
            <textarea v-model="experiences[index]" type="text"
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.experiences }}</p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 mb-3 sm:-mx-3">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-gray-700 mb-2 md:mt-6" for="first-name">
            First Name
          </label>
          <input id="first-name" v-model="firstname" type="text" placeholder="John" maxlength="60"
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 md:mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.firstname }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block text-gray-700 mb-2 md:mt-6" for="last-name">
            Last Name
          </label>
          <input id="last-name" v-model="lastname" type="text" placeholder="Smith" maxlength="60"
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
        <div class="w-full md:w-1/2 px-3 mb-4 lg:mb-0">
          <label class="block text-gray-700 mb-2" for="status">
            Student status
          </label>
          <multi-select class="mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300" v-model="status" :options="statusOptions" :close-on-select="true" :show-labels="false" label="stat" track-by="stat" placeholder="Select student status"></multi-select>
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.status }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block text-gray-700 mb-2" for="university">
            University
          </label>
          <input id="university" v-model="university" type="text" placeholder="University of ..." maxlength="60"
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.university }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 sm:-mx-3 border-b-2 border-purple-200">
        <div class="w-full px-3 mb-3">
          <label v-on:click="selectResume()" class="text-xs font-semibold rounded-full mb-6 px-4 py-3 bg-purple-400 text-white hover:bg-purple-500" role="button" for="resume-upload">
            Change CV / Resume
          </label>
          <span id="selected-file-name" class="block pt-2 lg:mt-0 md:inline ml-2 text-gray-500">No new CV / Resume selected</span>
          <input id="resume-upload" class="hidden" type="file">
          <p class="text-red-600 leading-tight text-xs italic pl-2 md:mt-3">{{ validationErrors.resume }}</p>
        </div>
      </div>

      <div class="flex justify-center mt-4">
        <button v-on:click.stop="update()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600">Update profile</button>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import { parseJWT } from '../util'
import MultiSelect from 'vue-multiselect'
import StudentSkill from './StudentSkill.vue'
import StudentExperience from './StudentExperience'
import { validateFirstName,
         validateLastName,
         validateEmail,
         validateStatus,
         validateUniversity,
         validateSkills,
         validateResume } from "../validators";

export default {
  components: {
    MultiSelect,
    StudentSkill,
    StudentExperience,
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
      status: '',
      university: '',
      skills: [],
      experiences: [],
      shortExperiences: [],
      wishes: '',
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
        this.experiences = student.experiences
        this.shortExperiences = student.shortExperiences
        this.university = student.university
        this.status = { stat: student.status }
        this.resume = student.resume
        this.wishes = student.wishes
      })
      .catch(err => {
        console.log(err)
      })
    },
    selectResume() {
      const resumeUpload = document.querySelector('#resume-upload')
      resumeUpload.addEventListener('change', (event) => {
        const file = event.target.files[0]
        this.resume = file
        document.querySelector('#selected-file-name').textContent = file.name
      })
    },
    addFullExperience() {
      this.experiences.push('')
    },
    deleteExperience(index) {
      this.experiences.splice(index, 1)
    },
    update() {
      const formIsValid = this.validateForm()
      if (!formIsValid) {
        return
      }

      const studentID = parseJWT(document.cookie.split('=')[1])['ID']
      const data = {
        user: {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
        },
        university: this.university,
        skills: this.skills.map(({ skill }) => skill),
        status: this.status.stat,
        experiences: this.experiences,
        shortExperiences: this.shortExperiences,
        wishes: this.wishes
      }
      const payload = new FormData()
      payload.append('resume', this.resume)
      payload.append('studentData', JSON.stringify(data))
      axios.put(`http://localhost:3000/students/edit/${studentID}`, payload, { withCredentials: true })
      .then(() => {
        location.reload()
      })
      .catch(err => {
        console.log(err)
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
    }
  }
}
</script>

<style>
  .multiselect__single {
    font-size: .875rem;
  }
</style>

<style scoped>
  @media (min-width: 1024px) {
    .center-fixed {
      position: fixed;
      left: 3.7%
    }
  }

  .not-resizable {
    resize: none;
  }
</style>