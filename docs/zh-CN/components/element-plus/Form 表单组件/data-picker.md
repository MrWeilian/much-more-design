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
    demo-height="160px"
    source-code="element-plus:::data-picker/data-picker-shortcuts"
/>

## 属性

如需查看 element-plus 的 Date Picker 属性，请参考：[element-plus](https://element-plus.org/zh-CN/component/date-picker.html#%E5%B1%9E%E6%80%A7)

| 属性                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| shortcuts                | 设置快捷选项，需要传入数组对象                                | object[{ text: string, value: date / function }]         | -           | -           |
