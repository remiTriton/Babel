<template>
  <div class="bg-white">
    <div
        class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div>

        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl -mt-24">Technical
          Specifications</h2>
        <p class="mt-4 text-gray-500">This sparkling Gamay comes from sandstone soils in the south of the Ardèche.
          The grapes macerate in whole bunches, then a direct pressing juice is poured over the top and the whole
          continues to macerate for twenty-four days.
          The wine is bottled by gravity and the bottles are disgorged by Antony Tortul himself.
          Chuck may well have mechanics on the label, its strawberry aromas will work perfectly with an aperitif or
          dessert. Aging potential: five years.
        </p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="../assets/CN/Chuck.jpg" alt="Chuck is Back." class="bg-gray-100 rounded-lg"/>
        <img src="../assets/CN/ChuckBack.jpg"
             alt="Top down view of walnut card tray with embedded magnets and card groove."
             class="bg-gray-100 rounded-lg"/>
        <div>
          <input
              v-model="quantity"
              class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-zip"
              type="number"
              placeholder="0"
          />
        </div>
        <div>
          <button> <span
              class="btn inline-flex items-center px-3 py-0.5 rounded-full xl:text-xl font-medium bg-indigo-100 text-indigo-800">
    <svg class="-ml-1 mr-1.5 mt-35px h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">

    </svg>
   Add to Cart
  </span></button>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
const features = [

  {name: 'Domain', description: 'South of Ardèche.'},
  {name: 'Color', description: 'Sparkling Red.'},
  {name: 'Year', description: '2017'},
  {name: 'Grape Variety', description: '100% Gammay'},
]

export default {
  name: "Unique",

  setup() {
    return {
      features,
    }
  },
}
</script>

<style>
.btn{
  margin-top: 10px;
  background-color: #2a574c;
  color: white;
}
</style>