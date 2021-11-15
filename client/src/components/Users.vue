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
                    sm:rounded-lg
                  "
                >
                  <table>
                    <thead class="bg-gray-50"></thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="user in users" :key="user.id">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10"></div>
                            <div class="ml-4">
                              <router-link
                                :to="{
                                  name: 'Print',
                                  params: { id: user._id },
                                }"
                              >
                                <div class="text-sm font-medium text-gray-900">
                                  {{ user.firstname }}
                                </div>
                              </router-link>
                              <div class="text-sm text-gray-500">
                                {{ user.email }}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                          >
                            Active
                          </span>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ user.lastname }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-right text-sm
                            font-medium
                          "
                        >
                          <div class="model">
                            <td
                              class="
                                cru
                                px-6
                                py-4
                                whitespace-nowrap
                                text-right text-sm
                                font-medium
                              "
                            >
                              <router-link
                                :to="{
                                  name: 'UpdateUser',
                                  params: { id: user._id },
                                }"
                              >
                                <button
                                  class="
                                    text-indigo-600
                                    hover:text-indigo-900
                                    ml-5
                                  "
                                >
                                  Update
                                </button>
                              </router-link>
                              <button
                                class="
                                  text-red-600
                                  hover:text-red-900
                                  ml-5
                                  mr-5
                                "
                                @click.prevent="Delete(user.email, user._id)"
                              >
                                Delete
                              </button>
                            </td>
                          </div>
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