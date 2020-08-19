<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    mounted(){
      for (let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if ( name !== 'button'){
          console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>

<style lang='scss' >
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
      border-radius: 0;
      margin-left: -1px;//右移

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{//浮起来
        position: relative;
        z-index: 1;
      }
    }
  }
</style>