<template>
    <div class="cards">
        <div class='card-img'>
          <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.poster_path}`" alt="">  
        </div>
        
        <div class="card-content">
          <div>{{objectResultFilmList.title}}</div>
          <div>{{objectResultFilmList.original_title}}</div>
          <!-- <div>{{objectResultFilmList.original_language}}</div> -->
          <country-flag  :country=objectResultFilmList.original_language size =' big '/>
          <div>{{objectResultFilmList.vote_average}}</div>   
        </div>

    </div>
</template>

<script>
export default {
    name: 'CardCompFilm',
    components:{
    //CountryFlag
    },
    props: {
        objectResultFilmList: Object
    }
}
</script>

<style lang="scss" scoped>


.cards{
    width: 342px;
}

.cards:hover .card-img {
   display:none;

}

.card-content{
    width: 342px;
    display:none;
}

.cards:hover .card-content{
 width: 342px;  
 display:block;
}



</style>