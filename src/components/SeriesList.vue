<template>
    <div>
        <h3>Tv-Series:</h3>

<CardCompSeries/>
    </div>
</template>

<script>

import CardCompSeries from './CardCompSeries.vue'
    export default {
        name:'SeriesList',
        components:{
        CardCompSeries
        }
    }
</script>

<style lang="scss" scoped>

</style>