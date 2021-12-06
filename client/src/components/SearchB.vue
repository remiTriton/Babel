<template>
  <div>
    <div class="container mt-10">
      <div class="flex items-center text-black">
        <form @submit.prevent.stop>
          <button type="submit" @click.prevent="searchWine(type, query)">
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
            v-on:keyup.enter="searchWine(type, query)"
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
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="search"
                />
                <span class="text-gray-500 ml-2">Cuvée</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="domaine"
                  v-model="type"
                />
                <span class="text-gray-500 ml-2">Domaine</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  value="pays"
                  v-model="type"
                />
                <span class="text-gray-500 ml-2">Pays</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="radio"
                  class="form-radio"
                  name="accountType"
                  v-model="type"
                  value="region"
                />
                <span class="text-gray-500 ml-2">Région</span>
              </label>
            </div>
          </div></form
        >
      </div>

      <span>
        <button
          class="
            test
            bg-transparent
            font-bold
            hover:text-#2a574c hover:border-transparent
            br-5
            rounded
          "
          @click="filter('Bubble', query)"
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
          @click="filter('Rouge',query)"
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
          @click="filter('Blanc',query)"
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
          @click="filter('Rose',query)"
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
          @click="filter('Beer',query)"
        >
          Beer
        </button></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchB.vue",
  data() {
    return {
      query: "",
      type: "",
    };
  },
  methods: {
    searchWine(type, query) {
      this.$emit("searchWine", type, query);
    },
    filter(query,color) {
      this.$emit("color", color,query);
    },
  },
};
</script>

<style scoped>
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
