// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BottomApp from './BottomApp'

import 'view-design/dist/styles/iview.css'
import ViewUI from 'view-design'

Vue.config.productionTip = false

Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#bottom-app',
  components: { BottomApp },
  template: '<BottomApp/>'
})
