<template>
    <div>
        <div class="card-series">
            <div class='card-series-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultSeriesList.backdrop_path}`" alt="">
            </div>
            <div class="card-series-content">
                <div>{{objectResultSeriesList.name}}</div>
                <div>{{objectResultSeriesList.original_name}}</div>
                <div v-if="objectResultSeriesList.original_language ==  'it' " > 🇮🇹 </div>
                <div v-else-if="objectResultSeriesList.original_language ==  'en'" > 🇺🇸 </div>
                <div v-else > 🇹🇲 </div>
                <!-- <country-flag :country='objectResultSeriesList.original_language' /> -->
                <div>{{objectResultSeriesList.vote_average}}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'CardCompSeries',
        props:{
            objectResultSeriesList: Object
        }
    }
</script>

<style lang="scss" scoped>

.card-series {
    padding-top:30px;
    width: 342px;
    transition: all 0.11s linear;
    height:350px;
   
     
}

.card-series:hover {
    scale: 1.1 ;
    
}

.card-series-content {
     width: 342px;
     display: none;  
}

.card-series:hover .card-series-content {
    width: 342px;
    display: block;
}

</style>