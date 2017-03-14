import Vue from 'vue'
import Component from 'src/components/Component'

describe('Component.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.component h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
