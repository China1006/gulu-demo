<template>
  <div class="tabs-page" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
  export default {
    name: 'GuluTabsPage',
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props:{
      name:{
        type: [String , Number],
        required: true
      }
    },
    computed: {
      classes(){
        return{
          active: this.active
        }
      }
    },
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    }
  };
</script>

<style lang='scss' scoped>
.tabs-page{
  &.active{
    background: blue;
  }
}
</style>