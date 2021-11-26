<template>
  <div class="mx-96">
  <input class="m-10 rounded-md" type="search" v-model='query'> 
  <button type="search"  @click="searchWine(query)"> Search</button>
    <button  class="m-5" type="button"  @click='crud()'> Ajout</button>
  </div>
</template>

<script>
export default {

name :"MiniSearchBar",
data(){
    return{
        query:"",
    }
},
methods:{
    searchWine(query){
    this.$emit('searchWine', query)
  },
   crud(){
      this.$emit('toggleCrud')
    }
  }

}

</script>

<style>

</style>