<template>
  <div>
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import plugin from '../../../src/plugin';
  Vue.use(plugin);
  let currentToast;
  export default {
    methods: {
      showToast1() {this.showToast('top');},
      showToast2() {this.showToast('middle');},
      showToast3() {this.showToast('bottom');},
      showToast(position) {
        this.$toast('你的智商需要充值！', {
          position,
          closeButton: {
            text: '已充值',
            callback() {
              console.log('充值成功');
            }
          },
          autoClose: false
        });
      },
    },
    data() {
      return {
        content: `<button @click="showToast1">top</button>
<button @click="showToast2">middle</button>
<button @click="showToast3">bottom</button>`
      };
    }
  };
</script>

<style lang='scss' scoped>

</style>