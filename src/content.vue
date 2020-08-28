<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluContent'
  };
</script>

<style lang='scss' scoped>
  $border-color: #333;
.content{
  border: 1px solid $border-color;
  flex-grow: 1;
}
</style>