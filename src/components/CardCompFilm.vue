<template>
        <div class="card-movie">
             {{ this.starsRating()  }}
            <div class='card-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.backdrop_path}`" alt="">
            </div>
            <div class="card-content">
               
                <div>{{objectResultFilmList.original_title}}</div>
                <!-- flags -->
                
               <img class=" flag" :src="`https://flagsapi.com/${
                (objectResultFilmList.original_language == 'en') ? 'US' : (objectResultFilmList.original_language == 'ja') ? 'JP' : 
                objectResultFilmList.original_language.toUpperCase()}/shiny/64.png`">
              <!-- stars  -->
              <div>
                <div class="d-inline" v-for="n in fullStars" :key="'fullStars' + n " >
                   <font-awesome-icon icon="fa-solid fa-star" />
                </div>
                
                <div class="d-inline" v-if="halfStar == true ">
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                </div>
                <div class="d-inline" v-for="n in emptyStars" :key=" 'emptyStars' + n" >
                    <font-awesome-icon icon="fa-regular fa-star" />
                </div>

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

 .flag{
    width: 5%;
    height:6%;
}


.card-movie {
    padding-top:30px;
    width: 342px;
    transition: all 0.2s linear;
    height:350px;
   
  
     
}
.card-movie img{
      border-radius:20px;
      padding: 10px;
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