<template>
    <div>
        <div class="card-series  mb-5">
            {{ this.starsRating()  }}
            <div class='card-series-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultSeriesList.backdrop_path}`" alt="">
            </div>
            <div class="card-series-content">
                <div>{{objectResultSeriesList.name}}</div>
                <div>{{objectResultSeriesList.original_name}}</div>
                <!-- language -->
    
                <img class="flag-series d-block ms-3" :src="`https://flagsapi.com/${
                    (objectResultSeriesList.original_language == 'en') ? 'US' : (objectResultSeriesList.original_language == 'ja') ? 'JP' : 
                    objectResultSeriesList.original_language.toUpperCase()}/shiny/64.png`">
                <!-- stars -->
                <div class="d-inline" v-for="n in fullStars" :key="n">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>
    
                <div class="d-inline" v-if="halfStar == true ">
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                </div>
                <div class="d-inline" v-for="n in emptyStars" :key="n">
                    <font-awesome-icon icon="fa-regular fa-star" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardCompSeries',
    props: {
        objectResultSeriesList: Object
    },
    components: {

    },

    data() {
        return {
            halfVote: 0,
            emptyStars: 0,
            fullStars: 0,
            halfStar: true,
        }
    },
    created(){
     
     
    },
    mounted() {
      
      //la funzione start rating puo' essere richiamata all'inizio del cotenitore della card
      //questo per evitare il problema del caricamento errato delle stelle
       
    },
    methods: {
        starsRating() {

            this.halfVote = Math.floor(this.objectResultSeriesList.vote_average / 2)
            //this.fullStars = Math.floor(this.fullStars)
            console.log(this.halfVote)

            this.fullStars = this.halfVote
            this.emptyStars = 5 - this.fullStars

            if (this.halfVote % 2 == 0) {
                this.halfStar = false
            } else {
                this.halfStar = true
            }
        }
    }


}
</script>

<style lang="scss" scoped>

 .flag-series{
    margin-left:160px;
    width: 5%;
    height:6%;
}

.card-series {
    padding-top: 30px;
    width: 342px;
    transition: all 0.11s linear;
    height: 350px;
}

.card-series:hover {
    scale: 1.1;
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