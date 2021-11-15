<script>
import HelloWorld from '../components/HelloWorld.vue'
import NavBar from '../components/NavBar.vue'


export default {
  components: {
    NavBar,
    HelloWorld,
  }
}

</script>

<template>
<NavBar />
<router-view></router-view>
</template>

<style >
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
