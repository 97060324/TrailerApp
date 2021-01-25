<template>
    <div class="trailer-app">
        <div class="trailer-dialog">
            <div @click="closeTrailer()" class="TrailerHead-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.504" height="30.705" viewBox="0 0 31.504 30.705">
                    <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z" transform="translate(0.004 -2.647)" fill="#fff"/>
                </svg>
            </div>
            <div class="TrailerHead-card">
                <img :src="trailerDialog.image">
            </div>
            <div class="TrailerHead-dialog">
                <div class="TrailerHead-infobox">
                    <h1>{{ trailerDialog.name }}</h1>
                    <h3>{{ trailerDialog.year }}</h3>
                    <h3>{{ trailerDialog.rating }}</h3>
                    <h3>{{ trailerDialog.category }}</h3>
                    <p>{{ trailerDialog.desc }}</p>
                    <div class="trailer-button">
                        <button>Watch Trailer</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="trailer-menu">
            <div style="font-size: 1.5em">
                <h1>Trending<br> Trailer</h1>
            </div>
            <div v-for="trailerlist in list">
                <div class="trailer-main" @click="openTrailer(trailerlist)">
                    <img :src="trailerlist.image" />
                    <div>
                        <h1>{{ trailerlist.name }}</h1>
                        <h3>{{ trailerlist.year }}</h3>
                        <h3>{{ trailerlist.rating }}</h3>
                        <h3>{{ trailerlist.category }}</h3>
                    </div>
                </div>
            </div>

            <div class="trailer-search">
                <h1>Search</h1>
                <input placeholder="Search your favourite trailer..." type="text" v-model="search" autocomplete="false">
            </div>

            <div class="trailer-list-item">
                <ul class="trailer-items">
                    <li v-for="trailerlist in filteredList" class="trailer-list">
                        <figure @click="openTrailer(trailerlist)">
                            <img :src="trailerlist.image">

                            <figcaption>
                                <h2>{{ trailerlist.name }}</h2>
                                <h3>{{ trailerlist.year }}</h3>
                                <h3>{{ trailerlist.rating }}</h3>
                                <h3>{{ trailerlist.category }}</h3>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
    data() {
        return {
            maintrailers: [],
            trailerDialog: [],
            category: [],
            list: undefined,
            categorys: undefined,
            trailers: [],
            action: undefined,
            search: '',
        }
    },
    //Later this in a new file Like API.JS
    mounted() {
        Vue.axios.get('https://api.npoint.io/8f1508e4c976b0fdafbf') // MainTrailer API
            .then((resp) => {
                this.list = resp.data.maintrailer;
            })

        Vue.axios.get('https://api.npoint.io/c6814c2454d61cd7ef85') // Categorys API
            .then((resp) => {
                this.categorys = resp.data.categorys;
            })

        Vue.axios.get('https://api.npoint.io/1f7da34f4106e07d3fc3') // Trailer of the week
            .then((resp) => {
                this.trailers = resp.data.traileroftheweek;
            })

        Vue.axios.get('https://api.npoint.io/0ae27f86af4d4c4361a8') // Action category
            .then((resp) => {
                this.action = resp.data.action;
            })
    },
    computed: {
        filteredList() {
            return this.trailers.filter(traileroftheweek => {
                return traileroftheweek.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        openTrailer(trailerlist) {
            this.trailerDialog = trailerlist;

            document.getElementsByClassName('trailer-dialog')[0].style.display = 'block';
            document.getElementsByClassName('trailer-menu')[0].style.display = 'none';
        },
        closeTrailer() {
            document.getElementsByClassName('trailer-dialog')[0].style.display = 'none';
            document.getElementsByClassName('trailer-menu')[0].style.display = 'block';
        },
    }
}

</script>

