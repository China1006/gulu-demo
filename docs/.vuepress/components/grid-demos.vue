<template>
  <div>
    <g-row>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24">
      </g-col>
      <g-col span="24">
      </g-col>
      <g-col span="24">
      </g-col>
    </g-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Row from '../../../src/row';
  import Col from '../../../src/col';

  export default {
    components:{
      'g-row': Row,
      'g-col': Col
    },
    data(){
      return{
        content:`<g-row>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24" :narrow-pc="{span: 8}">
      </g-col>
      <g-col span="24">
      </g-col>
      <g-col span="24">
      </g-col>
      <g-col span="24">
      </g-col>
    </g-row>`
      }
    }

  };
</script>

<style lang='scss' scoped>

</style>