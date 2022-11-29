<template>
  <div id="app">
     
    <HeaderComp/>
    <MainComp/>
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

    }
  },
  mounted(){
   axios.get("https://api.themoviedb.org/3/movie/550?api_key=1b28750e9e57b2ad4b30e1692e9b30f0")
                .then((resp) => {
                   console.log(resp.data)
                })


  },
  methods:{

  }
  
}
</script>

<style lang="scss">
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height:200vh;
  // margin-top: 60px;
}
</style>
