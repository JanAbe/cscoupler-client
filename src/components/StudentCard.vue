<template>
  <div class="self-start border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer"
    v-bind:class="{ marked: student.marked }"
    v-on:click.stop="mark(student)">

    <div class="flex justify-end pt-2 pr-3">
      <input hidden v-bind:checked="student.marked" type="checkbox" name="marked">
    </div>
    <div class="sm:flex sm:items-center px-2">
      <div>
        <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="../assets/avatar.png" alt="">
      </div>
      <div class="text-center py-1 sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">
            {{student.firstname}} {{student.lastname}} 
          </p>
          <p class="text-sm leading-tight text-grey-dark">Student at {{student.university}}</p>
          <div class="py-px mx-6 md:mx-0 md:mr-4 border-b-2 border-purple-300 "></div>
        </div>
        <div class="flex flex-wrap justify-around sm:flex-grow">
          <student-skill v-for="(skill, index) in student.skills.slice(0,3)" v-bind:skill="skill" :key="index"/> 
        </div>
      </div>
    </div>
    <div v-if="student.experience !== null" class="flex flex-wrap text-center">
      <student-experience class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-gray-100 rounded-lg" 
        v-for="(exp, index) in student.shortExperiences.slice(0,2)" 
        v-bind:experience="exp" 
        :key="index"/>
    </div>
    <div class="flex flex-wrap text-center">
      <p class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-purple-100 rounded-lg">
        {{ student.wishes }}
      </p>
    </div>
    <div class="flex justify-between px-4 pb-2 pt-1">
      <button v-on:click.stop="message(student.id, 'u want job?')" class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">Message</button>
      <router-link :to="profileURL" class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">View Profile</router-link>
    </div>
  </div>
</template>

<script>
import StudentSkill from './StudentSkill.vue'
import StudentExperience from './StudentExperience'

export default {
  name: 'StudentCard',
  props: ['student'],
  components: {
    StudentSkill,
    StudentExperience,
  },
  methods: {
    message(studentID, message) {
      // send a message to the selected
      // student
      alert(`student ${studentID} messaged: ${message}`)
      return studentID, message
    },

    mark(student) {
      student.marked = !student.marked
    }
  },
  computed: {
    profileURL: function() {
      return '/students/' + this.student.id + '/profile'
    }
  }
}
</script>

<style scoped>
  .available {
    border-bottom: 2px solid;
    border-color: #4fd1c5;
  }
  
  .unavailable {
    border-bottom: 2px solid;
    border-color: #fc8181;
  }

  .top-right {
    position: fixed;
    top:0;
    right:0;
  }

  .marked {
    background-color: #e9d8fd;
    box-shadow: none;
  }
</style>