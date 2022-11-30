<template>
    <div>
        <div class="card-series  mb-5">
            <div class='card-series-img'>
                <img :src="`http://image.tmdb.org/t/p/w342/${objectResultSeriesList.backdrop_path}`" alt="">
            </div>
            <div class="card-series-content">
                <div>{{objectResultSeriesList.name}}</div>
                <div>{{objectResultSeriesList.original_name}}</div>
                <div v-if="objectResultSeriesList.original_language ==  'it' "> 🇮🇹 </div>
                <div v-else-if="objectResultSeriesList.original_language ==  'en'"> 🇺🇸 </div>
                <div v-else> 🇹🇲 </div>
                <!-- cicli stars -->
                <div class="d-inline" v-for="n in fullStars" :key="n">
                    &#9733;
                </div>
    
                <div class="d-inline" v-if="halfStar == true ">
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                </div>
                <div class="d-inline" v-for="n in emptyStars" :key="n">
                    &#9734;
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
    mounted() {
        this.starsRating()
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