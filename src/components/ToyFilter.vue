<template>
    <section class="app-filter">
        <form @submit.prevent="handleSubmit">
            <label htmlFor="txt">Search by title</label>
            <input type="text" name="txt" v-model="filter.txt" />
            <select name="by" v-model="filter.by">
                <option value="ALL">All</option>
                <option value="DONE">Done</option>
                <option value="ACTIVE">Active</option>
            </select>
            <button @click="handleSubmit">Search</button>
        </form>
        <pre>{{ filter }}</pre>
    </section>
</template>

<script>
export default {
    name: 'ToyFilter',
    created() { },
    data() {
        return {
            filter: {}
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('filter', { ...this.filter })
        }
    },
}
</script>

<style></style>