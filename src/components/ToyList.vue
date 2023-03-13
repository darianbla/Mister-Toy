<script>
import toyPreview from './ToyPreview.vue'
export default {
    props: {
        toys: {
            type: Array,
            required: true
        }
    },
    methods: {},
    components: {
        toyPreview,
    }
}
</script>
<template>
    <section v-if="toys.length" className="toy-list">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id" @removeToy="$emit('removeToy', $event)" />
    </section>
    <section v-else class="toy-list">Ho-No! No Toys!</section>
</template>