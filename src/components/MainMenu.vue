<template>
    <div class="body">
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

        <div class="category-dialog">
            <div @click="closeCategory()" class="TrailerHead-back">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.504" height="30.705" viewBox="0 0 31.504 30.705">
                    <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z" transform="translate(0.004 -2.647)" fill="#fff"/>
                </svg>
            </div>
            <div class="category-maintitle">
                <h1>{{ category.title }}</h1>
            </div>
            <div class="category-list" v-for="actionlist in action" :key="actionlist.id">
                <div @click="openTrailer(actionlist)" class="trailer-list">
                    <img class="trailer-list-image" :src="actionlist.image">
                    <div class="trailer-list-title">
                        <h2>{{ actionlist.name }}</h2>
                        <h3>{{ actionlist.year }}</h3>
                        <h3>{{ actionlist.rating }}</h3>
                        <h3>{{ actionlist.category }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="trailer-menu">
            <div class="trailer-maintitle">
                <h1>Trending Trailer</h1>
            </div>
            <div v-for="trailerlist in list" :key="trailerlist.id">
                <div class="trailer-recent" @click="openTrailer(trailerlist)">
                    <img class="trailer-image" :src="trailerlist.image" />
                    <div class="trailer-title">
                        <h1>{{ trailerlist.name }}</h1>
                        <h3>{{ trailerlist.year }}</h3>
                        <h3>{{ trailerlist.rating }}</h3>
                        <h3>{{ trailerlist.category }}</h3>
                    </div>
                </div>
            </div>

            <div class="trailer-categorys-title">
                <h1>Categorys</h1>
            </div>
            <div class="trailer-categorys">
                <div class="trailer-array" v-for="category in categorys" :key="category.id" @click="openCategory(category)">{{ category.title }}</div>
            </div>

            <div v-for="trailerlist in trailers" :key="trailerlist.id">
                <div @click="openTrailer(trailerlist)" class="trailer-list">
                    <img class="trailer-list-image" :src="trailerlist.image">
                    <div class="trailer-list-title">
                        <h2>{{ trailerlist.name }}</h2>
                        <h3>{{ trailerlist.year }}</h3>
                        <h3>{{ trailerlist.rating }}</h3>
                        <h3>{{ trailerlist.category }}</h3>
                    </div>
                </div>
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
            trailers: undefined,
            action: undefined,
        }
    },
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
        openCategory(category) {
            this.category = category;

            document.getElementsByClassName('category-dialog')[0].style.display = 'block';
            document.getElementsByClassName('trailer-menu')[0].style.display = 'none';
        },
        closeCategory() {
            document.getElementsByClassName('category-dialog')[0].style.display = 'none';
            document.getElementsByClassName('trailer-menu')[0].style.display = 'block';
        }

    }
}

</script>

