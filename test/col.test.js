const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接收span属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
  it('接收offset属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
  it('接收pc属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
  it('接收ipad属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
  it('接收narrowPc属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-narrowPc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-narrowPc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
  it('接收widePc属性', ()=> {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-widePc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-widePc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
})