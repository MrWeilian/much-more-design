<script>
import {Table as ElTable} from 'element-ui'
import {isEqual} from 'lodash-es'

export default {
  name: 'renderElTable',
  components: { ElTable },
  props: {
    columnsList: {
      type: Array,
      default: () => []
    },
    checkedColumns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      randomKey: 0
    }
  },
  watch: {
    checkedColumns () {
      this.randomKey = Math.random()
    }
  },
  render (h) {
    const slot = this.getSlots()

    const columns = this.getCheckboxGroupList()

    if (!isEqual(this.columnsList, columns)) {
      this.$emit('updateColumnsList', columns)
    }
    return h(ElTable, {
      ref: 'elTable',
      attrs: this.$attrs,
      on: this.$listeners,
      key: this.randomKey,
    }, slot)
  },
  methods: {
    getSlots () {
      if (!this.$slots.default) return []
      return this.$slots.default.filter(_ => {
        const { propsData } = _.componentOptions
        return this.checkedColumns.includes(propsData.label)
      })
    },
    getCheckboxGroupList () {
      const columnSlots = this.$slots.default

      if (!columnSlots) return []

      return columnSlots.map(_ => {
        if (!_.componentOptions) return {}
        const { propsData } = _.componentOptions
        return { label: propsData.label, prop: propsData.prop }
      })
    }
  }
}
</script>
