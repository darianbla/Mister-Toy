<template>
  <AppHeader />
  <section class="main-layout">
    <RouterView />
    <!-- <ToyDetails /> -->
    <!-- <ToyIndex /> -->
  </section>
  <AppFooter />
</template>

<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
// import ToyDetails from './components/ToyDetails.vue';
// import ToyIndex from './pages/ToyIndex.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // ToyDetails,
    // ToyIndex,
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
};
</script>


<style scoped>
/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a:first-of-type {
  border: 0;
}
</style>
