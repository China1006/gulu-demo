<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created(){
    }
  };
</script>

<style lang='scss' scoped>
  $tab-height: 40px;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .action-wrapper{
    margin-left: auto;
  }
}
</style>