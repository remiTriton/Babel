<template>
  <div>
<<<<<<< HEAD
  <input class="m-10 rounded-md" type="search">
  <button class="rounded-md" type="search">
  <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none"  stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round"  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
  <input class="m-5" type="radio"> Commande
  <input class="m-5" type="radio"> Ajout
=======
  <input class="m-10 rounded-md" type="search" v-model='query'> 
  <button type="search"  @click="searchWine(query)"> Search</button>

  <input class="m-5" type="radio" v-model='type' value='commande'> Commande
  <input class="m-5" type="radio" v-model='type' value='vins'> Ajout
>>>>>>> cbf2023725c8ffb56a533628c15c35da0afcb3da
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
 
name :"MiniSearchBar",
=======

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

>>>>>>> cbf2023725c8ffb56a533628c15c35da0afcb3da

}
</script>

<style>

</style>