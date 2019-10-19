<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <student-card v-for="student in students" v-bind:student="student" :key="student.id" />
    </div>
  </div>
</template>

<script>
import StudentCard from './StudentCard'

export default {
  name: 'StudentList',
  props: ['students'],
  components: {
    StudentCard
  },
  // maybe add a filterBy method?
  // maybe a user can mark a student as 'interested in'
  // then the user can filter on students marked 'interested in'
}
</script>

<style scoped>

</style>
