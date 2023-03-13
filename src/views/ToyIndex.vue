<script>
import ToyFilter from '../components/ToyFilter.vue'
import ToyList from '../components/ToyList.vue';

export default {
    name: 'ToyIndex',
    data() {
        return {
            sortBy: {
                by: '',
                desc: 1
            },
            bugs: [],
            filterBy: { txt: '', page: 0, price: 1, labels: null, img: '' },
            toggle: false,
            totalPages: 0
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toysToDisplay
        },

    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy
            this.$store.dispatch({ type: 'loadToys', filterBy: this.filterBy })
        },
        removeToy(toyId) {
            this.$store
                .dispatch({ type: 'removeToy', toyId })

        },
    },
    components: {
        ToyList,
        ToyFilter,
    },
}
</script>

<template>
    <h1>
        our <span class="blue">t</span><span class="orange">o</span><span class="blue">ys</span><span
            class="orange">!</span>
    </h1>
    <toy-filter @setFilterBy="setFilterBy"></toy-filter>
    <!-- <router-link :to="'/toy/edit'"><button class="btn btn-add">Add Toy</button></router-link> -->
    <toy-list v-if="toys" :toys="toys" @removeToy="removeToy">
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