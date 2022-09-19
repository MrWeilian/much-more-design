import Menu from './menu.vue'

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

export const VcMenu = Menu

export default VcMenu

export * from './'
