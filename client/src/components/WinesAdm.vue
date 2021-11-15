<template>

  <div class="md:pl-64 flex flex-col flex-1">
    <SearchB v-on:searchWine="search" v-on:color="filter" />
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->

          <div class="py-4">
            <div v-if="Dashboard" />
          </div>

          <!-- This example requires Tailwind CSS v2.0+ -->
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
                        "
                      >
                        <div
                          class="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                  <table id="mama" class="w-full divide-y divide-gray-200" >
                    <thead class="head bg-gray-50">
                      <tr>
                        <!--bloc crud-->
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
                            uppercase
                            tracking-wider
                          "
                        >
                          Quantity
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
                          "
                        >
                          Colors
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
                          "
                        >
                          PAHT
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
                          "
                        >
                          PVTTC
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
                          "
                        >
                          PVC
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
                          "
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <!-- end of category bar -->
                    <tbody>
                      <tr v-for="wine in wines" :key="wine.id">
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          <router-link
                            :to="{
                              name: 'Print',
                              params: { id: wine._id },
                            }"
                          >
                            {{ wine.name }}
                          </router-link>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.quantity }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.color }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.price }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.price * 1.2 }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          holl
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          <router-link
                            :to="{
                              name: 'Update',
                              params: { id: wine._id },
                            }"
                          >
                            <button
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Update
                            </button>
                          </router-link>
                          <button
                            class="text-red-600 hover:text-red-900"
                            @click.prevent="Delete(wine.name, wine._id)"
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
  name: "WinesAdm",

  created() {
    this.$store.dispatch("wines/fetchWines");
  },
  computed: {
    wines() {
      return this.$store.state.wines.wines;
    },
  },
  methods: {
    toggle() {
      this.add = !this.add;
      this.dashboard = !this.dashboard;
    },
    async search(type, query) {
      await this.$store.dispatch("wines/searchWinesByName", [type, query]);
    },
    async filter(color) {
      await this.$store.dispatch("wines/searchWinesByColor", color);
    },
    async Delete(name, id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer " + name)) {
        await this.$store.dispatch("wines/deleteWine", id);
        await this.$store.dispatch("wines/fetchWines");
      }
    },
  },
};
</script>
