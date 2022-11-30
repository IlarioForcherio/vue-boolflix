<template>

   <div class="header d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
       <img src="../assets/Netflix-Logo.png" alt=""> 
       <ul>
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>Serie TV</li>
        <li><a href="#"></a>Film</li>
        <li><a href="#"></a>Nuovi e popolari</li>
        <li><a href="#"></a>La mia lista</li>
        <li><a href="#"></a>Sfoglia per lingua</li>
        </ul> 
    </div>
   
    
    
    <div class="ms-3">

       <!-- <font-awesome-icon icon="fa-solid fa-star-half-stroke" />m/s
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />mg
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-sharp fa-solid fa-star" /> -->

        <!-- Default dropstart button -->
<div class="btn-group dropstart">
  <button type="button" class="btn btn-dark " data-bs-toggle="dropdown" aria-expanded="false">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </button>
  <ul class="dropdown-menu bg-dark ">
    <!-- Dropdown menu links -->
     <input class="netflix-input"
     placeholder="Titoli,Persone,generi"
     style="background-color: black;" 
     v-model="searchTextHeader" 
     @keyup.enter="$emit('emitsearchTextHeader', searchTextHeader  )" type="text">
    
  </ul>
</div>
        
       
        
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
    color:white;
   img{
    width:20%;
   } 
}

li{
    display:inline;
    padding:0 10px;
}




.btn {
    --bs-btn-padding-x: 10px; 
    --bs-btn-padding-y: 5px; 
     --bs-btn-border-radius: 0px;
     border-radius: 50px !important;
   
}

.dropdown-menu{
    background-color:black;
    --bs-dropdown-padding-y:0.2rem;
}

input{
    border:0.1px solid rgb(140, 140, 140);
}
input, select, textarea{
    color: white;
}

.netflix-input::placeholder { 
 color:white;
 background-color:black;
}







</style>