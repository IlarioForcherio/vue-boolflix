<template>
    <div>
        <h3>Tv-Series:</h3>
        <div class="d-flex overflow-auto text-center">
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

</style>