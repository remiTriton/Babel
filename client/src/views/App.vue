<script>
import NavBar from '../components/NavBar.vue'


export default {
  components: {
    NavBar,
  }
}

</script>

<template><div>
<NavBar />
<router-view></router-view></div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
}
#NavBar {
  background-color: #2a574c;
}


</style>
