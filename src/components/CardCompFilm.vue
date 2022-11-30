<template>
        <div class="card-movie">
            <div class='card-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.backdrop_path}`" alt="">
            </div>
            <div class="card-content">
                <div>{{objectResultFilmList.title}}</div>
                <div>{{objectResultFilmList.original_title}}</div>
                <!-- <div>{{objectResultFilmList.original_language}}</div> -->
                <country-flag :country='objectResultFilmList.original_language' />
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
     
    padding-top:30px;
    width: 342px;
    transition: all 0.1s linear;
    height:350px;  
}


.card-movie:hover{
  scale: 1.1 ;
}


.card-content {
    width: 342px;
     display: none;
     bottom:200px;
    
}


.card-movie:hover .card-content {
    width: 342px;
    display: block;
    
    
}
</style>