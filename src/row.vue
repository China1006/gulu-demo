<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'row'
  };
</script>

<style lang='scss' scoped>
  .row{
    display: flex;
  }
</style>