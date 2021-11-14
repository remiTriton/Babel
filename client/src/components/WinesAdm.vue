<template>
  <div class="md:pl-64 flex flex-col flex-1">
    <SearchB v-on:searchWine="search" v-on:color="filter" />
    <main class="flex-1">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->

          <div class="py-4">
            <div v-if="Dashboard" />
          </div>

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="my-2 overflow-x-auto  sm:-mx-center lg:-mx-center">
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
                  <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div
                        class="py-2 min-w-full align-middle inline-block sm:px-6 lg:px-8"
                      >
                        <div
                          class="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                          "
                        >
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="head bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  class="                        
                                    px-6
                                    py-3
                                    text-left text-xs
                                    font-medium
                                    text-gray-500
                                    uppercase
                                    tracking-wider
                                    ml-5
                                  "
                                >
                                  Nom
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    px-6
                                    py-3
                                    text-left text-xs
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
                                    text-left text-xs
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
                                    text-left text-xs
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
                                    text-left text-xs
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
                                    text-left text-xs
                                    font-medium
                                    text-gray-500
                                    uppercase
                                    tracking-wider
                                  "
                                >
                                  Colors
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                  <span class="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end of category bar -->
                  <table>
                    <thead class="bg-gray-50"></thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="wine in wines" :key="wine.id">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10"></div>
                            <div class="ml-4">
                              <router-link
                                :to="{
                                  name: 'Print',
                                  params: { id: wine._id },
                                }"
                              >
                                <div class="text-sm font-medium text-gray-900">
                                  {{ wine.name }}
                                </div>
                              </router-link>
                              <div class="text-sm text-gray-500">
                                {{ wine.quantity }}
                              </div>
                              <div class="text-sm text-gray-500">
                                {{ wine.status }}
                              </div>
                              <div class="text-sm text-gray-500">
                                {{ wine.color }}
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
                          {{ wine.role }}
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
                                ml-50
                              "
                            >
                              <router-link
                                :to="{
                                  name: 'Update',
                                  params: { id: wine._id },
                                }"
                              >
                                <button
                                  class="
                                    up
                                    text-indigo-600
                                    hover:text-indigo-900
                                    mr-35
                                    
                                  "
                                >
                                  Update
                                </button>
                              </router-link>
                              <button
                                class="
                                  de
                                  text-red-600
                                  hover:text-red-900
                                  ml-5
                                  mr-35
                                "
                                @click.prevent="Delete(wine.name, wine._id)"
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
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SearchB from "../components/SearchB.vue";

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

<style>
.head{

justify-content: space-evenly;
}
.up{
margin-inline-start: 600px;
}
.de{

}

</style>