<template>
  <div class="md:pl-64 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
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
                  <table class="w-full">
                    <thead class="bg-gray-50">
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
                        Quantité Totale
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
                        PAHT Total
                      </th>
                    </thead>

                    <tbody>
                        <tr v-for="wine in wines[0]" :key="wine.id"> 
                        <td
                          class="
                            px-6
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                            {{ wine._id }}
                       
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.quantite }}
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          {{ wine.prices }}
                        </td>
                        </tr>
                      <tr v-for="total in wines[1]" :key="total.id"> 
                      <td
                          class="
                            px-8
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          Total :
                        </td>
                    <td
                          class="
                            px-6
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{total.prices}}
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                             text-center text-xs
                            whitespace-nowrap
                            text-sm text-gray-500
                            bg-gray-200
                          "
                        >
                          {{total.quantite}}
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
name :"Kpi",

created() {
    this.$store.dispatch("wines/wineKpi");
  },

computed: {
    wines () {
      return this.$store.state.wines.wines;
    }
  },
}
</script>

<style>

</style>