<template>
  <Suspense>
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
                            Cuvée
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
                            Quantité
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
                            Couleur
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
                               text-center text-xs
                            "
                          >
                            PVC
                          </th>

                          <th
                            v-if="order && order._id"
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
                            Commande
                          </th>

                          <th
                            v-if="order && order._id"
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
                               text-center text-xs
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
                               text-center text-xs
                            "
                          >
                            <router-link
                              :to="{
                                name: 'Print',
                                params: { id: wine._id },
                              }"
                            >
                              {{ wine.cuvee }}
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
                            {{ wine.quantite }}
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
                            {{ wine.couleur }}
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
                            {{ wine.prix }} €
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
                            {{ parseFloat(wine.prix * 1.2).toFixed(2) }} €
                          </td>
                          <td v-if="order && order._id">
                            <input
                              v-model="quantite"
                              class="
                                appearance-none
                                block
                                 text-center text-xs
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
                          <td v-if="order && order._id">
                            <button
                              type="button"
                              class="
                                round
                                inline-flex
                                items-center
                                 text-center text-xs
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
                              @click="addToOrder(order._id, wine._id, quantite)"
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
                               text-center text-xs
                              whitespace-nowrap
                              text-sm text-gray-500
                              ml-5
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
                                 text-center text-xs
                                  text-indigo-600
                                  hover:text-indigo-900
                                  ml-5
                                "
                              >
                                Update
                              </button>
                            </router-link>
                            <button
                              class="text-red-600 hover:text-red-900"
                              @click.prevent="Delete(wine.cuvee, wine._id)"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <router-link
                      v-if="order && order._id"
                      :to="{
                        name: 'updateOrder',
                        params: { id: order._id },
                      }"
                      ><button class="text-gray-900">
                        Valider
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </Suspense>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/vue/outline";
import SearchB from "./SearchB.vue";
import OrderDoing from "./OrderDoing.vue";

export default {
  name: "WinesAdm",
  components: {
    Multiselect,
    PlusSmIconOutline,
    PlusSmIconSolid,
    SearchB,
    OrderDoing,
  },
  data() {
    return { quantite: Number };
  },
  created() {
    this.$store.dispatch("wines/fetchWines");
  },
  computed: {
    wines() {
      return this.$store.state.wines.wines;
    },
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    toggle() {
      this.add = !this.add;
      this.dashboard = !this.dashboard;
    },

    async addToOrder(order, wine, quantite) {
      await this.$store.dispatch("orders/addProductToOrder", [
        order,
        { status: "En cours", id: wine, quantite: quantite },
      ]);
      this.quantite = "";
    },
    async search(type, query) {
      await this.$store.dispatch("wines/searchWinesByName", [
        type,
        query.charAt(0).toUpperCase() + query.slice(1),
      ]);
    },

    async filter(couleur) {
      await this.$store.dispatch("wines/searchWinesByColor", couleur);
    },

    async Delete(name, id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer " + name)) {
        await this.$store.dispatch("wines/deleteWine", id);
      }
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
.text {
  color: black;
}
.on {
  background-color: #2a574c;
}
</style>
