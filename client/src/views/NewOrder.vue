<template>
  <div>
    <MiniSearchBar v-on:crud="toggle" />
    <NewOrder />
    <WinesAdmOrder v-if="toggleCrud" />
  </div>
</template>

<script>
import WinesAdmOrder from "../components/WinesAdm.vue";
import NewOrder from "../components/UpdateOrder.vue";
import MiniSearchBar from "../components/MiniSearchBar.vue";
export default {
  components: { NewOrder, WinesAdmOrder, MiniSearchBar },
  data() {
    return {
      toggleCrud: false,
    };
  },
  methods: {
    toggle() {
      this.toggleCrud = !this.toggleCrud;
    },
  },
};
</script>

<style>
</style>