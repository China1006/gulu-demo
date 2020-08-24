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
    transition: all 300ms;
  }
  > .action-wrapper{
    margin-left: auto;
  }
}
</style>