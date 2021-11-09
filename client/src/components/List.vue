<template>
  <div>
    <div class="container mt-40">
      <div class="flex items-center text-black">
        <v-form @submit.prevent.stop>
          <button type="submit" @click="searchWine(type, query)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            name="name"
            placeholder="Search..."
            v-model="query"
            class="
              w-/10
              py-2
              border-b-2 border-gray-400
              outline-none
              focus:border-green-400
            "
          />
          <div class="mt-4">
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="dpt"
                />
                <span class="ml-2">Département</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="domain"
                  v-model="type"
                />
                <span class="ml-2">Domaine</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="search"
                />
                <span class="ml-2">Nom</span>
              </label>
            </div>
          </div></v-form
        >
      </div>

      <span>
        <button
          class="
            test
            bg-transparent
            text-#2a574c
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          :value="bubble"
          @click="filter('Bubble')"
        >
          Bubble
        </button></span
      >

      <span>
        <button
          class="
            test
            bg-transparent
            text-#2a574c
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          @click="filter('Rouge')"
        >
          Red
        </button></span
      >

      <span>
        <button
          class="
            test
            bg-transparent
            text-#2a574c
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          @click="filter('Blanc ')"
        >
          White
        </button></span
      >

      <span>
        <button
          class="
            test
            bg-transparent
            text-#2a574c
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          @click="filter('Rose')"
        >
          Rosé
        </button></span
      >

      <span>
        <button
          class="
            test
            bg-transparent
            text-#2a574c
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          @click="filter('Beer')"
        >
          Beer
        </button></span
      >
    </div>
    <div class="bg-white">
      <div
        class="
          max-w-2xl
          mx-auto
          py-16
          px-4
          sm:py-24 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <h2 class="sr-only">wines</h2>

        <div
          class="
            grid grid-cols-1
            gap-y-10
            sm:grid-cols-2
            gap-x-6
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-x-8
          "
        >
          <div v-for="wine in wines" :key='wine.id'>
            <div
              class="
                w-full
                aspect-w-1 aspect-h-1
                bg-gray-200
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
              v-if='wine._id'
            >
              <router-link :to="{ name: 'Print', params: { id: wine._id } }">
                <img
                  src="src/images/../assets/Chuck.jpg"
                  :alt="wine.name"
                  class="
                    w-full
                    h-full
                    object-center object-cover
                    group-hover:opacity-75
                  "
              /></router-link>
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ wine.name }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ wine.domain }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/">
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
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("wines/fetchWines");
  },
  computed: {
    wines() {
      return this.$store.state.wines.wines;
    },
  },
  methods: {
    async searchWine(type, query) {
      await this.$store.dispatch("wines/searchWinesByName", [type, query]);
    },

    async filter(value) {
      await this.$store.dispatch("wines/searchWinesByColor", value);
    },
  },
};
</script>

<style>
.bbl {
  background-color: #2a574c;
  text-decoration-color: #2a574c;
}
.test {
  border-color: #2a574c;
  color: #2a574c;
}
.container {
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  font-size: large;
}
.back {
  color: #2a574c;
  float: right;
  position: relative;
}
</style>
