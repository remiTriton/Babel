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
          Technical Specifications
        </h2>
        <p class="mt-4 text-gray-500">
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists.
        </p>

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
            <dt class="font-medium text-gray-900">Domaine</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.domaine }}</dd>
            <dt class="font-medium text-gray-900">Cuvée</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.cuvee }}</dd>
            <dt class="font-medium text-gray-900">Région</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.region }}</dd>
            <dt class="font-medium text-gray-900">Millésime</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.millesime }}</dd>
            <dt class="font-medium text-gray-900">Pays</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.pays }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
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
      </div>
    </div>
    <router-link to="/winelist">
      <button
        type="button"
        class="
          back
          inline-flex
          items-center
          px-6
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-full
          shadow-sm
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    </router-link>
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
.back {
  background-color: #2a574c;
  float: right;
}
</style>