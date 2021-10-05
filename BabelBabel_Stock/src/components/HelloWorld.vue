<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div>

  <h1>WELCOME TO BABEL BABEL WINE STOCK</h1>

</div>
</template>

<style scoped>
h1 {
  color: #2a574c;
  margin-top: 150px;
}
.bb{
  background-color : #2a574c;
  width: 150px;
  display : flex;
justify-content: center;
align-items: center;
  margin-top: 50px;
  
}
</style>
