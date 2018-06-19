import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
import {
  Vuetify,
  VApp,
  VBottomNav,
  VTextField,
  VBtn,
  VIcon,
  VGrid,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBottomNav,
    VTextField,
    VBtn,
    VIcon,
    VGrid,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
