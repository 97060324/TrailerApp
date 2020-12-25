import Vue from 'vue'
import Vuex from 'vuex'
import MainMenu from "@/components/MainMenu";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        view: undefined,
    },
    getters: {
        view: state => state.view,
    },
    actions: {
        testfunc(trailerlist) {
            console.log(trailerlist);
        },
    },
    mutations: {
        view(state, view) {
            state.view = view;
        },
    },
})
