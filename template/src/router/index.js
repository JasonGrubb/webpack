import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Component from 'components/Component'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'Component',
      component: Component{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
