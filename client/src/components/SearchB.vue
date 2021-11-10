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
  </div>
</template>

<script>
export default {
  name: "SearchB.vue"
}
</script>

<style scoped>

</style>