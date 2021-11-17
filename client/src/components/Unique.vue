<template>
  <div class="full bg-white">
    <div
      class="
        max-w-2xl
        mx-auto
        py-24
        px-4
        grid
        items-center
        grid-cols-1
        gap-y-16 gap-x-8
        sm:px-6 sm:py-32
        lg:max-w-7xl lg:px-8 lg:grid-cols-2
      "
    >
      <div>
        <h4
          class="
            text-xl
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-2xl
            -mt-24
          "
        >
          Description 
        </h4>
        <p class="mt-4 text-gray-500">
          {{wine.description}}
        </p><br><br>
        <dl
          class="
            
            mx-auto
            grid grid-cols-1
            gap-x-6 gap-y-10
            
            
          "
        >
          <div v-if="wine" class="border-t border-gray-200 pt-4">
            <dt class="text-6xl font-medium text-gray-900">{{ wine.cuvee }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.domaine }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.cepage }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.millesime }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.vigneron }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.couleur }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.region }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.pays }}</dt><br>
            <dt class="text-xl font-medium text-gray-900">{{ wine.quantite }}</dt><br>
            <dd class="text-2xl mt-2 text-sm text-gray-500">{{ wine.prix }}</dd>
            
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 mt-5">
        <img
          src="../assets/CN/Chuck.jpg"
          alt="Chuck is Back."
          class="bg-gray-100 rounded-lg"
        />
        <img
          src="../assets/CN/ChuckBack.jpg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          class="bg-gray-100 rounded-lg"
        />
        
      </div>
      <router-link to="/winelist">
      <button type="button" class="back inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
      </button>
    </router-link>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unique",

  created() {
    this.$store.dispatch("wines/findOnewines", this.$route.params.id);
  },
  computed: {
    wine() {
      return this.$store.state.wines.wine;
    },
  },
};
</script>

<style>
.btn {
  margin-top: 10px;
  background-color: #2a574c;
  color: white;
}
.back{
background-color: #2a574c;
float: right;
}

</style>