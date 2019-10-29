<template>
  <div class="mt-8 flex">
    <div class="flex-none w-1/3 md:max-w-xs text-gray-700 lg:mr-16 ml-10">
      <div class="flex justify-center">
        <div class="border border-gray-300 rounded fixed mt-16 md:ml-8">
          <h2 class="bg-purple-400 text-center font-semibold text-white py-3">
            Filter menu
          </h2>
          <hr class="mb-4">

          <div v-on:click="toggle()" class="mb-4 px-4 py-2 mx-6 bg-purple-400 hover:bg-purple-500 rounded cursor-pointer text-center">
            <input hidden v-bind:checked="markedToggle" type="checkbox" class="mr-3">
            <p v-if="!markedToggle" class="text-sm font-semibold text-white">Show marked projects</p>
            <p v-if="markedToggle" class="text-sm font-semibold text-white">Show all projects</p>
          </div>
          <hr class="mb-4">

          <div class="mb-4 px-4">
            <input class="border-b-2 border-purple-300 text-gray-600 p-2 w-full" type="text" placeholder="Search by description">
          </div>
          <hr class="mb-4">

          <div class="flex justify-center">
            <button class="bg-purple-400 rounded p-1 text-sm font-semibold w-full mx-6 my-2 hover:bg-purple-500 text-white">
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="markedToggle" class="flex flex-wrap w-2/3">
      <project-card v-for="project in markedProjects" v-bind:project="project" :key="project.id" />
    </div>
    <div v-else-if="!markedToggle" class="flex flex-wrap w-2/3">
      <project-card v-for="project in projects" v-bind:project="project" :key="project.id" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      markedToggle: false
    }
  },
  created() {
    this.fetchAllProjects()
  },
  methods: {
    fetchAllProjects() {
      axios.get('http://localhost:3000/projects', { withCredentials: true })
      .then(res => {
        res.data.forEach(p => {
          const id = p['id']
          const descr = p['description']
          const dur = p['duration']
          const comp = p['compensation']
          const recomms = p['recommendations']
          const cID = p['companyID']
          const project = {
            id: id,
            description: descr,
            duration: dur,
            compensation: comp,
            recommendations: recomms,
            companyID: cID,
            marked: false
          }
          this.projects.push(project)
        })
      })
      .catch(err => console.log(err))
    },
    toggle() {
      this.markedToggle = !this.markedToggle
    }
  },
  computed: {
    markedProjects: function() {
      return this.projects.filter(p => p.marked)
    },
  }
}
</script>

<style>

</style>