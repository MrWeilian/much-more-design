import { VcTable } from './components/table'
import { VcMenu } from './components/menu'

const elmUiComponents = [
  VcTable,
  VcMenu
]

export const installer = (Vue) => {
  elmUiComponents.forEach((comp) => {
    Vue.component(comp.name, comp)
  })
}
