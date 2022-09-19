import Table from './table.vue'

Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

export const VcTable = Table

export default VcTable

export * from './'
