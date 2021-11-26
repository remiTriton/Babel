<template>
  <div class="ml-80 mr-16 mt-10 border-dashed border-2 border-gray-600" v-if="order._id">
    <p class="ml-16 text-gray-500 text-sm mt-10">Bon de commande en cours :</p>
<div class=" px-2 py-1 ">
    <table class="mx-auto table-auto mt-10 text-center border-2 border-light-blue-500 border-opacity-25">
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
              text-center
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
              text-center
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
        <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
          <input v-if="order.status != 'Confirmed'" v-model="win.couleur" />
          <p v-else class="text-gray-500 text-sm">{{ win.couleur }}</p>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <p class="text-gray-500 text-sm">{{ win.quantite }}</p>
        </td>
      </tbody>
    </table>
</div>
    <div class="text-gray-500 text-sm ml-5 mt-10">
      Commandé par : {{ order.userEmail }}
    </div>
    <router-link
        v-if="order._id && order.status != 'Confirmed'"
        :to="{
          name: 'updateOrder',
          params: { id: order._id },
        }"
        ><button class="on ml-32 mt-10 mb-10  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">

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
              d="M5 13l4 4L19 7"
            />
          </svg></button
      ></router-link>
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
.on{
  background-color: #2a574c;
}
</style>