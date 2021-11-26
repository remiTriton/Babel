<template>
  <div class="mt-10">
    <MiniSearchBar v-on:searchWine="search" v-on:toggleCrud="show" />

    <div class="mx-60">
      <table class="table-auto mx-96">
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
          </tr>
        </thead>

        <tbody v-for="wine in order.wines" :key="wine.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-if="order.status != 'Confirmed'" v-model="wine.cuvee" />
            <p v-else class="text-gray-500 text-sm">{{ wine.cuvee }}</p>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-if="order.status != 'Confirmed'" v-model="wine.couleur" />
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
          <button @click.prevent="Delete(wine._id)" class="remove">
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
      <div>Commandé par : {{ order.userEmail }}</div>
    </div>

    <button
      @click.prevent="confirm()"
      class="btn bg-green-900 text-2xl ml-5 rounded-full py-3 px-6"
    >
      ↵
    </button>
  </div>
</template>

<script>
import MiniSearchBar from "./MiniSearchBar.vue";
import WinesAdmOrder from "./WinesAdmOrder.vue";

export default {
  name: "UpdateOrder",

  components: { MiniSearchBar, WinesAdmOrder },
  data() {
    return { showWines: false };
  },
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
    search(query) {
      return order.filter((order) => {
        return this.order.wines.cuvee.indexOf(query) > -1;
      });
    },
    async Delete(name, id) {
      if (confirm("Attention : Vous êtes sur le point de supprimer " + name)) {
        await this.$store.dispatch("wines/deleteWine", id);
      }
    },
    show() {
      this.showWines = !this.showWines;
    },
    async confirm() {
      if (this.order.status == "Confirmed") {
        console.log("nope");
        return;
      }
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

      this.$router.push('/Admin');
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
.btn {
  color: white;
}
</style>
