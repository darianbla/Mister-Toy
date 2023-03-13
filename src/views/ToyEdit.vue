<script>
import { toyService } from '../services/toy.service.js'
import { eventBus } from '../services/event-bus.service.js'
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
    } else this.toy = toyService.getEmptyToy()
  },
  methods: {
    saveToy() {
      //   if (!this.toy.name || !this.toy.price ||!this.toy.label) eventBus.emit('show-msg', { txt: 'All fields must be filled out.', type: 'error' })
      //   else
      //     toyService.save({ ...this.toy })
      //     .then(() => {
      //       eventBus.emit('show-msg', { txt: 'Toy saved successfully', type: 'success' })
      //       
      this.$store.dispatch({ type: 'saveToy', toy: this.toy }).then(this.$router.push('/toy'))
      // })
    },
    closeEdit() {
      this.$router.push('/toy')
    },
  },
}
</script>


<template>
  <section v-if="toy" class="toy-edit">
    <h1>{{ (toy._id) ? 'Edit Toy' : 'Add Toy' }}</h1>
    <form @submit.prevent="saveToy">
      <label>
        <span>Name: </span>
        <input type="text" v-model="toy.name" placeholder="Enter name...">
      </label>
      <label>
        <span>Price: </span>
        <input type="number" v-model="toy.price" placeholder="Enter price..." min="0" max="600">
      </label>
      <label>
        <span>Label: </span>
        <input type="text" v-model="toy.labal" placeholder="Enter label...">
      </label>
      <div class="actions">
        <button class="btn" type="submit"> {{ (toy._id) ? 'Save' : 'Add' }}</button>
        <button class="btn" @click.prevent="closeEdit">Close</button>
      </div>
    </form>
  </section>
</template>