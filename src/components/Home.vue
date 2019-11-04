<template>
  <div>
    <div class="text-xl pl-56 pt-8 pb-20">
      CScoupler, the new <u>platform</u> for finding computer-science related <u>internships</u>.
      <br>
      Find your internships, or <u>suitable candidates</u> here.
    </div>

    <div class="lg:flex lg:mx-16 pb-10 border-b border-purple-400">
      <div class="w-1/2 ml-8 mr-1">
        <h2 class="px-32 text-center text-gray-700 text-2xl pb-8">Companies</h2>
        <p class="text-gray-700 px-32 tracking-wide">
          Register your company and create the first representative account simultaneously.
          <br>
          Use this account to send invitations to other company-representatives.
          <br>
          By registering your company, you gain access to to skilled students looking for internships.
          Browse through students, mark the ones you are interested in, look up their profile and resume,
          and contact the ones most suitable.
        </p>
        <div class="flex justify-center my-8">
          <router-link to="/signup/company" class="uppercase rounded mx-2 py-3 px-12 text-sm font-semibold bg-purple-400 text-white border border-purple-400 hover:bg-purple-500 hover:text-white">
            Sign up for free
          </router-link>
        </div>
      </div>
      <img id="company-form" src="../assets/company_registration.png" class="w-1/2 rounded-lg ">
    </div>
    
    <div class="lg:flex lg:items-start mt-12 lg:mx-16 mb-12">
      <img id="student-form" height="400" src="../assets/student_registration.png" class="w-1/2 rounded-lg">
      <div class="w-1/2 ml-8 mr-1 mt-24">
        <h2 class="px-32 text-center text-gray-700 text-2xl pb-8">Students</h2>
        <p class="text-gray-700 px-32">
          Create an account, write about your skills and experiences and upload your resume.
          Then, search for companies or internship positions / projects you are interested in!
        </p>
        <div class="flex justify-center my-8">
          <router-link to="/signup/student" class="uppercase rounded font-semibold mx-2 py-3 px-12 text-sm bg-purple-400 text-white border border-purple-400 hover:bg-purple-500">
            Sign up for free
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center mt-4">
      <div class="mx-2 py-4 px-2 bg-purple-500 text-white rounded-sm">
        Search through over 100+ internship projects
      </div>

      <div class="mx-2 py-4 px-2 bg-purple-500 text-white rounded-sm">
        Over 70 registered students are looking for an internship.
      </div>

      <div class="mx-2 py-4 px-2 bg-purple-500 text-white rounded-sm">
        More than 10 companies have recruiters looking for students
      </div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #company-form {
    box-shadow: 47.1px 42.5px 25px -25px rgba(63, 47, 109, 0.39), 16.2px 37.5px 75px -37.5px rgba(89, 57, 230, 0.6);
    transform: skewX(-1deg);
  }

  #student-form {
    box-shadow: -47.1px 42.5px 25px -25px rgba(85, 63, 146, 0.39), 16.2px 37.5px 35px -37.5px rgba(89, 57, 230, 0.6);
    transform: skewX(1deg);
    height: 700px;
  }
</style>
