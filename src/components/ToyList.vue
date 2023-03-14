<script>
import ToyPreview from './ToyPreview.vue'
export default {
    name: 'ToyList',
    props: {
        toys: Array,
        required: true,
        default: [],
    },
    components: {
        ToyPreview,
    },
}
</script>
<template>
    <ul v-if="toys.length" class="clean-list toy-list">
        <ToyPreview v-for="toy in toys" :key="toy._id" :toy="toy" @removed="$emit('removeToy', toy._id)" />
    </ul>
    <p v-else>No toys to show..</p>
</template>