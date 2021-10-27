<template>
  <form @submit.prevent.stop>
    <p v-if="err" class="text-red-600">Mec tes mots de passes sont faux!</p>
    <p v-if="createdUser" class="text-green-600">Super t'es inscrit!</p>
    <div class="w-full bg-grey mt-40 ml-10" style="padding-top: 4rem;">
      <div class="container mx-auto py-8">
        <div class="block w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div class="py-4 px-8 text-white text-xl border-b border-grey-lighter">Register for a free account</div>
          <div class="py-4 px-8">
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
                <input v-model="firstName" class="appearance-none border rounded w-full py-2 px-3 text-black"
                       id="first_name" type="text"
                       placeholder="Your first name">
              </div>
              <div class="w-1/2 ml-1">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
                <input v-model="lastName" class="appearance-none border rounded w-full py-2 px-3 text-black"
                       id="last_name" type="text"
                       placeholder="Your last name">
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
              <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-black" id="email"
                     type="email"
                     placeholder="Your email address">
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
              <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-black" id="password"
                     type="password"
                     placeholder="Your secure password">
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold " for="password">Confirm Password</label>
              <input v-model="confirmPassword" class="appearance-none border rounded w-full py-2 px-3 text-black"
                     type="password"
                     placeholder="Confirm Password">
              <p class="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div>
              <button class="But hover:bg-dark font-bold py-2 px-4 rounded-full" type="submit"
                      @click="createUser">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <p class="text-center my-4">
          <a href="#" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      err: false,
      createdUser: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  },
  methods: {
    verifyPassword(password, confirmPassword) {
      // il faut que password existe
      // ET
      // il faut que
      if (
          password
          && password === confirmPassword
      ) {
        return true
      }
      return false

      // return password && password === confirmPassword;
    },
    async createUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      this.err = !this.verifyPassword(this.password, this.confirmPassword);

      if(this.err === false) {
        const resHttp = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify(user),
        });

        // real Backend JSON
        const res = await resHttp.json();
        if (res.id) {
          this.createdUser = true;
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.password = '';
        }
      }
    }
  }
}

</script>

<style scoped>
.But {
  background-color: white;
  position: center;
  color: #2a574c;
}
.block{
  background-color: #2a574c;
}
</style>