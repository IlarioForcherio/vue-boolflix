<template>

     <div class="header d-flex justify-content-between align-items-center navbar navbar-expand-lg">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <img src="../assets/Netflix-Logo.png" alt="">
                                        <ul class="mt-3 ps-0 collapse navbar-collapse">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#series">Serie TV</a></li>
                                            <li><a href="#movies">Film</a></li>
                                            <li><a href="#">Nuovi e popolari</a></li>
                                            <li><a href="#">La mia lista</a></li>
                                            <li><a href="#">Sfoglia per lingua</a></li>
                                        </ul>
                                    </div>
                                    <!-- mafnifyng -->
                                    <div class=" d-flex align-items-center">
                                        <!-- Default dropstart button -->
                                        <div class="btn-group dropstart ">
                                            <button type="button" class="btn btn-dark " data-bs-toggle="dropdown" aria-expanded="false">
                                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                      </button>
                                            <ul class="dropdown-menu bg-dark ">
                                                <!-- Dropdown menu links -->
                                                <input class="netflix-input" placeholder="Titoli,Persone,generi" style="background-color: black;" v-model="searchTextHeader" @keyup.enter="$emit('emitsearchTextHeader', searchTextHeader  )" type="text">
                                            </ul>
                                        </div>
                                        <!-- babyes -->
                                        <span class="ps-3"><a href="">Bambini</a></span>
                                        <!-- bell+logo -->
                                        <div class="d-flex">
                                            <div>
                                                <a href="">
                                                    <font-awesome-icon class="bell ps-3" icon="fa-regular fa-bell" /> </a>
                                            </div>
                                            <div class="pill"></div>
                                        </div>
                                        <a  href=""><img class="profile-img" src="../assets/logo.jpeg" alt=""></a>
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
a {
    text-decoration: none;
    color: white;
    &:hover {
        color: rgb(137, 137, 137);
    }
}

.header {
    position: fixed;
    //top: 0;
    z-index: 1;
    width: 100%;
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

.bell {
    position: absoluute;
}

.pill {
    position: relative;
    top: 4px;
    right: 22px;
    width: 7px;
    height: 7px;
    background-color: red;
    border-radius: 50%;
}
</style>