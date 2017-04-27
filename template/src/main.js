import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD-MMM-YYYY')
  }
})

Vue.component(Buefy.Table.name, Buefy.Table)

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  router,
  store,
  template  : '<App/>',
  components: { App }
})
