import path from 'path'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import {alias} from '../../scripts'

export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {}
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-plus'
    }
  }
  return {
    server: {
      port: '3333'
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ['element-plus', 'vue']
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'voiceUi',
        fileName: 'vc-element-plus',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      alias: await alias()
    },
    ...docsBuild
  }
})
