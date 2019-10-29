<template>
  <div class="self-start border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer">
    <div class="sm:flex sm:items-center px-2">
      <div class="text-center py-1 sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">
            {{ company.name }} 
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ company.information }}
      </p>
    </div>

    <div class="flex flex-wrap justify-center sm:flex-grow">
      <span v-for="(loc, index) in company.locations" :key="index"
        class="flex-grow text-center bg-indigo-100 rounded-full px-4 py-2 mb-1 text-sm text-gray-700 mx-4">
        {{ loc.city }}
      </span> 
    </div>

    <h4 class="pl-2">Number of projects listed:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ company.projects.length }}
      </p>
    </div>

    <div class="flex justify-between px-4 pb-2 pt-1">
      <router-link :to="companyProfileURL" class="text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">Go to profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: ['company'],
  computed: {
    companyProfileURL: function() {
      return '/companies/' + this.company.id + '/profile'
    }
  }
}
</script>

<style scoped>

</style>