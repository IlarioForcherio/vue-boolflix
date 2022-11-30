<template>
        <div class="card-movie">
            <div class='card-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.backdrop_path}`" alt="">
            </div>
            <div class="card-content">
                <!-- <div>{{objectResultFilmList.title}}</div> -->
                <div>{{objectResultFilmList.original_title}}</div>
                <div v-if="objectResultFilmList.original_language ==  'it' " > 🇮🇹 </div>
                <div v-else-if="objectResultFilmList.original_language ==  'en'" > 🇺🇸 </div>
                <div v-else > 🇹🇲 </div>
              <!-- cicli stars -->
                <div class="d-inline" v-for="n in fullStars" :key="n" >
                    &#9733;
                </div>
                
                <div class="d-inline" v-if="halfStar == true ">
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                </div>
                <div class="d-inline" v-for="n in emptyStars" :key="n" >
                    &#9734;
                </div>
            </div>
        </div>
</template>
<script>
// import CountryFlag from 'vue-country-flag'

export default {
    name: 'CardCompFilm',
    components: {
        // CountryFlag
    },
    props: {
        objectResultFilmList: Object,
        
    },

    data(){
    return{
     
     halfVote:0,
     emptyStars:0,
     fullStars:0,
     halfStar: true,
     
    
    }
   },
   mounted(){
    
    this.starsRating()

   },
   methods: {
    starsRating(){
       
       this.halfVote = Math.floor(this.objectResultFilmList.vote_average / 2) 
       //this.fullStars = Math.floor(this.fullStars)
       console.log(this.halfVote)
       
       this.fullStars = this.halfVote 
       this.emptyStars = 5 - this.fullStars
       
       if(this.halfVote % 2 == 0){
        this.halfStar = false
       }else{
        this.halfStar = true
       }
    }
  }

}
</script>



<style lang="scss" scoped>




.card-movie {
    padding-top:30px;
    width: 342px;
    transition: all 0.2s linear;
    height:350px;
   
    border-radius:10px;
     
}

.card-movie:hover{
  scale: 1.3 ;
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