import {App} from 'vue'
import { VcTable } from './components/table'
import { VcMenu } from './components/menu'

const elmPlusComponents = [
  VcTable,
  VcMenu
]

export const installer = (app: App) => {
  elmPlusComponents.forEach((comp) => app.use(comp))
}
