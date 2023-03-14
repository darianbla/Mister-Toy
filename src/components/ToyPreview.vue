<script>
export default {
    data() {
        return {
            hover: false,
        }

    },
    name: 'ToyPreview',
    emits: ['removed'],
    props: {
        toy: Object,
    },
}
</script>


<template>
    <li class="toy-preview" @mouseover="hover = true" @mouseleave="hover = false">
        <section>
            <p>Toy Name:</p>
            <p class="toy-value">{{ toy.name }}</p>
            <p>Toy Price:</p>
            <p class="toy-value">{{ toy.price }}</p>
        </section>
        <div class="tools flex" v-if="hover">
            <button @click="$emit('removed', toy._id)" class="btn btn-close">
                <span><i class="fa-regular fa-trash-can"></i></span>
            </button>
            <RouterLink :to="'/toys/edit/' + toy._id" class="btn">
                <span>Edit</span>
            </RouterLink>
            <RouterLink :to="'/toys/details/' + toy._id" class="btn">
                <span>Details</span>
            </RouterLink>
        </div>
    </li>
</template>

                