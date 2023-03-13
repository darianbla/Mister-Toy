<script>
// import { RouterLink, RouterView } from 'vue-router'
import { toyService } from '../services/toy.service.js'

export default {
data() {
    return {
      toy: null,
    }
  },
  created() {
    const { toyId } = this.$route.params
    if (toyId) {
      toyService.getById(toyId).then((toy) => {
        this.toy = toy
      })
    }
  },
}
</script>

<template>
    <section v-if="toy" class="toy-details">
        <h1>{{toy.name}}</h1>
        <span :class='"price" + toy.price'>price: {{toy.price}}</span>
        <span>{{toy.inStock}}</span>
        <router-link to="/toy">Back</router-link>
    </section>
  </template>

