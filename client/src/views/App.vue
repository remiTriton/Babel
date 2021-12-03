<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavBar, Footer,
  }
}

</script>

<template><div>
<NavBar />
<Footer />
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
