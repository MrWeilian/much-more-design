<template>
  <div>
    <el-date-picker
        ref="datePicker"
        v-model="dataPicker"
        type="daterange"
        align="right"
        :picker-options="pickerOptions"
        placeholder="Pick a date"
    />
  </div>
</template>

<script>
import { createDateRangeShortcuts } from '@much-more/vc-element-ui'

export default {
  name: 'DataPickerShortcuts',
  data () {
    return {
      pickerOptions: {
        shortcuts: createDateRangeShortcuts(),
      },
      dataPicker: '',
      dataPicker2: '',
    }
  },
  mounted() {
    this.$refs.datePicker.focus()
  }
}
</script>
