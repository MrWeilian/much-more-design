<template>
  <div class="menu-wrapper">
    <el-menu :collapse="_collapse" class="menu" v-bind="$attrs">
      <el-menu-item @click="onTitleClick" class="menu-title" v-if="title" index="title">
        <el-icon>
          <img class="logo" :src="logo" />
        </el-icon>
        <template #title>
          <span class="title">{{ title }}</span>
        </template>
      </el-menu-item>
      <slot></slot>
    </el-menu>
    <div class="trigger">
      <el-icon class="icon-trigger" @click="toggle">
        <icon-open v-show="collapse" />
        <icon-close v-show="!collapse" />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ElIcon, ElMenu, ElMenuItem } from 'element-plus'
import { ref, computed, getCurrentInstance } from 'vue'
import Logo from './assets/logo.png'
import IconOpen from './iconOpen.vue'
import IconClose from './iconClose.vue'

const emit = defineEmits(['update:collapse'])
const instance = getCurrentInstance()
const router = instance.appContext.config.globalProperties.$router

const props = defineProps({
  logo: {
    type: String,
    default: Logo
  },
  title: {
    type: String,
  },
  collapse: {
    type: Boolean,
    default: false
  },
  url: {
    type: String
  }
})

const _collapse = computed({
  get() {
    return props.collapse
  },
  set(val) {
    emit('update:collapse', val)
  }
})

function toggle() {
  _collapse.value = !_collapse.value
}

function onTitleClick () {
  if (router && props.url) {
    router.push(props.url)
  }
}

</script>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VcMenu',
  inheritAttrs: false
})
</script>

<style lang="less" scoped>
.menu-wrapper {
  height: 100%;
  position: relative;
  padding-bottom: 48px;
  box-sizing: border-box;

  .menu-title {
    border-bottom: 1px solid rgba(0,0,0,.1);
    &:hover {
      background: #fff !important;
    }
  }
}

:deep(.el-menu:not(.el-menu--collapse)) {
  .title {
    height: 56px;
    line-height: 56px;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.90);
    box-sizing: border-box;
  }
}

.menu {
  &:not(.el-menu.el-menu--collapse) {
    width: var(--vc-menu-width);
  }

  &.el-menu.el-menu--collapse {
    .logo {
      margin-left: -2px;
    }
  }

  height: 100%;
  overflow-y: auto;
}

.logo {
  width: 32px;
  margin-left: 32px - 24px;
}

.trigger {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 48px;
  font-size: 24px;

  .icon-trigger {
    cursor: pointer;
    width: 64px;
    text-align: center;
    &:hover {
      color: var(--vc-color-primary);
    }
  }
}
</style>
