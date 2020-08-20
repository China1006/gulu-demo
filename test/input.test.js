const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '12'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('12')
    })
    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
    })
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
    })
    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
      const errormessage = vm.$el.querySelector('.errorMessage')
      expect(errormessage.innerText).to.eq('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    after(function () {
      vm.$destroy()
    });
    it('支持change/input/focus/blur事件', () => {
      ['change','input','focus','blur'].forEach((eventName)=>{
        vm = new Constructor({}).$mount()
        //执行间谍回调
        const callback = sinon.fake();
        vm.$on(eventName,callback)
        //触发input的change事件
        let event = new Event(eventName);
        //造个target，因为你拿不了target的值
        Object.defineProperty(event,'target',{value: {value: 'hi'}, enumerable: true})
        let inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event)
        //对比原事件和回调
        expect(callback).to.have.been.calledWith('hi')
      })
    });
  })
})