<template>
    <component :is="ActiveComponent"/>
</template>

<script>
import Main from './components/MainMenu';
import TrailerHead from './components/TrailerHead';
import TrailerOne from './components/TrailerOne';
import TrailerTwo from './components/TrailerTwo';

export const TRAILER_HEAD = 'trailer_head';
export const TRAILER_ONE = 'trailer_one';
export const TRAILER_TWO = 'trailer_two';


export default {
    computed: {
        ActiveComponent() {
            switch (this.$store.getters['view']) {
                case TRAILER_HEAD:
                    return TrailerHead;
                case TRAILER_ONE:
                    return TrailerOne;
                case TRAILER_TWO:
                    return TrailerTwo;
                default:
                    return Main;
            }
        },
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
