<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Add from './components/Add.vue'

let wines = $ref([]);
fetch ('/api/wines').then((r) => r.json()).then((w) => {
  wines = w;
});

</script>

<template>
  <NavBar />
  <HelloWorld />
  <Add />

  <div class="text-black">
    <h3 class="font-bold">List of wines</h3>
    <ul>
      <li v-for="w in wines" :key="w._id">
        {{ w.wineName }}
      </li>
    </ul>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}
#NavBar {
  background-color: #2a574c;
}
</style>
