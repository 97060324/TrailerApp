<template>
    <div class="TrailerHead">
        <router-link class="TrailerHead-back" to="/">Back</router-link>
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
        Vue.axios.get('https://api.npoint.io/ec0b1a8c5cefd2debd47')
            .then((resp) => {
                this.trailers = resp.data.trailerone;
            })
    },
}
</script>