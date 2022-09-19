import { App, Component } from 'vue'
import Theme from 'vitepress/theme'
import '../../public/css/custom-style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VcComponents from '@much-more/vc-element-plus'
import { globals } from '@/.vitepress/components'

export default {
  ...Theme,
  enhanceApp ({ app }: {app: App}) {
    app.use(VcComponents)

    globals.forEach((comp: Component) => {
      app.component(comp.name as string, comp)
    })
  }
}
