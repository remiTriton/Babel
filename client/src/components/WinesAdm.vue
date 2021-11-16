<template>
  <div class="md:pl-64 flex flex-col flex-1">
    <SearchB v-on:searchWine="search" v-on:color="filter" />

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

                  <Multiselect
                    class="text-black"
                    v-model="selected"
                    :options="options"             
                  mode="tags" @select="toggleSelected(value)"></Multiselect>
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="head bg-gray-50">
                      <tr>
                        <th
                          v-if="value !== 'name'"
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
                          v-if="value[''] != 'quantity'"
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
                          v-if="value != 'color'"
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
                          Commande
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
                          Add
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
                          v-if="value != 'name'"
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
                          v-if="value != 'quantity'"
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
                          v-if="value != 'color'"
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
                        <td>
                          <input
                            v-model="quantity"
                            class="
                              appearance-none
                              block
                              bg-gray-200
                              text-gray-700
                              border border-gray-200
                              rounded
                              py-3
                              px-4
                              leading-tight
                              focus:outline-none
                              focus:bg-white
                              focus:border-gray-500
                            "
                            id="grid-zip"
                            type="number"
                            placeholder="0"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            class="
                              round
                              inline-flex
                              items-center
                              p-2
                              border border-transparent
                              rounded-full
                              shadow-sm
                              text-white
                              bg-#2a574c-600
                              hover:bg-#2a574c-700
                              focus:outline-none
                              focus:ring-2
                              focus:ring-offset-2
                              focus:ring-#2a574c-500
                            "
                            @click="addOrder(wine._id, wine.quantity, quantity)"
                          >
                            <PlusSmIconSolid
                              class="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
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
import Multiselect from "@vueform/multiselect";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/vue/outline";
import SearchB from "./SearchB.vue";

export default {
  name: "WinesAdm",
  components: { Multiselect, PlusSmIconOutline, PlusSmIconSolid, SearchB },
  data() {
    return {
       value: [],
      options: [
        { name: 'Nom.', label: 'Nom' },
        { name: 'Quantity', label: 'Quantity' },
        { name: 'Color', label: 'Color' },
      ]
    
    };
  },
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
    async addOrder(id, wine, quantity) {
      await this.$store.dispatch("wines/updateWine", [
        id,
        {
          quantity: wine - quantity,
        },
      ]);
      this.quantity = "";
      await this.$store.dispatch("wines/fetchWines");
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
    toggleSelected(value) {
      alert(`${value.name}`);
      console.log(" >> " + `${value}`);
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.round {
  background-color: #2a574c;
  color: white;
}
.text{
  color: black;

}
</style>
