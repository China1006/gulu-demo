<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"></div>
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
      this.eventBus.$on('update:selected',(item)=>{

      })
    }
  };
</script>

<style lang='scss' scoped>
  $tab-height: 40px;
  $blue: blue;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid red;
  position: relative;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    width: 100px;
  }
  > .action-wrapper{
    margin-left: auto;
  }
}
</style>