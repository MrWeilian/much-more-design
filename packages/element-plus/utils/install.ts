import type { Plugin } from 'vue'

declare type SFCWithInstall<T> = T & Plugin & component

declare type component = {
  name: string
}

export const withInstall = <T extends component>(comp: T): Plugin => {
  ;(comp as SFCWithInstall<T>).install = (app): void => {
    app.component(comp.name, comp)
  }
  return comp as SFCWithInstall<T>
}
