import Vue from 'vue'
import Vuex from 'vuex'

import exampleModule from './modules/module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    exampleModule
  }
})
