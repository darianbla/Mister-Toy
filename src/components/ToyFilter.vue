<template>
    <section class="toy-filter">
        <section class="filter-name">
            <span>Search by name: </span>
            <input @input="setFilterBy" type="text" v-model="filterBy.txt">
        </section>
        <section class="filter-price">
            <span>Search by price: </span>
            <input @input="setFilterBy" type="range" min="0" max="600" v-model="filterBy.price">
        </section>
        <!-- <input @input="setFilterBy" type="text" v-model="filterBy.labels"> -->
        <form class="filter-labels" action="/action_page.php">
            <label for="labels">Search by label:</label>
            <select name="labels" id="labels" v-model="filterBy.labels">
                <option value="On wheels">On wheels</option>
                <option value="Box game">Box game</option>
                <option value="Art">Art</option>
                <option value="Baby">Baby</option>
                <option value="Doll">Doll</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Battery Powered">Battery Powered</option>
            </select>
        </form>
        <button class="btn btn-submit" @click="setFilterBy">Submit</button>
    </section>
</template>

<script>
export default {
    name: 'ToyFilter',
    created() { },
    data() {
        return {
            filterBy: {
                txt: '', page: 0, price: 1, labels: [],
            },
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('filter', { ...this.filter })
        },
        setFilterBy() {
            this.$emit('setFilterBy', this.filterBy)
        },
    },
}
</script>

<style></style>