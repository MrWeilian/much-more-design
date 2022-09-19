import sideBarPlugin from './build/side-bar-plugin'
import sourceCode from './build/source-code'
import {defineConfig} from 'vite'
import path from 'path'
import {alias} from '../scripts'

export default defineConfig(async ({ command, mode }) => {
  return {
    server: {
      proxy: {
        '/assets': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    },
    plugins: [
      sideBarPlugin(),
      sourceCode()
    ],
    resolve: {
      alias: [
        ...await alias(),
        {
          find: '@/',
          replacement: path.join(__dirname, '/')
        }
      ]
    }
  }
})
