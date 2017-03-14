import Vue from 'vue'
import Router from 'vue-router'
import Component from 'components/Component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path     : '/',
      name     : 'Component',
      component: Component
    }
  ]
})
