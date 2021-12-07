<template>
  <div class="md:pl-64 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto px-4 sm:px-6 md:px-8">
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
                   text-center text-xs
                "
              >
                <div
                  class="
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                    sm:rounded-lg
                     text-center text-xs
                  "
                >
                  <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div
                        class="
                          py-2
                          align-middle
                          inline-block
                          min-w-full
                          sm:px-6
                          lg:px-8
                           text-center text-xs
                        "
                      >
                        <div
                          class="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                             text-center text-xs
                          "
                        ></div>
                      </div>
                    </div>
                  </div>

                  <!-- <Multiselect
                    class="text-black"
                    v-model="selected"
                    :options="options"             
                  mode="tags" @select="toggleSelected(value)"></Multiselect> -->
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="head bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-center text-xs
                            font-medium
                            text-gray-900
                            uppercase
                            tracking-wider
                             text-center text-xs
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
                            uppercase
                            tracking-wider
                             text-center text-xs
                          "
                        >
                          Numéro de commande
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-center text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                             text-center text-xs
                          "
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-center text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                             text-center text-xs
                          "
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <!-- end of category bar -->
                    <tbody>
                      <tr v-for="(order, i) in orders" :key="order.id">
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
                              name: 'updateOrder',
                              params: { id: order._id },
                            }"
                          >
                            {{ order.userEmail }}
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
                          {{ i }}
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
                          {{ order.Created.slice(0, 21) }}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                            ml-5
                             text-center text-xs
                          "
                        >
                          <router-link
                            :to="{
                              name: 'updateOrder',
                              params: { id: order._id },
                            }"
                          >
                            <button
                              class="text-indigo-600 hover:text-indigo-900 ml-5"
                            >
                              Update
                            </button>
                          </router-link>
                          <button
                            class="text-red-600 hover:text-red-900"
                            @click.prevent="Delete(order._id)"
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
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ordersCrud",
  created() {
    this.$store.dispatch("orders/fetchOrders");
  },
  computed: {
    orders() {
      return this.$store.state.orders.orders;
    },
  },
  methods: {
    async Delete(id) {
      await this.$store.dispatch("orders/deleteOrder", id);
    },
  },
};
</script>

<style>
</style>