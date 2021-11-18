<template>
  <div>
    <MiniSearchBar />
  <div
    px-6
    py-3
    text-center
    text-xs
    font-medium
    text-gray-500
    uppercase
    tracking-wider
  >

    <div>
      <table class="table-auto">
        <thead>
          <tr>
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
              "
            >
              Quantité
            </th>
            <th>
              <div>
                <button
                  v-if="!command"
                  @click="nouveauBon(auth.user.email)"
                  type="button"
                  class="B
                  px-6
                py-3
                text-center text-xs
                font-medium
                text-gray-500
                uppercase
                tracking-wider"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </th>
          </tr>
        </thead>

        <tbody v-for="wine in order.wines" :key="wine.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-model="wine.cuvee" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-model="wine.couleur" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-model="wine.quantite" type="number" />
          </td>
          <td>
            <button
              @click.prevent="
                updateOrd(wine.cuvee, wine.couleur, wine.quantite)
              "
              class="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </td>
        </tbody>
      </table>
    </div>
    <button class="text-black">
    Valider commande</button>
  </div>
  <div>Commandé par : {{ order.userEmail }}</div>
  </div>
</template>

<script>

import MiniSearchBar from './MiniSearchBar.vue';


export default {
  name: "UpdateOrder",

  components:{MiniSearchBar},

  created() {
   this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
  },
  computed: {
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    async updateOrd(cuvee, couleur, quantite) {
      await this.$store.dispatch("orders/updateOrder", [
        this.$route.params.id,
        { cuvee: cuvee, couleur: couleur, quantite: quantite },
      ]);
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}

.B {
  color: #2a574c;
}

.round {
  background-color: #2a574c;
  color: white;
}
</style>
