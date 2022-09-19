import * as path from 'path'
import * as fsPromises from 'fs/promises'
import {Alias} from 'vite'

export function packagesPath () {
  return path.resolve(__dirname, '../packages')
}

export async function alias (): Promise<Array<Alias>> {
  const projectPath = packagesPath()
  const dirArr = await fsPromises.readdir(projectPath)

  return dirArr.map(packagePath => {
    return {
      find:  new RegExp(`^@much-more\\/vc-${packagePath}(\\/(dist))?$`),
      replacement: path.join(projectPath, `/${packagePath}/index`)
    }
  })
}
