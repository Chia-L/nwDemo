// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'view-design/dist/styles/iview.css'
import ViewUI from 'view-design'

Vue.prototype._nw = nw

Vue.config.productionTip = false

Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
