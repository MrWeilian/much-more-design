<template>
  <div class="vc-menu-wrapper">
    <el-menu :collapse="_collapse" class="vc-menu" v-bind="$attrs">
      <el-menu-item @click="onTitleClick" class="vc-menu-title" v-if="title" index="title">
        <i class="el-icon vc-icon-logo">
          <img class="vc-logo" :src="logo" />
        </i>
        <span slot="title" class="vc-title">{{title}}</span>
      </el-menu-item>
      <slot></slot>
    </el-menu>
    <div class="vc-trigger">
      <i style="display: inline-block;" class="el-icon el-icon-trigger" @click="toggle">
        <icon-open v-if="collapse" />
        <icon-close v-else="!collapse"/>
      </i>
    </div>
  </div>
</template>

<script>
import { Menu as ElMenu, MenuItem as ElMenuItem  } from 'element-ui'
import Logo from './assets/logo.png'
import IconOpen from './iconOpen.vue'
import IconClose from './iconClose.vue'
export default {
  name: 'VcMenu',
  components: { ElMenu, ElMenuItem, IconClose, IconOpen },
  props: {
    title: {
      type: String
    },
    logo: {
      type: String,
      default: Logo
    },
    collapse: {
      type: Boolean,
      default: false
    },
    url: {
      type: String
    }
  },
  computed: {
    _collapse: {
      get () {
        return this.collapse
      },
      set (val) {
        this.$emit('update:collapse', val)
      }
    }
  },
  methods: {
    toggle () {
      this._collapse = !this._collapse
    },
    onTitleClick () {
      if (this.$router && this.url) {
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style lang="less">
.vc-menu-wrapper {
  height: 100%;
  position: relative;
  padding-bottom: 48px;
  box-sizing: border-box;
  .vc-menu-title {
    border-bottom: 1px solid rgba(0,0,0,.1);
    &:hover {
      background: #fff!important;
    }
  }
}

.el-menu:not(.el-menu--collapse) {
  .vc-title {
    height: 56px;
    line-height: 56px;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.90);
    box-sizing: border-box;
  }
}

.vc-menu {
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

.vc-logo {
  width: 32px;
  margin-left: 32px - 24px;
}

.vc-trigger {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 48px;
  font-size: 24px;
  svg {
    width: 1em;
    height: 1em;
  }
  .el-icon {
    cursor: pointer;
    text-align: center;
    width: 64px;
    &:hover {
      color: var(--vc-color-primary);
    }
  }
}
.vc-icon-logo {
  width: 32px;
  height: 32px;
}
</style>