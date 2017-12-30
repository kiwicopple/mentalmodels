// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import {
//   MdButton,
//   MdToolbar,
//   MdLayout,
//   MdList,
//   MdIcon,
//   MdContent,
//   MdCheckbox,
//   MdCard,
//   MdDrawer,
//   MdSubheader
// } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
//
// Vue.use(MdButton)
// Vue.use(MdToolbar)
// Vue.use(MdLayout)
// Vue.use(MdDrawer)
// Vue.use(MdIcon)
// Vue.use(MdContent)
// Vue.use(MdCheckbox)
// Vue.use(MdCard)
// Vue.use(MdList)
// Vue.use(MdSubheader)
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
