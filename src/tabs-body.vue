<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluTabsBody',
    inject: ['eventBus']
  };
</script>

<style lang='scss' scoped>
.tabs-body{

}
</style>