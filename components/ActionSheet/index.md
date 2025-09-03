# ActionSheet 动作面板

<code src="./demos/index.tsx"></code>

## API

| 参数             | 说明                                       | 类型                                      | 默认值 |
| ---------------- | ------------------------------------------ | ----------------------------------------- | ------ |
| visible          | 显示隐藏                                   | `boolean`                                 | -      |
| actions          | 面板选项列表                               | `Action[]`                                | `[]`   |
| title            | 顶部标题                                   | `ReactNode`                               | -      |
| cancelText       | 取消按钮文字，如果设置为空则不显示取消按钮 | `string`                                  | -      |
| closeOnAction    | 是否在点击选项后关闭                       | `boolean`                                 | -      |
| closeOnMaskClick | 是否在点击遮罩层后关闭                     | `boolean`                                 | `true` |
| onAction         | 点击选项时触发，禁用或加载状态下不会触发   | `(action: Action, index: number) => void` | -      |
| onClose          | 关闭时触发                                 | `()=>void`                                | -      |

## Action 数据结构

| 参数      | 说明                     | 类型       | 默认值 |
| --------- | ------------------------ | ---------- | ------ |
| name      | 标题                     | `string`   | -      |
| subname   | 二级标题                 | `string`   | -      |
| disabled  | 是否为禁用状态           | `boolean`  | -      |
| warn      | 是否为危险状态           | `boolean`  | -      |
| className | 为对应列添加额外的 class | `string`   | -      |
| onClick   | 点击时触发               | `()=>void` | -      |
