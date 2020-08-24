<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected',(item,vm)=>{
        let {width,left} = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`
      })
    }
  };
</script>

<style lang='scss' scoped>
  $tab-height: 40px;
  $blue: blue;
  $border-color:  #ddd;
.tabs-head{
  border-bottom: 1px solid $border-color;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 300ms;
  }
  > .action-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>