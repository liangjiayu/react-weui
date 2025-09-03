# Dialog 弹窗

<code src="./demos/index.tsx"></code>

## API

## Dialog

| 参数           | 说明               | 类型            | 默认值 |
| -------------- | ------------------ | --------------- | ------ |
| title          | 标题               | `ReactNode`     | -      |
| visible        | 弹窗是否可见       | `boolean`       | -      |
| content        | 内容               | `ReactNode`     | -      |
| onOk           | 点击确定回调       | `()=>void`      | -      |
| onCancel       | 点击取消按钮的回调 | `()=>void`      | -      |
| afterClose     | 完全关闭后的回调   | `()=>void`      | -      |
| confirmLoading | 确定按钮 loading   | `boolean`       | -      |
| cancelText     | 取消按钮文字       | `string`        | `取消` |
| okText         | 确认按钮文字       | `string`        | `确定` |
| style          | 弹窗样式           | `CSSProperties` | -      |
| className      | 容器类名           | `string`        | -      |
| hideFooter     | 隐藏底部           | `boolean`       | -      |

## Dialog.method()

- `Dialog.alert(config)`
- `Dialog.confirm(config)`

| 参数       | 说明                                             | 类型            | 默认值 |
| ---------- | ------------------------------------------------ | --------------- | ------ |
| title      | 标题                                             | `ReactNode`     | -      |
| content    | 内容                                             | `ReactNode`     | -      |
| onOk       | 点击确定回调，返回 promise 时 resolve 后自动关闭 | `()=>void`      | -      |
| onCancel   | 取消回调，返回 promise 时 resolve 后自动关闭     | `()=>void`      | -      |
| afterClose | 完全关闭后的回调                                 | `()=>void`      | -      |
| cancelText | 取消按钮文字                                     | `string`        | `取消` |
| okText     | 确认按钮文字                                     | `string`        | `确定` |
| style      | 弹窗样式                                         | `CSSProperties` | -      |
| className  | 容器类名                                         | `string`        | -      |
