<script>
import {ElTable} from 'element-plus'
import {defineComponent, Fragment, h, useSlots, watch} from 'vue'
import {isEqual} from 'lodash'

export default defineComponent({
  name: 'render-el-table',
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
  setup (props, context) {
    const slots = useSlots()
    let randomKey = 0
    const getChildrenVNode = (slotArr) => {
      const childrenVNode = []
      slotArr.forEach((_) => {
        if (_.type === Fragment) {
          childrenVNode.push(...getChildrenVNode(_.children))
        } else {
          childrenVNode.push(_)
        }
      })
      return childrenVNode
    }

    const filterChildrenVNode = (childrenVNode, checkedColumns) => {
      return childrenVNode.filter(_ => {
        const { label } = _.props
        return checkedColumns.includes(label)
      })
    }

    const getCheckboxGroupList = (childrenVNode) => {
      return childrenVNode.map(_ => {
        const { prop, label } = _.props
        return { prop, label }
      })
    }

    watch(() => props.checkedColumns, (newCheckedColumns) => {
      randomKey = Math.random()
    })

    return () => {
      const childrenVNode = getChildrenVNode(slots.default())
      const columns = getCheckboxGroupList(childrenVNode)
      if (!isEqual(props.columnsList, columns)) {
        context.emit('updateColumnsList', columns)
      }

      const filterChildren = filterChildrenVNode(childrenVNode, props.checkedColumns)

      return h(ElTable, {
        attrs: context.attrs,
        key: randomKey,
      }, () => filterChildren)
    }
  }
})
</script>

<style scoped>

</style>
