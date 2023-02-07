<template>
    <div id="app">
    
    
    
    
        <HeaderComp @emitsearchTextHeader="searchMovie" />
        
        <!-- full-screen-video -->
        <div class="container-fluid">
            <div class="row ">
                <div class="col">
                    <div class="video-cnt">
                        <video width="100%" autoplay muted loop id="myVideo" ref='myVideo'>
                      <source src="./assets/video/Ready Player One Comic-Con Trailer (2018) _ Movieclips Trailers.mp4" type="video/mp4">
                    </video>
                        <div class="content">
                            <!-- <h2>Thor: Love and Thunder</h2> -->
                            <img src="./assets/ready_player-one.png" alt="">
                            <p class="pt-3">In un mondo sull'orlo del collasso un giocatore di talento si piazza al primo posto nella sfida per il controllo di un universo virtuale</p>
                            <button id="playPause" @click="videoPlayer()">{{playPause}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
        <MainComp :arraySeriesApp="arraySeries" :arrayResultApp="arrayResults" />
    </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        HeaderComp,
        MainComp,

        //   props:{

        //  }

    },
    data() {
        return {
            video: '',
            playPause: 'Pause',

            searchTextApp: "",

            searchQueryUrl: "",

            searchUrlSeries: "",

            arrayResults: [],

            arraySeries: [],



        }
    },
    mounted() {
        //this.videoPlayer()
        this.video = this.$refs.myVideo
    },
    methods: {

        searchMovie(searchTextHeader) {
            this.searchTextApp = searchTextHeader

            this.searchQueryUrl = 'https://api.themoviedb.org/3/search/movie?api_key=1b28750e9e57b2ad4b30e1692e9b30f0&language=en-US&page=1&include_adult=false&query=' +
                this.searchTextApp;

            axios.get(this.searchQueryUrl)
                .then((resp) => {
                    this.arrayResults = resp.data.results

                })

            this.searchUrlSeries = 'https://api.themoviedb.org/3/search/tv?api_key=1b28750e9e57b2ad4b30e1692e9b30f0&language=en-US&page=1&include_adult=false&query=' +
                this.searchTextApp;

            axios.get(this.searchUrlSeries).then((respo) => {

                this.arraySeries = respo.data.results
            })
        },

        videoPlayer() {
            if (this.video.paused) {
                this.video.play();
                this.playPause = "Pause";
            } else {
                this.video.pause();
                this.playPause = "Play";
            }
        }


    }
}
</script>

<style lang="scss">
li {
    list-style: none;
}

.video-cnt {
    position: relative;
}

.content {
    position: absolute;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 10px;
    padding-bottom: 100px;
}
.content img{
  width: 20%;
}


#playPause {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
}

#playPause:hover {
    background: #ddd;
    color: black;
}

#app {
    background-color: black;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white; 
}
</style>
