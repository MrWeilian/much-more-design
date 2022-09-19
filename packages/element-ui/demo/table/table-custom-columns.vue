<template>
  <vc-table :data="tableData" :default-columns="defaultColumns">
    <el-table-column
        prop="date"
        label="日期"
        width="90">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="90">
    </el-table-column>
    <el-table-column
        prop="age"
        label="年龄"
        width="90">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </vc-table>
</template>

<script>
import { VcTable } from '@much-more/vc-element-ui'
export default {
  name: 'TableCustomColumns',
  components: { VcTable },
  data () {
    return {
      defaultColumns: ['日期', '姓名', '地址'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1516 弄111'
      }]
    }
  }
}
</script>
