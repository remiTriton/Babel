<template>
<Adm />
  <Dashboard />
</template>

<script>
import Adm from "../components/Adm.vue"
import Dashboard from "../components/Dashboard.vue"


export default {
  name: "Admin.vue",
  components: {Adm, Dashboard},

}
</script>

<style scoped>

</style>