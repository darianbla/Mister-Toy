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
      <!-- <img src={{toy.img}} alt=""> -->
    <button @click="onRemove(toy._id)">X</button>
  </div>
</template>

                