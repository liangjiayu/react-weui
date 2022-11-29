---
title: Badge  徽标
---

# Badge 徽标

图标右上角的圆形徽标数字。

### 基础使用

<code src="./demos/demo1.tsx"></code>

## API

| 参数          | 说明                                                                   | 类型               | 默认值  |
| ------------- | ---------------------------------------------------------------------- | ------------------ | ------- |
| color         | 自定义小圆点的颜色                                                     | `string`           | -       |
| count         | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | `ReactNode`        | -       |
| dot           | 不展示数字，只有一个小红点                                             | `boolean`          | `false` |
| offset        | 设置状态点的位置偏移                                                   | `[number, number]` | -       |
| overflowCount | 展示封顶的数字值                                                       | `number`           | 99      |
| showZero      | 当数值为 0 时，是否展示 Badge                                          | `boolean`          | false   |
