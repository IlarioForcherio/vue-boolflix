<template>
    <div>
        <div class="card-series">
            <div class='card-series-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultSeriesList.poster_path}`" alt="">
            </div>
            <div class="card-series-content">
                <div>{{objectResultSeriesList.name}}</div>
                <div>{{objectResultSeriesList.original_name}}</div>
                <!-- <div>{{objectResultFilmList.original_language}}</div> -->
                <country-flag :country='objectResultSeriesList.original_language' size=' big ' />
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
    width: 342px;
}

.card-series:hover .card-series-img {
    display: none;
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