<script>
// import ToyFilter from '../components/ToyFilter.vue'
import ToyList from '../components/ToyList.vue';
export default {
    name: 'ToyIndex',
    computed: {
        toys() {
            return this.$store.getters.toysToDisplay
        },

    },
    methods: {
        // setFilter(filter) {
        //     this.$store.commit({ type: 'setFilter', filter })

        // },
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })

        },
    },
    components: {
        ToyList,
    },
}
</script>

<template>
    <h1>
        our <span class="blue">t</span><span class="orange">o</span><span class="blue">ys</span><span
            class="orange">!</span>
    </h1>
    <toy-list v-if="toys" :toys="toys" @removeToy="removeToy">
        {{ toys }}
    </toy-list>

    <!-- <ToyFilter @filter="setFilter" /> -->
    <!-- {{ msg }} -->
</template>

<style>
.orange {
    color: var(--clr1);
    font-size: inherit;
    margin: 0;
    padding: 0;
}

.blue {
    color: var(--clr0);
    font-size: inherit;
    margin: 0;
    padding: 0;
}
</style>