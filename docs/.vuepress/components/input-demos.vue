<template>
  <div>
    <g-input v-model="message" ></g-input>
    <g-input value="未知" disabled></g-input>
    <g-input value="未知" readonly></g-input>
    <g-input value="未知" error="最多五个字" @change="inputChange"></g-input>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Input from '../../../src/input'
  export default {
    components:{
      'g-input': Input
    },
    data(){
      return{
        message: 'hi',
        content:`
        <g-input v-model="message" ></g-input>
<g-input value="未知" disabled></g-input>
<g-input value="未知" readonly></g-input>
<g-input value="未知" error="最多五个字" @change="inputChange"></g-input>
        `.replace(/^s+|s+$/g,'').trim()
      }
    },
    methods:{
      inputChange(){
        console.log('hi')
      }
    }
  };
</script>