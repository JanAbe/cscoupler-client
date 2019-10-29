<template>
  <div class="self-start border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer"
    v-bind:class="{ marked: project.marked }"
    v-on:click.stop="mark(project)">

    <div class="flex justify-end pt-0 pr-3">
      <input hidden v-bind:checked="project.marked" type="checkbox" name="marked">
    </div>
    
    <div class="flex flex-wrap justify-center border-b-2 border-purple-400">
      <p class="p-2 text-xl text-grey-dark mx-4 mt-1 mb-2">
        Internship at Fluugle
      </p>
    </div>

    <h4 class="pl-2">Description:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ project.description }}
      </p>
    </div>

    <h4 class="pl-2">Duration:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ project.duration }}
      </p>
    </div>

    <h4 class="pl-2">Compensation:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ project.compensation }}
      </p>
    </div>

    <h4 class="pl-2">Desired Skills:</h4>
    <div class="flex flex-wrap justify-center sm:flex-grow">
      <span v-for="(rec, index) in project.recommendations" :key="index"
        class="flex-grow text-center bg-indigo-100 rounded-full px-4 py-2 mb-1 text-sm text-gray-700 mx-4">
        {{ rec }}
      </span> 
    </div>

    <div class="flex justify-center px-4 pb-2 pt-1 mt-2 pt-2 border-t-2 border-purple-400">
      <button v-on:click.stop="message()" class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">
        Message Recruiter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
  methods: {
    message() {
      return ''
    },
    mark(project) {
      project.marked = !project.marked
    }
  }
}
</script>

<style scoped>
  .marked {
    background-color: #e9d8fd;
    box-shadow: none;
  }
</style>