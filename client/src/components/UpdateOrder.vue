<template>
  <Suspense>
    <div class="mt-10">
      <MiniSearchBar v-on:searchWine="search" v-on:toggleCrud="show" />
      <div
        class="mx-60 ml-58 mr-16 mt-10 border-dashed border-2 border-gray-600"
        v-if="order"
      >
        <table class="table-auto mx-auto mt-5">
          <thead>
            <tr class="bg-gray-200">
              <th
                
                class="
                  px-6
                  py-3
                  text-center text-xs
                  font-medium
                  text-gray-500
                  text-
                  uppercase
                  tracking-wider
                "
              >
                Cuvée
              </th>
              <th
               
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
            </tr>
          </thead>

          <tbody v-for="wine in order.wines" :key="wine.id">
            <td class="apx-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <input v-if="order.status != 'Confirmed'" v-model="wine.cuvee" />
              <p v-else class="text-gray-500 text-sm">{{ wine.cuvee }}</p>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <input
                v-if="order.status != 'Confirmed'"
                v-model="wine.couleur"
              />
              <p v-else class="text-gray-500 text-sm">{{ wine.couleur }}</p>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <input
                v-if="order.status != 'Confirmed'"
                v-model="wine.quantite"
                type="number"
              />
              <p v-else class="text-gray-500 text-sm">{{ wine.quantite }}</p>
            </td>
            <button @click.prevent="Delete(wine.wineId)" class="remove">
              <td
                class="px-6 py-4 whitespace-nowrap"
                v-if="order.status != 'Confirmed'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </td>
            </button>
            <td v-if="order.status != 'Confirmed'">
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
        <div class="ml-5">Commandé par : {{ order.userEmail }}</div>
        <button
          @click.prevent="confirm()"
          class="
            on
            ml-32
            mt-10
            mb-10
            hover:bg-blue-700
            py-2
            px-4
            rounded-full
            text-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            text-white
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </Suspense>
</template>

<script>
import MiniSearchBar from "./MiniSearchBar.vue";

export default {
  name: "newOrder",

  components: { MiniSearchBar },
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
      await this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
    },
    search(query) {
      return order.filter((order) => {
        return this.order.wines.cuvee.indexOf(query) > -1;
      });
    },

    show() {
      this.showWines = !this.showWines;
    },

    async Delete(id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer ")) {
        await this.$store.dispatch("orders/delWine", [
          this.$route.params.id,
          { wineId: id },
        ]);
        await this.$store.dispatch(
          "orders/findOneOrder",
          this.$route.params.id
        );
      }
    },
    async confirm() {
      if (this.order.status == "Confirmed") {
        console.log("nope");
        return;
      } else {
        if (
          confirm(
            "Attention, une fois validée, vous ne pourrez plus modifier le bon de commande."
          )
        ) {
          for (let i = 0; i < this.order.wines.length; i++) {
            const res = await fetch("/api/wines/" + this.order.wines[i].wineId);
            const data = await res.json();
            const quantity = data.quantite;

            await this.$store.dispatch("wines/updateWine", [
              this.order.wines[i].wineId,
              {
                quantite: quantity - this.order.wines[i].quantite,
              },
            ]);
          }
          await this.$store.dispatch("orders/validateOrder", [
            this.$route.params.id,
            {
              status: "Confirmed",
            },
          ]);
        }
        this.$router.push("/Admin");
      }
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}
.round {
  background-color: #2a574c;
  color: white;
}
.col{

}
</style>
