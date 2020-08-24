<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluTabsHead'
  };
</script>

<style lang='scss' scoped>
.tabs-head{

}
</style>