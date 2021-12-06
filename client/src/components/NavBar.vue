<template>
  <div class=" flexo">
    <nav class="grid grid-cols-3 gap-1 m-8">
      <router-link
        to="/blog"
        class="
        col-span-1
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
          <router-link
            to="/WineList"
            class="
              text-teal-200
              hover:text-white
            "
          >
            <img class="bb " src="../assets/Arches.png" atl="" />
          </router-link>

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

      <div v-if='auth?.user?.role === "Admin"'>
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
    </nav>
  </div>

</template>

<script>
export default {
  name: "NavBar",
  computed: {
    auth() {
      return this.$store.state.auth.user;
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
