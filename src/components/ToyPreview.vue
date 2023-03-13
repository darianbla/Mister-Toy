<script>
export default {
  props: {
    toy: {
      type: Object,
      required: true
    }
  },
  methods: {
    onRemove(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>


<template>
  <div className="toy-preview">
    <!-- <span>🐛</span> -->
    <h4>{{ toy.name }}</h4>
    <span :class='"price" + toy.severity'>price: {{ toy.price }}</span>
    <div class="actions">
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id"> Edit</router-link>
    </div>
    <!-- <img src={{toy.img}} alt=""> -->
    <button class="btn btn-close" @click="onRemove(toy._id)"><i class="fa-solid fa-trash-can"></i></button>
  </div>
</template>

                