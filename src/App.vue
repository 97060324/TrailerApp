<template>
    <component :is="ActiveComponent"/>
</template>

<script>
import Main from './components/MainMenu';
import TrailerHead from './components/TrailerHead';

export const TRAILER_HEAD = 'trailer_head';

export default {
    computed: {
        ActiveComponent() {
            switch (this.$store.getters['view']) {
                case TRAILER_HEAD:
                    return TrailerHead;
                default:
                    return Main;
            }
        },
    },
}
</script>
