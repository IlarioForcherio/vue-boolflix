<template>
    <div>
        <div class="card-comp d-flex overflow-auto" >
        <CardCompFilm v-for='(elem, index) in arrayResultMain' :key="index"
         :objectResultFilmList="elem" />    
        </div>
    </div>
</template>

<script>

import CardCompFilm from './CardCompFilm.vue'

    export default {
        name:'FilmList',
        components:{
        CardCompFilm
        },
        props:{
         arrayResultMain: Array   
        }
        
    }
</script>


<style lang="scss" scoped>



</style>