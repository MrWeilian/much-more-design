<template>
  <div class="container" :class="{ 'full-screen-container': isFullScreen }">
    <div class="demo">
      <div class="menu">
        <i class="icon"
           v-for="icon in iconColorArr"
           :key="icon.color"
           :style="{ backgroundColor: icon.color }"
        >
          <el-icon v-if="icon.name === 'scale'" class="d-caret" @click="handleToggleFullScreen"><DCaret /></el-icon>
        </i>
      </div>
      <iframe class="elp-iframe"
              :class="{ 'full-screen-iframe': isFullScreen }"
              :src="`${baseUrl[props.libType]}#/${props.iframeSrc}`"
              :style="{ height: demoHeight }"
      />
    </div>
    <div class="options">
      <el-tooltip
          content="全屏预览"
          placement="bottom"
      >
        <el-icon class="option-item" @click="handleToggleFullScreen"><FullScreen /></el-icon>
      </el-tooltip>
      <el-tooltip
          content="复制代码"
          placement="bottom"
      >
        <el-icon class="option-item" @click="copyCode"><CopyDocument /></el-icon>
      </el-tooltip>
      <el-tooltip
          content="查看源码"
          placement="bottom"
      >
        <span class="option-item code-btn" @click="handleToggleCode">&lt;/&gt;</span>
      </el-tooltip>
    </div>
    <El-collapse-transition>
      <div class="source-code" v-if="isShowCode">
        <div class="decode" v-html="decoded" />
        <div class="hide-code-btn">
          <el-button type="info" link :icon="CaretTop" @click="handleToggleCode">隐藏源代码</el-button>
        </div>
      </div>
    </El-collapse-transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElIcon, ElTooltip, ElCollapseTransition, ElButton, ElMessage } from 'element-plus'
import { FullScreen, DCaret, CaretTop, CopyDocument } from '@element-plus/icons-vue'
import { useClipboard } from '@vueuse/core'
import 'prismjs/themes/prism-tomorrow.css'

const props = defineProps({
  libType: {
    type: String,
    default: 'element-plus'
  },
  iframeSrc: {
    type: String,
    default: ''
  },
  demoHeight: {
    type: String,
    default: '320px'
  },
  sourceCode: {
    type: String,
    default: ''
  },
  rawSource: {
    type: String,
    default: ''
  }
})

const decoded = computed(() => {
  return decodeURIComponent(props.sourceCode)
})

const baseUrl = {
  'element-plus': import.meta.env.VITE_ELP_DEV_BASE,
  'element-ui': import.meta.env.VITE_ELU_DEV_BASE,
  'ant-design': import.meta.env.VITE_ANT_DEV_BASE
}

const iconColorArr = [{ name: '', color: '#fe5f57' }, { name: '', color: '#ffbc2d' }, { name: 'scale', color: '#27c83e' }]

const isFullScreen = ref(false)
const isShowCode = ref(false)

const handleToggleFullScreen = () => isFullScreen.value = !isFullScreen.value

const handleToggleCode = () => isShowCode.value = !isShowCode.value

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false
})

const copyCode = async () => {
  if (!isSupported) {
    ElMessage.error('不支持复制')
  }
  try {
    await copy()
    ElMessage.success('复制成功')
  } catch (e) {
    ElMessage.error(e.message)
  }
}

onMounted(() => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') isFullScreen.value = false
  })
})
</script>

<script>
export default {
  name: 'VpDemo'
}
</script>

<style scoped lang="less">
@menu-height: 32px;

.container {
  border: 1px solid var(--vp-custom-block-details-border);
  border-radius: var(--vc-border-radius-base);
}
.full-screen-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 10000;
}
.demo {
  .menu {
    border-radius: var(--vc-border-radius-base) var(--vc-border-radius-base) 0 0;
    height: @menu-height;
    line-height: @menu-height;
    background-color: var(--vp-custom-block-details-bg);
    padding: 0 16px;
    .icon {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      border-radius: 50%;
      &:hover {
        .d-caret {
          display: block;
        }
      }
      .d-caret {
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        color: var(--vp-c-text-2);
        font-size: 12px;
      }
    }
  }
  .elp-iframe {
    width: 100%;
    padding: 24px;
    border: 0;
  }
  .full-screen-iframe {
    width: 100vw;
    height: calc(100vh - @menu-height) !important;
  }
}
.options {
  border-top: 1px solid var(--vp-custom-block-details-border);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .option-item {
    margin-right: 8px;
    cursor: pointer;
    color: var(--vp-c-text-2);
    font-size: 12px;
    &:hover {
      color: var(--vp-c-text-1);
    }
  }
}
.source-code {
  background-color: #f6f8fa;
  position: relative;
  border-top: 1px solid var(--vp-custom-block-details-border);
  .decode {
    padding: 0 16px;
  }
  .hide-code-btn {
    border-top: 1px solid var(--vp-custom-block-details-border);
    border-radius: 0 0 var(--vc-border-radius-base) var(--vc-border-radius-base);
    position: sticky;
    bottom: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: var(--vp-c-bg);
    z-index: 10;
    .icon {
      margin-right: 8px;
    }
  }
}
</style>
