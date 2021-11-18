<template>
  <div>
    <nav class="flexo">
      <router-link
        to="/blog"
        class="
          flex
          items-center
          px-3
          py-2
          ml-20
          hover:text-white hover:border-white
          text-4xl
        "
      >
        ISI
      </router-link>
      <div class="block lg:hidden">
        <button
          class="
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title class="cat">Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/WineList"
            class="
              
              block
              mt-4
              ml-30
              text-center
              lg:inline-block lg:mt-0
              text-teal-200
              hover:text-white
            "
          >
            <img class="bb" src="../assets/Arches.png" atl="" />
          </router-link>
        </div>

        <div>
          <router-link
            v-if="!auth"
            to="/login"
            class="
              
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-teal-500 hover:bg-white
              mt-4
              lg:mt-0
            "
            >Login</router-link
          >
        </div>
        <div>
          <button
            v-if="auth"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-teal-500 hover:bg-whiteq
              mt-4
              lg:mt-0
            "
            @click.prevent="logout"
          >
            Logout
          </button>
        </div>
        <div>
          <router-link
            v-if="!auth"
            to="/register"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-teal-500 hover:bg-white
              mt-4
              lg:mt-0
            "
            >Register</router-link
          >
        </div>
      </div>
      <div>
        <router-link
          to="/Admin"
          class="
            inline-block
            text-sm
            px-4
            py-2
            leading-none
            border
            rounded
            text-white
            border-white
            hover:border-transparent hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
          "
          >Admin</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    auth() {
      return this.$store.state.auth.token;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style>
.flexo {
display: flex;
  background-color: #2a574c;
  display: flex;
  justify-content: space-around;
}
.bb {
  width: 150px;
  height: 150px;
  
}
</style>