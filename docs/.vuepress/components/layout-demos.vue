<template>
  <div>
    <g-layout style="height: 100vh">
      <g-sider>sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Layout from '../../../src/layout'
  import Sider from '../../../src/sider'
  import Header from '../../../src/header.vue';
  import Content from '../../../src/content.vue';
  import Footer from '../../../src/footer.vue';
  export default {
    components:{
      'g-layout': Layout,
      'g-sider': Sider,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
    },
    data(){
      return{
        content:`<g-layout>
      <g-sider>sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>`
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>