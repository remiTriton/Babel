<template>
  <div>
    <NewOrder />
    <WinesAdmOrder />
  </div>
</template>

<script>
import WinesAdmOrder from "../components/WinesAdm.vue";
import NewOrder from "../components/UpdateOrder.vue";

export default {
  components: { NewOrder, WinesAdmOrder },
};
</script>

<style>
</style>