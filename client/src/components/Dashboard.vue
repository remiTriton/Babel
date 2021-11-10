<template>
  <div class="container flex-col ">
    <div class="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 justify-content-space-evenly">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w- divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="N px-6 py-3 text-align text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-align text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantite
              </th>
              <th scope="col" class="px-6 py-3 text- text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text- text-xs font-medium text-gray-500 uppercase tracking-wider">
                Color
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="person in people" :key="person.email">
              <td class="px-6 py-4 whitespace-nowrap min-w-full">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                  </div>
                  <div class="ml-4">
                    <div class="text-center-sm font-medium text-gray-900">
                      {{ person.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ person.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ person.title }}</div>
                <div class="text-sm text-gray-500">{{ person.department }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.role }}
              </td>
              <div class="model">
                <td class="cru px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-indigo-600 hover:text-indigo-900 ml-5" @click="onClick">Edit</button>
                  <button class="text-yellow-600 hover:text-yellow-900 ml-5" @click="onClick">Update</button>
                  <button class="text-red-600 hover:text-red-900 ml-5 mr-5" @click="onClick">Delete</button>
                </td>
              </div>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: 'Chuck is Back',
    color: 'Sparkling Red',
    domain: 'La Sorga',
    image: 'src/images/../assets/Chuck.jpg',
  },
  // More people...
]

export default {
  name: "Dashboard",
  data() {
    return {
      people,
      wines,
      domain: this.domain,
      winemaker: this.winemaker,
      grapeVariety: this.grapeVariety,
      year: this.year,
      description: this.description,
      wineName: this.wineName,
      region: this.region,
      state: this.state,
      quantity: this.quantity,

    }
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("wine/updateWines", {
        domain: this.domain,
        winemaker: this.winemaker,
        grapeVariety: this.grapeVariety,
        year: this.year,
        description: this.description,
        wineName: this.wineName,
        region: this.region,
        state: this.state,
        quantity: this.quantity,
      });
    },
    reload() {
      this.$router.go();
    },
  }

}
</script>

<style>
.container {
  display: flex;
  margin-left: 350px;
}

.model {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}


</style>