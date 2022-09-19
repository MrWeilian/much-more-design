import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/table-custom-columns',
      component: () => import('./table/table-custom-columns.vue'),
      name: 'TableCustomColumns'
    },
    {
      path: '/data-picker-shortcuts',
      component: () => import('./data-picker/data-picker-shortcuts.vue'),
      name: 'DataPickerShortcuts'
    },
    {
      path: '/menu-voice-cloud',
      component: () => import('./menu/menu-voice-cloud.vue'),
      name: 'MenuVoiceCloud'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/table-custom-columns'
    },
  ]
})

export default router
