<template>
  <div>
    <div class="formulaire">
      <v-form @submit.prevent.stop class="w-full max-w-lg mt-20">
        <div class="flex flex-wrap -mx-1 mb-6 mt-6">
          <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                
              "
              for="grid-domain"
            >
              Domain
            </label>
            <input
              v-model="wine.domain"
              class="
                border border-gray-200
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-domain"
              type="text"
            />
          </div>
          <div class="w-full md:w-2/4 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-vigneron"
            >
              vigneron
            </label>
            <input
              v-model="wine.vigneron"
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
              id="grid-vigneron"
              type="text"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-1 mb-6 mt-6">
          <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-cepage"
            >
              Cepage
            </label>
            <input
              v-model="wine.cepage"
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
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              id="grid-cepage"
              type="text"
            />
          </div>
          <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-annee"
            >
              Année
            </label>
            <input
              v-model="wine.annee"
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
                text-overflow
              "
              id="grid-annee"
              type="text"
            />
          </div>
        </div>

        <div class="w-full md:w-2/8 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-Description"
          >
            Description
          </label>
          <input
            v-model="wine.Description"
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
            id="grid-technical-Specification"
            type="text"
          />
        </div>

        <div class="flex flex-wrap -mx-1 mt-5 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
                text-overflow
                overflow:
                scroll;
              "
              for="grid-wine-name"
            >
              Wine Name
            </label>
            <input
              v-model="wine.wineName"
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
                mb-3
                leading-tight
                focus:outline-none focus:bg-white
              "
              type="text"
            />
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div class="relative">
              <div class="col">
                <select
                  v-model="wine.color"
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
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  id="grid-state"
                >
                  <option>Red</option>
                  <option>White</option>
                  <option>Rosé</option>
                  <option>Bubble</option>
                  <option>Biere</option>
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
              Region
            </label>
            <input
              v-model="wine.city"
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
              id="grid-city"
              type="text"
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
                v-model="wine.state"
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
                  focus:outline-none focus:bg-white focus:border-gray-500
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
              Quantity
            </label>
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
              Price
            </label>
            <input
              v-model="wine.price"
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
              id="grid-city"
              type="text"
            />
          </div>
        </div>

        <div class="w-full md:w-2/8 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
              mt-10
            "
            for="grid-technical-Specification"
          >
            Download Image
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
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-technical-Specification"
            type="file"
            @change="onFileSelected"
            placeholder="..."
          />
        </div>

        <button
          class="
            But
            bg-blue
            hover:bg-dark
            text-white
            font-bold
            py-2
            px-4
            rounded-full
            mt-10
          "
          type="submit"
          @click="updateWine()"
        >
          Submit
        </button>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  props: ["id"],
  created() {
    this.$store.dispatch("wines/findOnewines", this.$route.params.id);
  },
  computed: {
    wine() {
      return this.$store.state.wines.wine;
    },
  },

  methods: {
    async updateWine() {
      await this.$store.dispatch("wines/updateWine", [
        this.$route.params.id,
        {
          domain: this.wine.domain,
          vigneron: this.wine.vigneron,
          cepage: this.wine.cepage,
          annee: this.wine.annee,
          Description: this.wine.Description,
          wineName: this.wine.wineName,
          color: this.wine.color,
          city: this.wine.city,
          state: this.wine.state,
          quantity: this.quantity + this.wine.quantity,
          price: this.wine.price,
        },
      ]);
      await this.$store.dispatch("wines/fetchWines");
      await this.$router.push("/Admin");
    },
  },
};
</script>

<style>
.formulaire {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.block {
  justify-content: space-evenly;
}

.sub {
  margin-top: 20px;
}
.col {
  align-items: center;
  margin-top: 25px;
}
.But {
  background-color: #2a574c;
}
</style>