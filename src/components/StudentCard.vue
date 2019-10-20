<template>
  <div class="self-center h-full border mb-2 rounded-lg bg-white mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer"
    v-bind:class="{ marked: student.marked }"
    @click="viewStudentCard(student)">

    <div class="flex justify-end pt-2 pr-3">
      <input v-on:click.stop="mark(student)" v-bind:checked="student.marked" type="checkbox" name="marked">
    </div>
    <div class="sm:flex sm:items-center px-2">
      <div>
        <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" alt="">
      </div>
      <div class="text-center py-1 sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">
            {{student.firstname}} {{student.lastname}} 
          </p>
          <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
          <div class="py-px mx-6 md:mx-0 md:mr-4" v-bind:class="{available: student.status=='Available', unavailable: student.status=='Unavailable'}"></div>
        </div>
        <div class="flex flex-wrap justify-around sm:flex-grow">
          <student-skill v-for="(skill, index) in student.skills.slice(0,3)" v-bind:skill="skill" :key="index"/> 
        </div>
      </div>
    </div>
    <div class="flex flex-wrap text-center justify-between">
      <student-experience class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-gray-100 rounded-lg group-hover:bg-purple-100" 
        v-for="(exp, index) in student.experience.slice(0,2)" 
        v-bind:experience="exp" 
        :key="index"/>
    </div>
    <div class="flex justify-between px-4 pb-2">
      <button v-on:click.stop="message(student.id, 'u want job?')" class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-purple-400 hover:bg-purple-400 hover:text-white">Message</button>
      <button v-on:click.stop="resume()" class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">Curriculum Vitae</button>
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
    viewStudentCard(student) {
      // focus on the selected card
      // will display more info
      // and blur the other studentCards
      // it will also show the resume of 
      // this student.
      alert('hi')
      return student
    },

    resume() {
      alert('resume wanted')
    },

    message(studentID, message) {
      // send a message to the selected
      // student
      alert(`student ${studentID} messaged: ${message}`)
      return studentID, message
    },

    mark(student) {
      student.marked = !student.marked
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