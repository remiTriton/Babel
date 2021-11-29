<template>
  <div>
    <div class="formulaire">
      <form @submit.prevent.stop class="w-full max-w-lg mt-20">

      //////

<div class="grid grid-cols-2 gap-8">
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-domcuveeain"
            >
              Cuvée
            </label>
            <input
              v-model="wine.cuvee"
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
              id="grid-cuvee"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-domaine"
            >
              Domaine
            </label>
            <input
              v-model="wine.domaine"
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
              id="grid-domaine"
              type="text"
            />
          </div>
          <div>
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
              Vigneron
            </label>
            <input
              v-model="wine.vigneron"
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
              id="grid-vigneron"
              type="text"
            />
          </div>
          <div>
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
              Cépage
            </label>
            <input
              v-model="wine.cepage"
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
              id="grid-cepage"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-pays"
            >
              Pays
            </label>
            <select
              v-model="wine.pays"
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
              id="grid-pays"
            >

               <option>France</option>
                <option>Italie</option>
                <option>Espagne</option>
                <option>Grêce</option>
                <option>Croatie</option>
              </select>
      
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-region"
            >
              Région
            </label>
            <input
              v-model="wine.region"
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
              id="grid-region"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-departement"
            >
              Département
            </label>
            <input
              v-model="wine.departement"
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
              id="grid-departement"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-millesime"
            >
              Millésime
            </label>
            <input
              v-model="wine.millesime"
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
              id="grid-millesime"
              type="text"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-couleur"
            >
              Couleur
            </label>
            <select
              v-model="wine.couleur"
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
              id="grid-couleur"

            >
            <option>Rouge</option>
                      <option>Blanc</option>
                      <option>Rosé</option>
                      <option>Bubble</option>
                      <option>Biere</option>
                    </select>
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-quantite"
            >
              Quantité
            </label>
            <input
              v-model="wine.quantite"
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
              id="grid-quantite"
              type="number"
                placeholder="0"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-prix"
            >
              Prix
            </label>
            <input
              v-model="wine.prix"
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
              id="grid-prix"
              type="number"
                placeholder="0"
            />
          </div>
          <div>
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-download"
            >
              Download images
            </label>
            <input
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
              id="grid-prix"
              type="file"
              @change="onFileSelected"
              placeholder="..."
            />
          </div>
          <div>
            <label
              class="
                info
                uppercase
                tracking-wide
                text-black text-xs
                font-bold
                mb-2
              "
              for="grid-description"
            >
              Description
            </label>
            <textarea 
            v-model="wine.description"
                class="resize border rounded-md 
                border border-gray-200
                appearance-none
                block
                text-black
                bg-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white "          
              id="grid-description"
              type="text"
              >
            </textarea>
          </div>
        </div>


        <button
          class="
            But
            bg-blue
            hover:bg-dark
            text-white
            font-bold
            ml-52
            py-2
            px-4
            rounded-full
            mt-10
          "
          type="submit"
          @click="updateWine(quantite)"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewWine",
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
      if (!this.wine.quantite) {
        await this.$store.dispatch("wines/updateWine", [
          this.$route.params.id,
          {
            cuvee: this.wine.cuvee,
            domaine: this.wine.domaine,
            cepage: this.wine.cepage,
            millesime: this.wine.millesime,
            vigneron: this.wine.vigneron,
            cuvee: this.wine.wineName,
            couleur: this.wine.couleur,
            description: this.wine.description,
            region: this.wine.region,
            pays: this.wine.pays,
            quantite: this.quantite,
            prix: this.wine.prix,
          },
        ]);
      } else {
        await this.$store.dispatch("wines/updateWine", [
          this.$route.params.id,
          {
            cuvee: this.wine.cuvee,
            domaine: this.wine.domaine,
            cepage: this.wine.cepage,
            millesime: this.wine.millesime,
            vigneron: this.wine.vigneron,
            cuvee: this.wine.wineName,
            couleur: this.wine.couleur,
            description: this.wine.description,
            region: this.wine.region,
            pays: this.wine.pays,
            quantite: this.quantite + this.wine.quantite,
            prix: this.wine.prix,
          },
        ]);
      }
      await this.$store.dispatch("wines/findOnewines", this.$route.params.id);

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