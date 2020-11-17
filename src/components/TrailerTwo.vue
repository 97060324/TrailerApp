<template>
    <div class="TrailerHead">
        <div @click="$store.commit('view', undefined)" class="TrailerHead-back" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="31.504" height="30.705" viewBox="0 0 31.504 30.705">
                <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z" transform="translate(0.004 -2.647)" fill="#fff"/>
            </svg>
        </div>
        <div class="TrailerHead-card" v-for="TrailerHead in trailers">
            <img :src="TrailerHead.image">
        </div>
        <div class="TrailerHead-dialog" v-for="TrailerHead in trailers">
            <div class="TrailerHead-dialog-inner trailer-title">
                <h1>{{ TrailerHead.name }}</h1>
                <h3>{{ TrailerHead.year }}</h3>
                <h3>{{ TrailerHead.rating }}</h3>
                <h3>{{ TrailerHead.category }}</h3>
                <p>{{ TrailerHead.desc }}</p>
                <button>Watch Trailer</button>
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
    name: 'MainTrailer',
    components: {

    },
    data() {
        return {
            trailers: undefined,
        }
    },
    mounted() {
        Vue.axios.get('https://api.npoint.io/c154b1c2c0dece6540e4')
            .then((resp) => {
                this.trailers = resp.data.trailertwo;
            })
    },
}
</script>
