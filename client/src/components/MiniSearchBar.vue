<template>
  <div>
  <input class="m-10 rounded-md" type="search" v-model='query'> 
  <button type="search"  @click="searchWine(query)"> Search</button>

  <input  class="m-5" type="radio" v-model='type' value='commande'> Commande
  <input  class="m-5" type="radio" @click.prevent='crud()' value='vins'> Ajout
  </div>
</template>

<script>
export default {

name :"MiniSearchBar",
data(){
    return{
        query:"",
        crudWine:false,
    }
},
methods:{
    searchWine(query){
    this.$emit('searchWine', query)
  },
  async crud(){
    if(this.crudWine == false){
     return this.crudWine == true
    }else{
      return this.crudWine == false
    }
  }

}
}
</script>

<style>

</style>