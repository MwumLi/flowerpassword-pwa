import Vue from 'vue'
import Router from 'vue-router'
import FpCode from '@/components/FpCode.vue'
import Setting from '@/components/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fpcode',
      component: FpCode
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
