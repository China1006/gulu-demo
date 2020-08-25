import Button from '../src/button';

const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPage from '../src/tabs-page'
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-page',TabsPage);
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  });
  it('接收name属性', ()=> {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接收disabled属性', ()=> {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: false,
      }
    }).$mount()
    console.log(vm.$el.outerHTML);
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})