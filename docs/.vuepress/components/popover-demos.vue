<template>
  <div>
    <g-popover position="bottom" trigger="click">
      <template slot="content" slot-scope="{close}">
        <div>1</div>
        <g-button @click="close">关闭</g-button>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="top">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';

  export default {
    components: {
      'g-popover': Popover,
      'g-button': Button
    },
    data(){
      return{
        content:`<g-popover position="bottom" trigger="click">
      <template slot="content" slot-scope="{close}">
        <div>1</div>
        <g-button @click="close">关闭</g-button>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="top">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>2</div>
      </template>
      <g-button>点我</g-button>
    </g-popover>`
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>