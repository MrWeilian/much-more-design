# 开发 `element-plus` 组件

## 一、开发环境
1. 进入组件项目：`packages/element-ui`
2. 安装依赖：`pnpm install`
3. 执行命令：`pnpm dev`

dev端口: 3633

## 二、组件开发流程

- 组件目录位于工程：`packages/element-ui/components`。可参照已有组件进行新组件开发。


1. 单个组件中，提供 `index` 组件入口，并提供 `install` 方法,具体如下代码。
  ```js
  import Table from './table.vue'

  Table.install = function (Vue) {
    Vue.component(Table.name, Table)
  }
  
  export const VcTable = Table
  
  export default VcTable
  
  export * from './'
  ```

2. 在当前项目 `components` 目录的入口 `index` 中导出组件。
  ```js
  export * from './button'
  export * from './tag'
  export * from './table'
  // ...
  ```

3. 根目录 `installer.js` 中，添加新开发的组件
```js
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
```

## 三、demo组件注意事项
开发调试的时候，都是通过使用 demo组件 来开发调试组件，在当前项目启动的 dev server，访问的是 demo组件 而非组件库中的组件。

路由文件：`element-ui/demo/router.js`

1. demo 目录中建立对应的**文件夹**，以组件名称为文件夹名称。
2. demo组件 命名，以 **组件名+功能** 的方式进行命名。如自定义列的table组件：table-custom-columns。
3. 添加路由。注意，路由不仅仅是当前项目中访问，在 docs 项目中也是需要的，并且 docs 中的插件会通过一定规则来访问demo组件的源码文件，所以 **路由path 需要和 文件名 一致**。
