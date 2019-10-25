<template>
  <div class="w-full px-3 mb-3 lg:mb-1 mt-2">
    <textarea v-model="experience" type="text" maxlength="100"
      class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
  </div>
</template>

<script>
export default {
  name: 'StudentExperienceTextArea',
  props: ['experience'],
}
</script>

<style>

</style>