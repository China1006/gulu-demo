<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluCollapse'
  };
</script>

<style lang='scss' scoped>
  $gray: #ddd;
  $border-radius: 4px;
.collapse{
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>