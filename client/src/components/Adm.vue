<template>
  <div>
    
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed">
    
    
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white"
      >
        <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
          <div
            @click.prevent="toggleWines"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Vins
          </div>
          <div
            @click.prevent="newWine()"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Ajouter
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Bon de Commande
          </div>
          <div
            @click.prevent="toggle()"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Dashboard
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Importer
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Calendrier
          </div>
          <div
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Rapports
          </div>
          <div
            @click.prevent="toggleUsers"
            class="
              bg-gray-100
              text-gray-900
              group
              flex
              items-center
              px-2
              py-2
              text-sm
              font-medium
              rounded-md
            "
          >
            Utilisateurs
          </div>
        </nav>
      </div>
    </div>
    <div v-if="add"><Add /></div>
    <div v-if="showWines"><WinesAdm /></div>
    <div v-if="showUsers"><Users /></div>
  </div>
  
</template>

<script>
import Add from "../components/Add.vue";
import WinesAdm from "../components/WinesAdm.vue";
import Users from "../components/Users.vue";

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

export default {
  name: "Adm",
  components: {
    Add,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    WinesAdm,
    Users,
  },
  data() {
    return {
      add: false,
      showWines: true,
      showUsers: false,
    };
  },
  methods: {
    newWine() {
      this.add = !this.add;
    },
    toggleUsers() {
      this.add = false;
      this.showWines = false;
      this.showUsers = true;
    },
    toggleWines() {
      this.add = false;
      this.showWines = true;
      this.showUsers = false;
    },
  },
};
</script>
