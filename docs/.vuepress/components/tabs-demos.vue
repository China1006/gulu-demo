<template>
  <div>
    <g-tabs selected="woman">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="woman">美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-page name="woman">图片……</g-tabs-page>
        <g-tabs-page name="finance">走势……</g-tabs-page>
        <g-tabs-page name="sports">看点……</g-tabs-page>
      </g-tabs-body>
    </g-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Tabs from '../../../src/tabs';
  import TabsHead from '../../../src/tabs-head'
  import TabsBody from '../../../src/tabs-body'
  import TabsItem from '../../../src/tabs-item'
  import TabsPage from '../../../src/tabs-page'

  export default {
    components:{
        'g-tabs': Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-item': TabsItem,
        'g-tabs-body': TabsBody,
        'g-tabs-page': TabsPage
    },
    data(){
      return{
        content:`
        <g-tabs selected="woman">
      <g-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <g-tabs-item name="woman">美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-page name="woman">图片……</g-tabs-page>
        <g-tabs-page name="finance">走势……</g-tabs-page>
        <g-tabs-page name="sports">看点……</g-tabs-page>
      </g-tabs-body>
    </g-tabs>`.replace(/^s+|s+$/g,'').trim()
      }
    }
  };
</script>
