<template>
    <div class=" cards">
        <img :src="`http://image.tmdb.org/t/p/w342/${objectResultFilmList.backdrop_path}`" alt="">
        <div>{{objectResultFilmList.title}}</div>
        <div>{{objectResultFilmList.original_title}}</div>
        <div>{{objectResultFilmList.original_language}}</div>
        <div>{{objectResultFilmList.popularity}}</div>
    </div>
</template>

<script>
export default {
    name: 'CardCompFilm',
    props: {
        objectResultFilmList: Object
    }
}
</script>

<style lang="scss" scoped>
.cards {
    border: 1px solid white;
}
</style>