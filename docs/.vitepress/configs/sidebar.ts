import elementPlusSideBar from "../pages/element-plus.json"
import elementUiSideBar from "../pages/element-ui.json"
import antDesignSideBar from "../pages/ant-design.json"

export default {
  '/zh-CN/guide/': [
    {
      text: '快速开始',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'vc-element-plus', link: '/zh-CN/guide/elp-install' },
        { text: 'vc-element-ui', link: '/zh-CN/guide/elu-install' },
        { text: 'vc-ant-design', link: '/zh-CN/guide/antd-install' },
      ]
    },
    {
      text: '开发者指南',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'docs项目', link: '/zh-CN/guide/docs-dev' },
        { text: 'element-plus', link: '/zh-CN/guide/elp-dev' },
        { text: 'element-ui', link: '/zh-CN/guide/elu-dev' },
      ]
    }
  ],
  '/zh-CN/components/element-plus': elementPlusSideBar,
  '/zh-CN/components/element-ui': elementUiSideBar,
  '/zh-CN/components/ant-design': antDesignSideBar
}
