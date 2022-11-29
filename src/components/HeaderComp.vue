<template>
   <div class="header d-flex justify-content-between align-items-center">
    <img src="../assets/Netflix-Logo.png" alt="">
    <div class="ms-3">
        <input v-model="searchTextHeader" @keyup="$emit('emitsearchTextHeader', searchTextHeader  )" type="text">
    </div>

    </div>
</template>

<script>
    export default {
        name:"HeaderComp",
        props:{
         
        },
        data(){
            return{
            searchTextHeader:''  
            }
           
        }
    }
</script>

<style lang="scss" scoped>

.header{
   img{
    width:10%;
   } 
}

</style>