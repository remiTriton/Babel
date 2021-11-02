<template>
<div>
  <HelloWorld />
  <div class="formulaire">
    <v-form @submit.prevent.stop class="w-full max-w-lg mt-40">
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
            for="grid-domain"
          >
            Domain
          </label>
          <input
            v-model="domain"
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
              focus:outline-none focus:bg-white
            "
            id="grid-domain"
            type="text"
            placeholder="..."
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
            for="grid-winemaker"
          >
            Winemaker
          </label>
          <input
            v-model="winemaker"
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
            id="grid-winemaker"
            type="text"
            placeholder="La Sorga"
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
            for="grid-grape-variety"
          >
            Grape Variety
          </label>
          <input
            v-model="grapeVariety"
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
              focus:outline-none focus:bg-white
            "
            id="grid-grape-variety"
            type="text"
            placeholder="gamay"
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
            for="grid-year"
          >
            Year
          </label>
          <input
            v-model="year"
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
            id="grid-year"
            type="text"
            placeholder="2021"
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
          for="grid-technical-Specification"
        >
          Technical Specification
        </label>
        <input
          v-model="technicalSpecification"
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
          placeholder="..."
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
          <input v-model="wineName"
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
              focus:outline-none focus:bg-white
            "
            type="text"
            placeholder="Jane"
          />
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="relative">
            <div class="col">
              <select
                v-model="color"
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
            Region
          </label>
          <input
            v-model="city"
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
              v-model="state"
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
        @click="createWine"
      >
        Submit
      </button>
    </v-form>
  </div></div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "SignUp",
  data() {
    return {
      domain: "",
      winemaker: "",
      grapeVariety: "",
      year: "",
      technicalSpecification: "",
      wineName: "",
      color: "",
      city: "",
      state: "",
      quantity: "",
    }
  },
  methods: {
    async createWine() {
      const wine = {
        
      domain: this.domain,
      winemaker: this.winemaker,
      grapeVariety: this.grapeVariety,
      year: this.year,
      technicalSpecification: this.technicalSpecification,
      wineName: this.wineName,
      color: this.color,
      city: this.city,
      state: this.state,
      quantity: this.quantity,
      };
      const resHttp = await fetch('/api/wines', {
          method: 'POST',
          headers:{'content-type' : 'application/json'
          },
          body: JSON.stringify(wine),
        });

        // real Backend JSON
        
          this.createdwine = true;
          this.domain = '';
          this.winemaker = '';
          this.grapeVariety = '';
          this.year = '';
          this.technicalSpecification = '';
          this.wineName = '';
          this.color = '';
          this.city = '';
          this.state = '';
          this.quantity = '';
        
    }
  }
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
.col {
  align-items: center;
  margin-top: 25px;
}
.But {
  background-color: #2a574c;
}
</style>