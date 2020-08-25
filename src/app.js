import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input';
import Row from './row'
import Col from './col'
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Footer from './footer';
import Content from './content';
import Toast from './toast'
import plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPage from './tabs-page'
import Popover from './popover'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-layout',Layout);
Vue.component('g-sider',Sider);
Vue.component('g-header',Header);
Vue.component('g-footer',Footer);
Vue.component('g-content',Content);
Vue.component('g-toast',Toast);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-page',TabsPage);
Vue.component('g-popover',Popover);
Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: 'sports'
  },
  created(){
  },
  methods: {
    showToast1(){this.showToast('top')},
    showToast2(){this.showToast('middle')},
    showToast3(){this.showToast('bottom')},
    showToast(position){
      this.$toast('你的智商需要充值！',{
        position,
        closeButton: {
          text: '已充值',
          callback(){
            console.log('充值成功');
          }
        },
        autoClose: false
      })
    }
  }
});
