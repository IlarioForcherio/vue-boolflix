<template>
  <div id="app">
     
    <HeaderComp
     @emitsearchTextHeader="searchMovie" />
    <MainComp 
     :arrayResultApp="arrayResults"
     />
  </div>
</template>

<script>

import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
 import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,

  //   props:{
    
  //  }

  },
  data(){
    return{

      searchTextApp:"",
      
      searchQueryUrl:"",

      arrayResults : [],



    }
  },
  mounted(){
  


  },
  methods:{

    searchMovie(searchTextHeader){
     this.searchTextApp = searchTextHeader
      
     this.searchQueryUrl = 'https://api.themoviedb.org/3/search/movie?api_key=1b28750e9e57b2ad4b30e1692e9b30f0&language=en-US&page=1&include_adult=false&query=' + 
     this.searchTextApp;

      axios.get(this.searchQueryUrl)
                .then((resp) => {
                   this.arrayResults = resp.data.results
                  
                })
    }

   




  }
  
}
</script>

<style lang="scss">
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: white;
  height:200vh;
  // margin-top: 60px;
}
</style>
