<template>
  <div class="bg-white">
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
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Description
        </h2>
        <p class="mt-4 text-gray-500">{{ wine.description }}</p>

        <dl
          class="
            mt-16
            grid grid-cols-1
            gap-x-6 gap-y-10
            sm:grid-cols-2 sm:gap-y-16
            lg:gap-x-8
          "
        >
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Cuvée</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.cuvee }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Domaine</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.domaine }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Vigneron</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.vigneron }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Cépage</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.cepage }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Pays</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.pays }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Région</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.region }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Département</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.departement }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Millésime</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.millesime }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Couleur</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.couleur }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Prix</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.prix }} €</dd>
          </div>
        </dl>
      </div>
      <div class="">
        <img class="w-full" v-bind:src="wine.imgBase64" />
        
      </div>
    </div>
    <button
      class="
        back
        border border-teal-500
        text-teal-500
        block
        rounded-sm
        font-bold
        py-4
        px-6
        mr-2
        flex
        items-center
        hover:bg-teal-500 hover:text-white
      "
      @click="back()"
    >
      <svg
        class="h-5 w-5 mr-2 fill-current"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-49 141 512 512"
        style="enable-background: new -49 141 512 512"
        xml:space="preserve"
      >
        <path
          id="XMLID_10_"
          d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
        ></path>
      </svg>
    </button>
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
  methods: {
    back() {
      this.$router.back(-1);
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
.back {
  background-color: #2a574c;
  float: right;
}
</style>