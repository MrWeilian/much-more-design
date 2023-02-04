<template>
  <el-container class="aside">
    <el-aside>
      <vc-menu title="" v-model:collapse="collapse">
        <el-sub-menu index="0">
          <template #title>
            <el-icon>
              <odometer />
            </el-icon><span>探测中心</span>
          </template>
          <el-menu-item index="/snoop/script">脚本配置</el-menu-item>
          <el-menu-item index="/snoop/act">探测活动配置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <monitor />
            </el-icon><span>调度中心</span>
          </template>
          <el-menu-item index="/resource">资源配置</el-menu-item>
          <el-menu-item index="/rule">调度规则配置</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/location">
          <el-icon>
            <guide />
          </el-icon><template #title>Location管理</template>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <data-analysis />
            </el-icon><span>数据统计</span>
          </template>
          <el-menu-item index="/detect">探测数据</el-menu-item>
          <el-menu-item index="/schedule">调度数据</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/log">
          <el-icon>
            <notebook />
          </el-icon><template #title>操作日志</template>
        </el-menu-item>
      </vc-menu>
    </el-aside>
    <el-main>

    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { VcMenu } from '@much-more/vc-element-plus'
import {
  Odometer,
  Monitor,
  Guide,
  DataAnalysis,
  Notebook
} from '@element-plus/icons-vue'

const collapse = ref(false)
</script>
