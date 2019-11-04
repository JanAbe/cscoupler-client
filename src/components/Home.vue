<template>
  <div class="">
    <div class="text-center text-3xl">
      CScoupler
    </div>
    <!-- <p class="leading-tight italic text-sm text-center mx-40">
      A platform for companies and students to 
      come in touch with one another, easing the internship hunt for students and easing the 
      quest of finding qualified students for companies.
    </p>

    <div class="mt-4 mx-40">
      <p class="text-center bg-gray-100">
        How it works. As a student you create an account, upload your resume, write short
        descriptions about your past experiences and tell about your skills. Then, you scroll
        through the posted internship projects, you mark the ones your find interesting and you
        contact a representative from the company that posted the project.
      </p>
      <p class="text-center mt-4 bg-gray-100">
        As a recruiter, you browse and search to find students that you think fit
        within your company and contact you.
        The search goes both ways, from student to company, and from company to student.
        CScoupler provides a central place where this can happen, with a focus on internships.
      </p>
    </div>
    <div class="flex justify-center mt-4">
      <router-link to="/signup/company" class="mx-2 py-2 px-2 text-sm rounded-full bg-white text-gray-700 border border-purple-400 hover:bg-purple-400 hover:text-white">
        Register your company today
      </router-link>

      <router-link to="/signup/student" class="mx-2 py-2 px-2 text-sm rounded-full bg-white text-gray-700 border border-purple-400 hover:bg-purple-400 hover:text-white">
        Create an account today
      </router-link>
    </div> -->

    <div class="lg:flex lg:justify-end mt-12 lg:mx-16">
      <div class="w-1/2 self-center pb-12 ml-8 mr-1">
        <p class="text-gray-700">
          Register your company and create the first representative account simultaneously.
          Use this account to send invitations to other company-representatives.
          <br>
          By registering your company, you gain access to to skilled students looking for internships.
          Browse through students, mark the ones your interested in, lookup their profile and resume,
          and contact the ones most suitable.
        </p>
        <div class="flex justify-center">
          <router-link to="/signup/company" class="mx-2 py-px px-12 text-xs rounded-full bg-purple-400 text-white border border-purple-400 hover:bg-purple-400 hover:text-white">
            Register
          </router-link>
        </div>
      </div>
      <img id="company-form" src="../assets/company_registration.png" class="w-1/2 rounded-lg ">
    </div>
    
    <div class="lg:flex lg:justify-end mt-12 lg:mx-16 mb-12">
      <img id="student-form" height="400" src="../assets/student_registration.png" class="w-1/2 rounded-lg">
      <div class="w-1/2 self-center pb-12 ml-8 mr-1">
        <p class="text-gray-700">
          Create an account and write about your skills and experiences and upload your resume.
          Then, search for companies or internship positions / projects you are interested in!
          Use this account to send invitations to other company-representatives.
        </p>
        <div class="flex justify-center">
          <router-link to="/signup/company" class="mx-2 py-px px-12 text-xs rounded-full bg-purple-400 text-white border border-purple-400 hover:bg-purple-400 hover:text-white">
            Register
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
    box-shadow: 47.1px 42.5px 25px -25px rgba(50,50,93,.5),16.2px 37.5px 75px -37.5px rgba(0,0,0,.6);
    transform: skewX(-2deg);
  }

  #student-form {
    box-shadow: -47.1px 42.5px 25px -25px rgba(50,50,93,.5), 16.2px 37.5px 35px -27.5px rgba(0,0,0,.6);
    transform: skewX(2deg);
  }
</style>
