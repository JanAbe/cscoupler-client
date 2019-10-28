<template>
  <div class="self-center border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer"
    v-bind:class="{ marked: project.marked }"
    v-on:click.stop="mark(project)">

    <div class="flex justify-end pt-2 pr-3">
      <input hidden v-bind:checked="project.marked" type="checkbox" name="marked">
    </div>
    <div class="flex flex-wrap text-center">
      <p class="p-2 text-sm text-justify text-grey-dark mx-4 mt-1 mb-2 bg-purple-100 rounded-lg">
        {{ project.description }}
      </p>
    </div>
    <div class="flex justify-center px-4 pb-2 pt-1">
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