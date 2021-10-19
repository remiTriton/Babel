<template>
  <HelloWorld />
  <div class="formulaire">
    <v-form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-1 mb-6 mt-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Domain
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="Natural"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            Winemaker
          </label>
          <input
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
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            placeholder="Wine"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-1 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Wine Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "

            type="text"
            placeholder="Jane"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <div class="relative">
        <div class="col">
          <select
              class="

                block
                uppercase
                appearance-none
                w-full
                bg-gray-200
                border border-gray-200
                text-gray-700
                py-3
                px-4
                mb-3
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
          >
            <option>Red</option>
            <option>White</option>
            <option>Rosé</option>
            <option>Bubble</option>
            <option>Bierre</option>
          </select>
      </div>
        </div>
      </div>
      </div>
      <div class="flex flex-wrap -mx-1 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-city"
          >
            City
          </label>
          <input
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
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-city"
            type="text"
            placeholder="..."
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            State
          </label>
          <div class="relative">
            <select
              class="
                block
                appearance-none
                w-full
                bg-gray-200
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
            >
              <option>France</option>
              <option>Italie</option>
              <option>Espagne</option>
              <option>Grêce</option>
              <option>Croatie</option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-zip"
          >
            Quantité
          </label>
          <input
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
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-zip"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
      <button class="But bg-blue hover:bg-dark text-white font-bold py-2 px-4 rounded-full" type="submit" @click="submit">
        Submit
      </button>

    </v-form>

  </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "Add",
  components: "HelloWorld"
};
</script>

<style>
.formulaire {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.block {
  justify-content: space-evenly;
}

.sub {

  margin-top: 35px;
}
.col{
  align-items: center;
  margin-top: 25px;
}
.But{
  background-color: #2a574c;
}
</style>