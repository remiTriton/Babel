<template>
  <form @submit.prevent.stop>
    <p v-if="err" class="text-red-600">Mec tes mots de passes sont faux!</p>
    <p v-if="createdUser" class="text-green-600">Super t'es inscrit!</p>
    <div class="w-full bg-grey mt-40 ml-10" style="padding-top: 4rem">
      <div class="container mx-auto py-8">
        <div class="block w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div
            class="py-4 px-8 text-white text-xl border-b border-grey-lighter"
          >
            Editer utilisateur : {{ user.email }}
          </div>
          <div class="py-4 px-8">
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="first_name"
                  >First Name</label
                >
                <input
                  v-model="user.firstName"
                  class="
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-black
                  "
                  id="first_name"
                  type="text"
                  placeholder="Your first name"
                />
              </div>
              <div class="w-1/2 ml-1">
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="last_name"
                  >Last Name</label
                >
                <input
                  v-model="user.lastName"
                  class="
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-black
                  "
                  id="last_name"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div class="mb-4">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email"
                >Email Address</label
              >
              <input
                v-model="user.email"
                class="
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-black
                "
                id="email"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div> <div class="w-1/2 mr-1">
                <label
                  class="block text-grey-darker text-sm font-bold mb-2"
                  for="first_name"
                  >Role</label
                >
                <input
                  v-model="user.role"
                  class="
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-black
                  "
                  id="first_name"
                  type="text"
                  placeholder="Role"
                />
              </div>
              <button
                class="But hover:bg-dark font-bold py-2 px-4 rounded-full"
                type="submit"
                @click="updateUser"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <p class="text-center my-4">
          <a
            href="#"
            class="text-grey-dark text-sm no-underline hover:text-grey-darker"
            >I already have an account</a
          >
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Updateuser",
  props: ["id"],
  created() {
    this.$store.dispatch("auth/getOneUser", this.$route.params.id);
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
    async updateUser() {
      await this.$store.dispatch("auth/updateUserCrud", [
        this.$route.params.id,
        {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          role:this.user.role
        },
      ]);
      await this.$store.dispatch("auth/getUsers");
      await this.$router.push("/Admin");
    },
  },
};
</script>

<style scoped>
.But {
  background-color: white;
  position: center;
  color: #2a574c;
}
.block {
  background-color: #2a574c;
}
</style>