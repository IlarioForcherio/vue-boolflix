<template>
<div>

  

  <FilmList :arrayResultMain="arrayResultApp" />
  <SeriesList :arraySeriesMain="arraySeriesApp" />
</div>
</template>

<script>

import FilmList from '../components/FilmList.vue'
import SeriesList from '../components/SeriesList.vue'

export default {
   name: 'MainComp',
  
   components:{
    FilmList,
    SeriesList
  },
  props: {
    arraySeriesApp:Array,
    arrayResultApp:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
