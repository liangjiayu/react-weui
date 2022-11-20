---
title: Slider 滑块
---

# Slider 滑块

### 基础使用

<code src="./demos/demo1.tsx"></code>

## API

| 参数          | 说明                                                                       | 类型              | 默认值 |
| ------------- | -------------------------------------------------------------------------- | ----------------- | ------ |
| defaultValue  | 设置初始取值                                                               | `number`          | 0      |
| disabled      | 值为 true 时，滑块为禁用状态                                               | `boolean`         | false  |
| max           | 最大值                                                                     | `number`          | 100    |
| min           | 最小值                                                                     | `number`          | 0      |
| step          | 步长，取值必须大于 0，并且可被 (max - min) 整除。                          | `number`          | 1      |
| value         | 设置当前取值                                                               | `number`          | -      |
| onAfterChange | 与 onTouchEnd 触发时机一致，把当前值作为参数传入                           | `(value) => void` | -      |
| onChange      | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | `(value) => void` | -      |
| showValue     | 显示 value 数值                                                            | `boolean`         | false  |
