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
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p
                class="
                  text-sm
                  font-medium
                  text-gray-700
                  group-hover:text-gray-900
                "
              >
                Tom Cook
              </p>
              <p
                class="
                  text-xs
                  font-medium
                  text-gray-500
                  group-hover:text-gray-700
                "
              >
                View profile
              </p>
            </div>
          </div>
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
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->

            <div class="py-4">
              <div v-if="add">
                <Add />
              </div>
              <div v-if="dashboard" />
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
                        <tr>
                          
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="person in people" :key="person.email">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <img
                                  class="h-10 w-10 rounded-full"
                                  :src="person.image"
                                  alt=""
                                />
                              </div>
                              <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                  {{ person.name }}
                                </div>
                                <div class="text-sm text-gray-500">
                                  {{ person.email }}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              {{ person.title }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ person.department }}
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
                            {{ person.role }}
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
                            <a
                              href="#"
                              class="text-indigo-600 hover:text-indigo-900"
                              >Edit</a
                            >
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
  },
  data() {
    return {
      add: false,
      dashboard: true,
    };
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
.my-2 {
}
</style>