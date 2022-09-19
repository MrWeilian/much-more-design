// const fsPromise = require('fs').promises
// const path = require('path')
// const chalk = require('chalk')
// const execa = require('execa')
// const { log } = console
//
// const viteBuildCommand = dir => path.resolve(__dirname, `../packages/${dir}`)
//
// async function build() {
//   const projectPath = path.resolve(__dirname, '../packages')
//   const targets = await fsPromise.readdir(projectPath)
//   // 打包库
//   for (let target of targets) {
//     log(chalk.blue(`开始打包${target}模块...`))
//     await execa('echo', [viteBuildCommand(target), [`pnpm run build`]])
//     // 从对应模块获取差异性的buildOptions
//     // const buildOptions = require(resolve('package.json')).buildOptions
//
//     // entry 从buildOptions中获取，否则默认为 index.ts
//     // const entries = buildOptions
//     //   ? Array.isArray(buildOptions.entry)
//     //     ? buildOptions.entry
//     //     : [buildOptions.entry || 'index.ts']
//     //   : ['index.ts']
//     //
//     // for (let item of entries) {
//     //   const entry = item.entry || item
//     //   const output = item.output || './'
//     //
//     //   // 调用vite 打包
//     //   await execa(
//     //     'cross-env',
//     //     [
//     //       `TARGET=${target}`,
//     //       `LIB=true`,
//     //       `ENTRY=${entry}`,
//     //       `OUTPUT=${output}`,
//     //     ].concat(viteBuildCommand),
//     //     {
//     //       stdio: 'inherit',
//     //     }
//     //   )
//     // }
//   }
// }
//
// build()
