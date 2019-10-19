<template>
  <div>
      <div class="border m-1 rounded-lg bg-white mx-auto max-w-sm shadow-lg hover:shadow-none">
        <div class="sm:flex sm:items-center px-2 py-2">
          <div>
            <img class="block h-16 object-contain object-center sm:h-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="">
          </div>
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">
                {{student.user.firstname}} {{student.user.lastname}} 
              </p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
              <div class="text-sm py-px mx-6 md:mx-0 md:mr-6" v-bind:class="{available: student.status=='Available', unavailable: student.status=='Unavailable'}"></div>
            </div>
            <div class="flex flex-wrap justify-around">
              <student-skill v-for="(skill, index) in student.skills.slice(0,3)" v-bind:skill="skill" :key="index"/> 
            </div>
          </div>
        </div>
        <div class="flex flex-wrap text-center">
          <student-experience class="p-2" v-for="(exp, index) in student.experience.slice(0,2)" v-bind:experience="exp" :key="index"/>
        </div>
        <div class="flex flex-wrap justify-between px-2 py-2">
          <button class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-blue">Message</button>
          <button class="text-xs font-semibold rounded-full px-4 py-1 bg-white border border-tera">Curriculum Vitae</button>
        </div>
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
      return student
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
    /* border-color: #f6dbc6; */
    border-color:#fbd38d;  
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