<template>
  <el-date-picker
      v-model="dataPicker"
      type="daterange"
      :shortcuts="shortcuts"
      placeholder="Pick a date"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
import { createDateRangeShortcuts } from '@much-more/vc-element-plus'

const shortcuts = createDateRangeShortcuts()

const dataPicker = ref()
</script>

<script>
export default {
  name: 'DataPickerShortcuts'
}
</script>
