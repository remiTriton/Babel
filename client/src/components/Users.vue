<template>
  <div class="md:pl-64 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div class="flex flex-col">
            <div class="my-2 overflow-x-auto sm:-mx-center lg:-mx-center">
              <div
                class="
                  py-2
                  align-middle
                  inline-block
                   text-center text-xs
                  min-w-full
                  sm:px-6
                  lg:px-8
                "
              >
                <div
                  class="
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                     text-center text-xs
                    sm:rounded-lg
                  "
                >
                  <table class="w-full">
                    <thead class="bg-gray-50">
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-center text-xs
                          font-medium
                          text-gray-500
                           text-center text-xs
                          uppercase
                          tracking-wider
                        "
                      >
                        Prénom
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-center text-xs
                          font-medium
                          text-gray-500
                           text-center text-xs
                          uppercase
                          tracking-wider
                        "
                      >
                        Nom
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-center text-xs
                          font-medium
                          text-gray-500
                           text-center text-xs
                          uppercase
                          tracking-wider
                        "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-center text-xs
                          font-medium
                          text-gray-500
                           text-center text-xs
                          uppercase
                          tracking-wider
                        "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        class="
                          px-6
                          py-3
                          text-center text-xs
                          font-medium
                          text-gray-500
                           text-center text-xs
                          uppercase
                          tracking-wider
                        "
                      >
                        Edit/Delete
                      </th>
                    </thead>

                    <tbody>
                      <tr v-for="user in users" :key="user.id">
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                             text-center text-xs
                          "
                        >
                          <router-link
                            :to="{
                              name: 'Print',
                              params: { id: user._id },
                            }"
                          >
                            {{ user.firstName }}
                          </router-link>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                             text-center text-xs
                          "
                        >
                          {{ user.lastName }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                             text-center text-xs
                          "
                        >
                          {{ user.email }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                             text-center text-xs
                          "
                        >
                          {{ user.role }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-right text-sm
                            font-medium
                             text-center text-xs
                          "
                        >
                          <router-link
                            :to="{
                              name: 'UpdateUser',
                              params: { id: user._id },
                            }"
                          >
                            <button
                              class="text-indigo-600 hover:text-indigo-900 ml-5"
                            >
                              Update
                            </button>
                          </router-link>
                          <button
                            class="text-red-600 hover:text-red-900 ml-5 mr-5"
                            @click.prevent="Delete(user.email, user._id)"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "users",
  created() {
    this.$store.dispatch("auth/getUsers");
  },
  computed: {
    users() {
      return this.$store.state.auth.users;
    },
  },
  methods: {
    async Delete(email, id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer " + email)) {
        await this.$store.dispatch("auth/delUser", id);
        await this.$store.dispatch("auth/getUsers");
      }
    },
  },
};
</script>

<style>
</style>