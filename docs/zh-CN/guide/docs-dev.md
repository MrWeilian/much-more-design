# docs 项目

本节将介绍如何开发、维护 **docs** 项目。

## 一、开发环境启动
1. 依赖安装：`pnpm install`
2. 启动 **docs** 项目 dev server：
   - 项目根路径执行 `pnpm docs:dev`
   - 进入 **docs** 项目执行 `pnpm docs:dev`
3. 启动**本次开发的组件库** dev server：
   - 进入相应的组件库目录，执行 `pnpm dev`
   
---
这里简单对 docs 开发环境中预览 demo组件 进行说明。为了实现各大框架的样式隔离，最终采用了 `iframe` 的方案，也就是每个 demo组件 实际上是通过 `iframe` 的形式加载以在文档项目中显示。所以，如果需要在开发环境的文档项目中预览 demo组件，需要**到对应的组件库中启动 dev 环境**。

关于各ui库 dev server 端口说明：
1. element-plus：`3333`
2. element-ui：`3633`
3. ant-design：`3933`

## 二、侧边栏说明
1. 指南侧边栏
   - 需要手动配置。`/.vitepress/configs/sildebar.ts`

2. 组件库侧边栏
   - 组件库侧边栏通过插件生成，开发者无需手动配置。
   - **请按照当前的文件夹层级进行开发**，实例如下。具体一级、二级分类完全参照对应的ui库，可自行参考。
   ```
   > zh-CN
      > components
         > element-plus
            > Data 数据展示 (对应侧边栏一级菜单)
               > table.md（对应侧边栏二级菜单）
   ```

## 三、demo组件引入

组件文档按照对应的 ui框架 的对应组件文档的结构来正常编写即可，这里不再多做赘述。其中需要注意的点就是**如何导入对应的** `demo组件` 。

由于在 docs 项目导入 **demo组件运行状态**、**源代码** 是通过插件实现，节省了很多人工成本，所以开发者需要遵循一定的使用规范。接下来以 `vc-element-plus` 为例进行讲解。

### 1. demo 高度
由于使用 `iframe` 对 demo组件 进行包裹，所以需要手动设置 `iframe` 的高度（**字符串**）。不传默认为 `"320px"` 。
```html
<vp-demo
   demo-height="270px"
/>
```

### 2. 组件加载、源代码导入
组件加载、源码导入通过插件识别 `kebab case` 命名规范的 `sourceCode` 实现。

属性配置：`sourceCode=element-plus:::table/table-custom-columns`

属性讲解: 
1. 通过 `:::` 进行 项目名 、 文件地址进行分割
2. 分割得到项目名 `element-plus` 会采用 `element-plus` 对应的 dev端口。且会在 `element-plus` 项目中读取源代码。
3. 分割得到路径 `table/table-custom-columns` ，插件会到**对应项目的 demo 目录下 读取源码文件**，并通过 `prismjs` 对源码进行高亮等处理。
4. 注意 demo组件的 **文件名 需要和对应的 路由path 一致**（对应案例中的：`/table-custom-columns`）。插件会根据文件名拼接 dev 环境的 demo组件 访问地址。

可以看到 `sourceCode` 最终通过插件会得到个经过 `encode` 的 html 代码。
```html
<vp-demo
    demo-height="270px"
    source-code="element-plus:::table/table-custom-columns"
/>
```
