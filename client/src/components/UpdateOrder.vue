<template>
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
    Commandé par : {{ order.userEmail }}

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
              Quantité
            </th>
          </tr>
        </thead>
        <tbody v-for="wine in order.wines" :key="wine.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-model="wine.cuvee" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <input v-model="wine.quantite" type="number" />
          </td>
          <td>
            <button
              @click.prevent="updateOrd(wine.id, wine.quantite)"
              class="text-black"
            >
              Editer
            </button>
          </td>
        </tbody>
      </table>
    </div>
    <button class="text-black">Valider commande</button>
  </div>
</template>

<script>
export default {
  name: "UpdateOrder",
  created() {
    this.$store.dispatch("orders/findOneOrder", this.$route.params.id);
  },
  computed: {
    order() {
      return this.$store.state.orders.order;
    },
  },
  methods: {
    async updateOrd(id, quantite) {
      await this.$store.dispatch("orders/updateOrder", [
        this.$route.params.id,
        { wines:{
        }},
      ]);
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}
</style>