<template>
  <div>
    <SearchB />
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white"
      >
        <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
          <div
            @click.prevent="toggle()"
            :icon="HomeIcon"
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
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
        <a href="#" class="flex-shrink-0 w-full group block">
          <div class="flex items-center"></div>
        </a>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white"
      >
        <button
          type="button"
          class="
            -ml-0.5
            -mt-0.5
            h-12
            w-12
            inline-flex
            items-center
            justify-center
            rounded-md
            text-gray-500
            hover:text-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-indigo-500
          "
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->

            <div class="py-4">
              <div v-if="add">
                <Add />
              </div>
              <div v-if="Dashboard" />
            </div>
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="flex flex-col">
              <div class="my-2 overflow-x-auto sm:-mx-center lg:-mx-center">
                <div
                  class="
                    py-2
                    align-middle
                    inline-block
                    min-w-full
                    sm:px-6
                    lg:px-8
                  "
                >
                  <div
                    class="
                      shadow
                      overflow-hidden
                      border-b border-gray-200
                      sm:rounded-lg
                    "
                  >
                    <table>
                      <thead class="bg-gray-50">
                        <tr></tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="wine in wines" :key="wine.id">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10"></div>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {{ wine.name }}
                                </div>
                                <div class="text-sm text-gray-500">
                                  {{ wine.quantity }}
                                </div>
                                <div class="text-sm text-gray-500">
                                  {{ wine.status }}
                                </div>
                                <div class="text-sm text-gray-500">
                                  {{ wine.color }}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span
                              class="
                                px-2
                                inline-flex
                                text-xs
                                leading-5
                                font-semibold
                                rounded-full
                                bg-green-100
                                text-green-800
                              "
                            >
                              Active
                            </span>
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ wine.role }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-right text-sm
                              font-medium
                            "
                          >
                          <div class="model">
                <td class="cru px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link :to="{name:'Update', params:{id:wine._id}}">
                  <button class="text-indigo-600 hover:text-indigo-900 ml-5">Update</button>
                </router-link>
                  <button class="text-red-600 hover:text-red-900 ml-5 mr-5" @click="Delete">Delete</button>
                </td>
              </div>
                          </td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Add from "../components/Add.vue";
import SearchB from "../components/SearchB.vue";

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
    SearchB,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      add: false,
      dashboard: true,
    };
  },
  created() {
    this.$store.dispatch("wines/fetchWines");
  },
  computed: {
    wines(){
      return this.$store.state.wines.wines;
    },
  },
  methods: {
    toggle() {
      this.add = !this.add;
      this.dashboard = !this.dashboard;
    },
  },
};
</script>

<style>
</style>