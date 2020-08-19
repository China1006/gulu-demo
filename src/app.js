import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
});
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
{
  //动态生成按钮
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left'
    }
  })
  vm.$mount('#test')
  let useElement = vm.$el.querySelector('use')
  //期待xlink：href的值为#i-left
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-left')
  vm.$el.remove()
  vm.$destroy()
}
{
  //测试loading
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  //判断order展现的顺序
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left',
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  //getComputedStyle():返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  //完全销毁这个实例
  vm.$destroy()
}
{
  //判断iconPosition='right'的order
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  //getComputedStyle():返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  //click的测试
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left',
    }
  })
  vm.$mount()
  //事件监听
  let spy = chai.spy(function () {

  })
  vm.$on('click',spy)
  let button = vm.$el
  button.click()
  //spy是否被执行
  expect(spy).to.have.been.called()
}