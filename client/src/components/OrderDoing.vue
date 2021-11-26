<template>
  <div class="mx-60" v-if="order._id">
    <p class="text-gray-500 text-sm mt-10">Bon de commande en cours :</p>

    <table class="table-auto mt-10">
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

      <tbody v-for="win in order.wines" :key="win.id">
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <input v-if="order.status != 'Confirmed'" v-model="win.cuvee" />
          <p v-else class="text-gray-500 text-sm">{{ win.cuvee }}</p>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <input v-if="order.status != 'Confirmed'" v-model="win.couleur" />
          <p v-else class="text-gray-500 text-sm">{{ win.couleur }}</p>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <p class="text-gray-500 text-sm">{{ win.quantite }}</p>
        </td>
      </tbody>
    </table>
    <div class="text-gray-500 text-sm mt-10">
      Commandé par : {{ order.userEmail }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDoing",
  computed: {
    order() {
      return this.$store.state.orders.order;
    },
    
  },
};
</script>

<style>
</style>