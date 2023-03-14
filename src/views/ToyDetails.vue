<script>
// import { RouterLink, RouterView } from 'vue-router'
import { toyService } from '../services/toy.service.js'
export default {

  data() {
    return {
      toy: null,
    }
  },
  watch: {
    '$route.params': {
      handler() {
        const { toyId } = this.$route.params
        toyService
          .getById(toyId)
          .then(toy => (this.toy = toy))
      },
      immediate: true,
    },
  },
}
</script>

<template>
  <section v-if="toy" class="toy-details">
    <span>Name: {{toy.name}}</span>
    <span>price: {{toy.price}}</span>
    <span v-if="toy.instock">Instock!</span>
    <span v-else>Not instock</span>
    <!-- {{ toy }} -->
    <button class="btn btn-back"><router-link to="/toys">Back</router-link></button>
  </section>
</template>

