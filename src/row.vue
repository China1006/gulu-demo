<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number,String]
      },
      align:{
        type: String,
        validator: (value)=> {
          return  ['left', 'right', 'center'].indexOf(value) >= 0;
        }
      }
    },
    mounted() {
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    computed:{
      rowClass(){
        let {align} = this;
        return [align && `align-${align}`]
      },
      rowStyle(){
        return {marginLeft: -this.gutter/2 + 'px', marginRight: -this.gutter/2 + 'px'}
      }
    }
  };
</script>

<style lang='scss' scoped>
  $outline-color: gray;
  .row{
    display: flex;
    flex-wrap: wrap;
    outline: 1px solid $outline-color;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>