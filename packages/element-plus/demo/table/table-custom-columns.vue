<template>
  <vc-table :data="tableData" :default-columns="defaultColumns">
    <el-table-column prop="date" label="Date" width="160" />
    <el-table-column prop="name" label="Name" width="90" />
    <el-table-column prop="age" label="Age" width="90" />
    <el-table-column prop="address" label="Address" />
  </vc-table>
</template>

<script setup>
import { VcTable } from '@much-more/vc-element-plus'

const defaultColumns = ['Date', 'Name', 'Address']

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    age: '20',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<script>
export default {
  name: 'TableCustomColumns'
}
</script>
