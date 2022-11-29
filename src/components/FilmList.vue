<template>
    <div>
        
      <CardComp :arrayResultFilmList="arrayResultMain" /> 
    </div>
</template>

<script>

import CardComp from '../components/CardComp.vue'

    export default {
        name:'FilmList',
        components:{
        CardComp
        },
        props:{
         arrayResultMain: Array   
        }
        
    }
</script>


<style lang="scss" scoped>

</style>