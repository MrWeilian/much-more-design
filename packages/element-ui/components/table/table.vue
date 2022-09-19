<template>
  <div class="table-wrapper">
    <div class="table-options">
      <el-popover
          popper-class="vc-table-popover"
          placement="bottom"
      >
        <el-checkbox
            class="select-all"
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
        >
          全选
        </el-checkbox>
        <el-checkbox-group v-model="checkedColumns" @change="handleChecked">
          <el-checkbox
              v-for="column in columnsList"
              :label="column.label"
              :key="column.label"
          >
            {{ column.label }}
          </el-checkbox>
        </el-checkbox-group>
        <template #reference>
          <i class="options-item el-icon-setting"></i>
        </template>
      </el-popover>
    </div>

    <render-el-table
        ref="renderElTable"
        v-on="$listeners"
        v-bind="$attrs"
        :columns-list.sync="columnsList"
        :checked-columns="checkedColumns"
        @updateColumnsList="updateColumnsList"
    >
      <slot />
    </render-el-table>
  </div>
</template>

<script>
import { Popover as ElPopover, CheckboxGroup as ElCheckboxGroup, Checkbox as ElCheckbox, Icon as ElIcon } from 'element-ui'
import renderElTable from './render-el-table.vue'
let staticOptions = []

export default {
  name: 'VcTable',
  components: { ElPopover, ElCheckbox, ElCheckboxGroup, ElIcon, renderElTable },
  props: {
    defaultColumns: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      checkAll: true,
      columnsList: [],
      checkedColumns: [],
      isIndeterminate: false,
      childrenVNode: []
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedColumns = val ? staticOptions : [];
      this.isIndeterminate = false;
    },
    handleChecked (value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.columnsList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.columnsList.length
    },
    updateColumnsList (newColumnsList) {
      this.columnsList = newColumnsList
      staticOptions = newColumnsList.map(_ => _.label)
      if (!this.checkedColumns.length) {
        this.checkedColumns = staticOptions
      } else {
        this.checkedColumns = this.checkedColumns.filter(_ => staticOptions.includes(_))
      }
      this.handleChecked (this.checkedColumns)
    }
  },
  mounted() {
    if (this.defaultColumns.length) {
      this.checkedColumns = this.checkedColumns.filter(_ => this.defaultColumns.includes(_))
    }
  }
}
</script>

<style scoped lang="less">
.table-wrapper {
  .table-options {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .options-item {
      cursor: pointer;
    }
    .options-item + .options-item {
      margin-right: 8px;
    }
  }
}
</style>
<style lang="less">
.vc-table-popover {
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .select-all {
    &:after {
      margin-top: 6px;
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: var(--vc-color-primary-light-8);
    }
  }

  .el-checkbox {
    display: block;
  }

  .el-checkbox-group {
    .el-checkbox {
      margin-top: 8px;
      white-space: nowrap;
    }
  }
}
</style>

