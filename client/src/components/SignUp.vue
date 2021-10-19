<template>
  <form>
  <div class="w-full bg-grey" style="padding-top: 4rem;">
    <div class="container mx-auto py-8">
      <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
        <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
        <div class="py-4 px-8">
          <div class="flex mb-4">
            <div class="w-1/2 mr-1">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">First Name</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-black" id="first_name" type="text"
                     placeholder="Your first name">
            </div>
            <div class="w-1/2 ml-1">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">Last Name</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-black" id="last_name" type="text"
                     placeholder="Your last name">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-black" id="email" type="email"
                   placeholder="Your email address">
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-black" id="password" type="password"
                   placeholder="Your secure password">
            <p class="text-grey text-xs mt-1">At least 6 characters</p>
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold " for="password">Confirm Password</label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-black" type="password"
                   placeholder="Confirm Password">
            <p class="text-grey text-xs mt-1">At least 6 characters</p>
          </div>
          <div>
            <button class="But bg-blue hover:bg-dark text-white font-bold py-2 px-4 rounded-full" type="submit"
                    @onclick="onclick">
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
  name: "SignUp"
,
}

</script>

<style scoped>
.But {
  background-color: #2a574c;
  position: center;
}
</style>