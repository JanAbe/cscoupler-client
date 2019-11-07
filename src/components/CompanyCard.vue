<template>
  <div class="self-start border mb-6 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none">
    <div class="sm:flex sm:items-center">
      <div class="text-center py-1 sm:text-left sm:flex-grow">
        <div class="mb-1 border-b-2 border-purple-400 pb-2">
          <p class="text-xl text-center leading-tight">
            {{ company.name }} 
          </p>
        </div>
      </div>
    </div>
    
    <h4 class="pl-3">Company description:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ company.description }}
      </p>
    </div>

    <h4 class="pl-3">Internship info:</h4>
    <div class="flex flex-wrap text-center mb-1">
      <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
        {{ company.information }}
      </p>
    </div>

    <h4 class="pl-3">Offices in:</h4>
    <div class="flex flex-wrap justify-start sm:flex-grow">
      <span v-for="(loc, index) in company.locations" :key="index"
        class="text-center bg-indigo-100 rounded-full px-4 py-px mb-1 text-sm text-gray-700 mx-4">
        {{ loc.city }}
      </span> 
    </div>

    <div class="flex flex-wrap text-center mb-1 mt-3 border-t-2 border-purple-400 pt-2 pb-1">
      <p class="px-2 pt-1 text-sm text-justify text-grey-dark mx-4 bg-gray-100 rounded-lg">
        Currently <strong>{{ company.projects.length }}</strong> projects listed.
        <br>Press the button below to go the company profile and take
        a look at their projects!
      </p>
    </div>

    <div class="flex justify-center px-4 pb-2 pt-1">
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