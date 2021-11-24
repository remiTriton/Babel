<template>
  <div>
  <input class="m-10 rounded-md" type="search" v-model='query'> 
  <button type="search"  @click="searchWine(query)"> Search</button>

  <input  class="m-5" type="radio" v-model='type' value='commande'> Commande
  <button  class="m-5" type="button"  value='vins'> Ajout</button>
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
  }


}
</script>

<style>

</style>