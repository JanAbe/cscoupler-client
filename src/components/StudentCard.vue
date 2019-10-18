<template>
  <div>
      <div class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg">
        <div class="sm:flex sm:items-center px-2 py-2">
          <img class="block h-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt="">
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">{{student.user.firstname}} {{student.user.lastname}}</p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
            </div>
            <div class="flex flex-wrap">
              <button class="text-xs font-semibold rounded-full px-4 py-1 bg-white border hover:text-red-300 float-right">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{student.id}}
    {{student.user.firstname}}
    {{student.user.lastname}}
    {{student.user.email}}
    {{student.skills}}
    {{student.status}} -->
</template>

<script>
export default {
  name: 'StudentCard',
  props: ['student'],
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

<style>

</style>