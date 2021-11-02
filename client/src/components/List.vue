<template>
  <div>
    <div class="container mt-40">
      <div class="flex items-center text-black">
               <v-form @submit.prevent.stop>
 <button type="submit" @click='searchWine(searchQuery)'
 ><svg
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
        </svg></button>
          <input
            type="text"
            name="name"
            placeholder="Search..."
            v-model="searchQuery"
            class="
              w-/10
              py-2
              border-b-2 border-gray-400
              outline-none
              focus:border-green-400
            "
        /></v-form>
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
        <h2 class="sr-only">Products</h2>

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
          <a
            v-for="product in products"
            :key="product.id"
            :href="product.href"
            class="group"
          >
            <div
              class="
                w-full
                aspect-w-1 aspect-h-1
                bg-gray-200
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="
                  w-full
                  h-full
                  object-center object-cover
                  group-hover:opacity-75
                "
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ product.name }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ product.price }}
            </p>
          </a>
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
const products = [
  {
    id: 1,
    name: "Chuck is Back",
    href: "/Print",
    price: "50€",
    imageSrc: "src/images/../assets/Chuck.jpg",
    imageAlt: "La Sorga",
  },
  {
    id: 2,
    name: "Maître Splinter",
    href: "/Print",
    price: "40€",
    imageSrc: "src/images/../assets/MS.jpg",
    imageAlt: "Maître Splinter",
  },
  {
    id: 3,
    name: "Bruce Lee",
    href: "/Print",
    price: "89€",
    imageSrc: "src/images/../assets/BL.jpg",
    imageAlt: "Bruce Lee",
  },
  {
    id: 4,
    name: "Yodel Master",
    href: "/Print",
    price: "35€",
    imageSrc: "src/images/../assets/YM.jpg",
    imageAlt: "Yodel Master",
  },
  // More products...
];

export default {
  setup() {
    return {
      products,
    };
  },
  methods: {
    async searchWine(searchQuery) {
      const res = await fetch(
        "http://localhost:3001/api/wines/date/" + searchQuery
      );
      const data = await res.json();
      console.log(data);
      console.log(searchQuery);
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