<template>
    <div>
        <h3 class="mt-5">Tv-Series:</h3>
        <div class="card-cnt-series d-flex  text-center ">
             <CardCompSeries class="" v-for='(element, index) in arraySeriesMain' :key="index"
             :objectResultSeriesList="element" /> 
        </div>
    </div>
</template>

<script>

 import CardCompSeries from './CardCompSeries.vue'
//  import CardCompFilm from './CardCompFilm.vue'
    export default {
        name:'SeriesList',
        components:{
            
            CardCompSeries
        },
        props:{
            arraySeriesMain:Array
        }
    }
</script>

<style lang="scss" scoped>

.card-cnt-series{
    overflow-x:auto;
    overflow-y:hidden;
}

.card-cnt-series::-webkit-scrollbar{
   background-color:black;
  
}

.card-cnt-series::-webkit-scrollbar-thumb {
background-color:rgb(62, 59, 59);

border-radius: 10px;

}

</style>