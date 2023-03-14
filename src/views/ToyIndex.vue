<script>
import ToyFilter from '../components/ToyFilter.vue'
import ToyList from '../components/ToyList.vue';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'ToyIndex',
    computed: {
        toys() {
            return this.$store.getters.toysToDisplay
        },

    },
    methods: {
        removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          showSuccessMsg('toy removed')
        })
        .catch(err => {
          showErrorMsg('Cannot remove toy')
        })
    },
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy })
    }
        // setFilterBy(filterBy) {
        //     this.filterBy = filterBy
        //     this.$store.dispatch({ type: 'loadToys', filterBy: this.filterBy })
        // },
        // removeToy(toyId) {
        //     this.$store
        //         .dispatch({ type: 'removeToy', toyId })

        // },
    },
    components: {
        ToyList,
        ToyFilter,
    },
}
</script>

<template>
    <main class="toys-app">
        <h1>
            our <span class="blue">t</span><span class="orange">o</span><span class="blue">ys</span><span
                class="orange">!</span>
        </h1>
        <router-link :to="'/toys/edit'"><button class="btn btn-add">Add Toy</button></router-link>
        <toy-filter @setFilter="setFilter"></toy-filter>
        <toy-list v-if="toys" :toys="toys" @removeToy="removeToy"/>
        
        <!-- <ToyFilter @filter="setFilter" /> -->
    </main>
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