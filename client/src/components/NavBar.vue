<template>
  <div class=" flexo">
  <div>
    <nav class="grid grid-cols-3 gap-1 m-8">
      <router-link
        to="/blog"
        class="
          flex
          items-center
          px-3
          py-2
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
        </button>
      </div>
      <div class=" w-full lg:flex lg:items-center lg:w-auto">
        <div class="text-sm relative ">
          <router-link
            to="/WineList"
            class="     
              text-teal-200
              hover:text-white
            "
          >
            <img class="bb " src="../assets/Arches.png" atl="" />
          </router-link>
        </div>
        
<div class="flex space-x-4 mr-28 ">
        <div class="log">
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
            "
            >Login</router-link
          >
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
            "
            >Register</router-link
          >
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
            "
            @click.prevent="logout"
          >
            Logout
          </button>
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
            lg:mt-0
          "
          >Admin</router-link
        >
      </div>
      </div>
      </div>
    </nav>
  </div>
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
      await this.$router.push('/');
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
.log{
  margin-right: 100px;
}
</style>