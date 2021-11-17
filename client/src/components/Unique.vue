<template>
 <div class="bg-white">
    <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Description</h2>
        <p class="mt-4 text-gray-500">{{wine.description}}</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900"> Cuvée </dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.cuvee }}</dd>
          </div>
                <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Domaine</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.domaine }}</dd>
          </div>      <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Région</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.region }}</dd>
          </div>
              <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Millésime</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.millesime }}</dd>
          </div>    <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Pays</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.pays }}</dd>
          </div>    <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Prix</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.prix }} €</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="../assets/CN/Chuck.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="bg-gray-100 rounded-lg" />
        <img src="../assets/CN/Chuck.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="bg-gray-100 rounded-lg" />
        <img src="../assets/CN/Chuck.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="bg-gray-100 rounded-lg" />
        <img src="../assets/CN/Chuck.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="bg-gray-100 rounded-lg" />
      </div>
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
.back {
  background-color: #2a574c;
  float: right;
}
</style>