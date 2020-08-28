<template>
  <div>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Collapse from '../../../src/collapse.vue';
  import CollapseItem from '../../../src/collapse-item';

  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedTab: ['2', '1'],
        content:`<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
  </g-collapse>`
      };
    }
  };
</script>

<style lang='scss' scoped>

</style>