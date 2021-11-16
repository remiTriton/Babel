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
            -mt-24
          "
        >
          Technical Specifications
        </h2>
        <p class="mt-4 text-gray-500">
          This sparkling Gamay comes from sandstone soils in the south of the
          Ardèche. The grapes macerate in whole bunches, then a direct pressing
          juice is poured over the top and the whole continues to macerate for
          twenty-four days. The wine is bottled by gravity and the bottles are
          disgorged by Antony Tortul himself. Chuck may well have mechanics on
          the label, its strawberry aromas will work perfectly with an aperitif
          or dessert. Aging potential: five years.
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
          <div v-if="wine" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ wine.name }}</dt>
            <dt class="font-medium text-gray-900">{{ wine.year }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ wine.domain }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
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
          <button>
            <span
              class="
                btn
                inline-flex
                items-center
                px-3
                py-0.5
                rounded-full
                xl:text-xl
                font-medium
                bg-indigo-100
                text-indigo-800
              "
            >
              <svg
                class="-ml-1 mr-1.5 mt-35px h-2 w-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              ></svg>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      <router-link to="/winelist">
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
</style>