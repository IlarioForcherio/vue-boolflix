<template>
    <div>
        <h3>Films:</h3>
        <div class="card-container d-flex  text-center">
        <CardCompFilm class="card-comp" v-for='(elem, index) in arrayResultMain' :key="index"
         :objectResultFilmList="elem" />    
        </div>
    </div>
</template>

<script>

import CardCompFilm from './CardCompFilm.vue'

    export default {
        name:'FilmList',
        components:{
        CardCompFilm
        },
        props:{
         arrayResultMain: Array   
        }
        
    }
</script>


<style lang="scss" scoped>

.card-container{
    overflow-x:auto;
    overflow-y:hidden;
    

}

.card-container::-webkit-scrollbar{
   background-color:black;
   width: 60px;
   
  
}

.card-container::-webkit-scrollbar-thumb {
 background-color:rgb(62, 59, 59);
 border-radius: 10px;
}




</style>