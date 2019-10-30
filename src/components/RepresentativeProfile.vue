<template>
  <div class="mx-auto container">
    <form id="representative-update-form" class="bg-white px-4 pt-4 pb-2 mb-2 border-b-2 border-purple-400">
      <h2 class="text-lg font-semibold text-md pb-6 mx-6 sm:mx-0">Your profile</h2>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block text-gray-700 mb-2 mt-6" for="first-name">
            First Name
          </label>
          <input id="first-name" v-model="firstname" type="text" placeholder="John" 
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.firstname }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block text-gray-700 mb-2 mt-6" for="last-name">
            Last Name
          </label>
          <input id="last-name" v-model="lastname" type="text" placeholder="Smith"
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.lastname }}</p>
        </div>
      </div>
      
      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 lg:mt-0">
          <label class="block text-gray-700 mb-2" for="email">
            Email
          </label>
          <input id="email" v-model="email" type="email" placeholder="johnsmith@email.com" 
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.email }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
        <div class="w-full px-3 lg:mt-0">
          <label class="block text-gray-700 mb-2" for="jobTitle">
            Job Title
          </label>
          <input id="jobTitle" v-model="jobTitle" type="text" placeholder="Recruiter" 
            class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300">
          <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.jobTitle }}</p>
        </div>
      </div>

      <div class="flex justify-center mt-4">
        <button v-on:click.stop="update()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600">Update profile</button>
      </div>
    </form>

    <div class="flex">
      <form class="bg-white rounded-lg px-4 pt-4 pb-2 mb-2 w-1/2">
        <h2 class="text-lg font-semibold text-md pb-1 mx-6 sm:mx-0">Add project</h2>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Description
            </label>
            <textarea v-model="description" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Duration
            </label>
            <textarea v-model="duration" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>

        <div class="flex flex-wrap mx-3 mb-6 sm:-mx-3">
          <div class="w-full px-3 lg:mt-0">
            <label class="block text-gray-700 mb-2" for="duration">
              Compensation
            </label>
            <textarea v-model="compensation" type="text" placeholder="..." 
              class="text-sm appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white hover:border-purple-300 focus:border-purple-300"></textarea>
            <p class="text-red-600 leading-tight text-xs italic pl-1">{{ validationErrors.duration }}</p>
          </div>
        </div>
        
        <div class="flex justify-center mt-4">
          <button v-on:click.stop="addProject()" class="text-xs font-semibold rounded-full px-6 py-2 bg-purple-500 border border-purple-400 text-white hover:bg-purple-600 hover:border-purple-600">Add project</button>
        </div>
      </form>

      <div class="w-1/2"> <!-- i want to add class="fixed", but doing so makes it not centered. And i don't know how to center it. -->
        <div class="text-xl mt-4 mb-2 md:ml-8 lg:mx-auto max-w-sm ">
          <h2>Live preview of the project</h2>
        </div>

        <div class="self-start border mb-2 rounded-lg bg-white md:ml-8 lg:mx-auto max-w-sm shadow-xl hover:shadow-none cursor-pointer">
          <div class="flex flex-wrap justify-center border-b-2 border-purple-400">
            <p class="p-2 text-xl text-grey-dark mx-4 mt-1 mb-2">
              Internship at {{ company }}
            </p>
          </div>

          <h4 class="pl-2">Description:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ description }}
            </p>
          </div>

          <h4 class="pl-2">Duration:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ duration }}
            </p>
          </div>

          <h4 class="pl-2">Compensation:</h4>
          <div class="flex flex-wrap text-center mb-1">
            <p class="px-2 py-1 text-sm text-justify text-grey-dark mx-4 mb-2 bg-purple-100 rounded-lg">
              {{ compensation }}
            </p>
          </div>

          <h4 class="pl-2">Desired Skills:</h4>
          <div class="flex flex-wrap justify-center sm:flex-grow">
            <span v-for="(rec, index) in recommendations" :key="index"
              class="flex-grow text-center bg-indigo-100 rounded-full px-2 py-1 mb-1 text-sm text-gray-700 mx-2">
              {{ rec }}
            </span> 
          </div>

          <div class="flex justify-center px-4 pb-2 pt-1 mt-2 pt-2 border-t-2 border-purple-400">
            <button class="disabled cursor-not-allowed text-xs font-semibold rounded-full px-4 py-1 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500">
              Message Recruiter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validationErrors: {},
      firstname: '',
      lastname: '',
      email: '',
      jobTitle: '',
      recommendations: [],
      description: '',
      compensation: '',
      duration: '',
      company: ''
    }
  },
  methods: {
    update() {
      return ''
    }
  }
}
</script>

<style>

</style>