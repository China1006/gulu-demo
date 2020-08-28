<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluFooter'
  };
</script>

<style lang='scss' scoped>
  $border-color: #666666;
  .footer {
    border: 1px solid $border-color;
  }
</style>