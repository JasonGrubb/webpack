import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false

Vue.component(Buefy.Table.name, Buefy.Table)

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  router,
  store,
  template  : '<App/>',
  components: { App }
})
