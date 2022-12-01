<template>
    <div class="header d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center justify-content-start">
            <img src="../assets/Netflix-Logo.png" alt="">
            <ul class="mt-3 ps-0">
                <li><a href="#">Home</a></li>
                <li><a href="#">Serie TV</a></li>
                <li><a href="#">Film</a></li>
                <li><a href="#">Nuovi e popolari</a></li>
                <li><a href="#">La mia lista</a></li>
                <li><a href="#">Sfoglia per lingua</a></li>
              
            </ul>
        </div>
        <div class="ms-3">
            <!-- Default dropstart button -->
            <div class="btn-group dropstart">
                <button type="button" class="btn btn-dark " data-bs-toggle="dropdown" aria-expanded="false">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
                <ul class="dropdown-menu bg-dark ">
                    <!-- Dropdown menu links -->
                    <input class="netflix-input" placeholder="Titoli,Persone,generi" style="background-color: black;" v-model="searchTextHeader"
                      @keyup.enter="$emit('emitsearchTextHeader', searchTextHeader  )" type="text">
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComp",
    props: {

    },
    data() {
        return {
            searchTextHeader: ''
        }

    }
}
</script>

<style lang="scss" scoped>
.header {
    color: white;
    img {
        width: 15%;
    }
}

ul {
    padding-inline-start: 0px;
    li {
        display: inline;
        padding: 0 10px;
        a {
            text-decoration: none;
            color: white;
        }
    }
}

.btn {
    --bs-btn-padding-x: 10px;
    --bs-btn-padding-y: 5px;
    --bs-btn-border-radius: 0px;
    border-radius: 50px !important;
}

.dropdown-menu {
    background-color: black;
    --bs-dropdown-padding-y: 0.2rem;
}

input {
    border: 0.1px solid rgb(140, 140, 140);
}

input,
select,
textarea {
    color: white;
}

.netflix-input::placeholder {
    color: white;
    background-color: black;
}
</style>