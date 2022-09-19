# DatePicker 日期选择器

## 快捷时间段选择
用来给日期范围组件 `type="daterange"` 时设置快捷方式，目前支持以下快捷方式：
* 最近半小时
* 最近一小时
* 最近三小时
* 最近六小时
* 最近一天
* 最近三天
* 最近一周

<vp-demo
    demo-height="430px"
    source-code="element-ui:::data-picker/data-picker-shortcuts"
/>

## 属性

如需查看 element-ui 的 Date Picker 属性，请参考：[element-ui](https://element.eleme.cn/2.14/#/zh-CN/component/date-picker)


## Picker Options

| 属性                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| shortcuts                | 设置快捷选项，需要传入数组对象                                | object[{ text: string, value: date / function }]         | -           | -           |
