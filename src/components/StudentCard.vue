<template>
  <div>
      <div class="border m-3 rounded-lg bg-white mx-auto max-w-sm shadow-md">
        <div class="sm:flex sm:items-center px-2 py-2">
          <div>
            <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt="">
            <p class="text-sm leading-tight py-1 mr-3" 
              v-bind:class="{available: student.status=='Available', 
                             unavailable: student.status=='Unavailable'}">
              {{student.status}}
            </p>
          </div>
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">{{student.user.firstname}} {{student.user.lastname}}</p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
            </div>
            <div class="flex flex-wrap justify-around">
              <student-skill v-for="(skill, index) in student.skills.slice(0,3)" v-bind:skill="skill" :key="index" /> 
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-between px-2 py-2">
          <button class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-yellow">Message</button>
          <button class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-tera">Curriculum Vitae</button>
        </div>
      </div>
    </div>
</template>

<script>
import StudentSkill from './StudentSkill.vue'

export default {
  name: 'StudentCard',
  props: ['student'],
  components: {
    StudentSkill,
  },
  methods: {
    viewStudentCard(student) {
      // focus on the selected card
      // will display more info
      // and blur the other studentCards
      // it will also show the resume of 
      // this student.
      return student
    },

    visitStudentAccount(studentID) {
      // will go to the account page of 
      // the student.
      return studentID
    },

    messageStudent(studentID, message) {
      // send a message to the selected
      // student
      return studentID, message
    }
  }
}
</script>

<style scoped>
  .border-tera {
    border-color: #f6dbc6;
  }

  .border-blue {
    border-color: #c6e0f6;
  }

  .available {
    border-bottom: 2px solid;
    border-color: #4fd1c5;
  }
  
  .unavailable {
    border-bottom: 2px solid;
    border-color: #fc8181;
  }
</style>