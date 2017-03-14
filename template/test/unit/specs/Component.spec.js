import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Component from 'src/components/Component'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Component.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor().$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(vm.$el.querySelector('.component h1').textContent)
      .to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
