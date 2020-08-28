<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluHeader'
  };
</script>

<style lang='scss' scoped>
  $border-color:#666666;
  .header{
    border: 1px solid $border-color;
  }
</style>