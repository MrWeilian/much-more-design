# 使用 `vc-element-plus`

本节将介绍如何在项目中使用 Vc Element Plus。

## 环境支持
::: tip 当前封装所使用的库版本
- element-plus 版本为： `2.2.+`
- vue 版本为： `3.2.+`
:::

## 安装

### 1. 使用包管理器
```shell
# NPM
npm install xxx

# Yarn
yarn install xxx

# pnpm
pnpm install xxx
```

## 快速开始
### 1. 完整引入
`vc-element-plus` 将会在Vue应用中进行**全局组件注册**。

```ts
// main.ts
import { createApp } from 'vue'
import VcElementPlus from '@vc-element-plus'
import '@vc-element-plus/dist/style.css'

const app = createApp(App)

app.use(VcElementPlus)
```

### 2. 按需引入
需要在使用组件的地方手动对 `Vc组件` 进行导入。
```html
<!-- App.vue -->
<template>
  <vc-table>
    <el-table-column ... />
  </vc-table>
</template>

<script setup>
  import { VcTable } from '@vc-element-plus'
</script>
```

## 注意事项
::: danger 关于原生库
组件库打包时会对第三方包如 `element-plus` 、`vue` 进行 `externals` 处理，所以务必保证使用组件的项目中导入必须要的第三方库。
:::
