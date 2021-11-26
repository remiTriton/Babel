<template>
  <div>
    <HelloWorld />
    <div class="formulaire">
      <form @submit.prevent.stop class="w-full max-w-lg mt-10">
        ///////

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
              v-model="cuvee"
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
              v-model="domaine"
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
              v-model="vigneron"
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
              v-model="cepage"
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
              v-model="pays"
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
              type="select">

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
              v-model="region"
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
              v-model="departement"
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
              v-model="millesime"
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
              v-model="couleur"
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
              type="text"
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
              v-model="quantite"
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
              v-model="prix"
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
              Descritpion
            </label>
            <textarea 
            v-model="description"
                class="resize border rounded-md" 
                border border-gray-200
                appearance-none
                block
                bg-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white             
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
            mt-20
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
      </form>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "SignUp",
  data() {
    return {
      cuvee: "",
      domaine: "",
      cepage: "",
      millesime: "",
      vigneron: "",
      couleur: "",
      description: "",
      region: "",
      departement: "",
      pays: "",
      quantite: "",
      prix: "",
    };
  },
  methods: {
    async createWine() {
      const wine = {
        cuvee: this.cuvee,
        domaine: this.domaine,
        cepage: this.cepage,
        millesime: this.millesime,
        vigneron: this.vigneron,
        couleur: this.couleur,
        description: this.description,
        region: this.region,
        departement: this.departement,
        pays: this.pays,
        quantite: this.quantite,
        prix: this.prix,
      };
      await this.$store.dispatch("wines/addWine", wine);
    },
  },
};
</script>

<style>
.formulaire {
  display: flex;
  flex: row;
  justify-content: center;

  margin-top: 20px;
}

.info {
 color: black;
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