<template>
  <section class="great-box">
      <slot name="header"></slot>
      <h3>Im a box</h3>
      <slot></slot>
      <slot name="footer"></slot>
  </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .great-box{
        height: 200px;
        width: 200px;
        background-color: lightcoral;
    }
</style>