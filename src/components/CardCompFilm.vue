<template>
        <div class="card-movie">
            <div class='card-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.poster_path}`" alt="">
            </div>
            <div class="card-content">
                <div>{{objectResultFilmList.title}}</div>
                <div>{{objectResultFilmList.original_title}}</div>
                <!-- <div>{{objectResultFilmList.original_language}}</div> -->
                <country-flag :country='objectResultFilmList.original_language' size=' big ' />
                <div>{{objectResultFilmList.vote_average}}</div>
            </div>
        </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'CardCompFilm',
    components: {
        CountryFlag
    },
    props: {
        objectResultFilmList: Object,
        
    }
}
</script>

<style lang="scss" scoped>
.card-movie {
    width: 342px;
    
}

.card-img{
    //  transition: all 1s linear;
}

.card-movie:hover .card-img {
     
    //  transform: rotateY(180deg);
     display: none;
     
    
}

.card-content {
    width: 342px;
    
    display: none;
    
}

.card-movie:hover .card-content {
    width: 342px;
    display: block;
    
    
}
</style>