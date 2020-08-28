<template>
  <div>
    <g-button icon="left">默认按钮</g-button>
    <g-button icon="right" icon-position="right">默认按钮</g-button>
    <g-button loading>默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <div style="margin-top: 10px">
      <g-button-ground>
        <g-button icon="left">上一页</g-button>
        <g-button >更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-ground>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button';
  import ButtonGround from '../../../src/button-group'
  export default {
    components:{
      'g-button': Button,
      'g-button-ground': ButtonGround
    },
    data(){
      return {
        content:`<g-button icon="left">默认按钮</g-button>
<g-button icon="right" icon-position="right">默认按钮</g-button>
<g-button loading>默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button-ground>
    <g-button icon="left">上一页</g-button>
    <g-button >更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-ground>
        `.replace(/^s+|s+$/g,'').trim()
      }
    }
  }
</script>