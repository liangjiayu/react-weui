# Input 输入框

<code src="./demos/index.tsx"></code>

## API

| 参数         | 说明                                         | 类型         | 默认值 |
| ------------ | -------------------------------------------- | ------------ | ------ |
| type         | 类型，支持原生 input 标签的 type 属性        | `string`     | `text` |
| clearable    | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean`    | -      |
| defaultValue | 默认值                                       | `string`     | -      |
| disabled     | 是否禁用                                     | `boolean`    | -      |
| onChange     | 输入框内容变化时触发                         | `() => void` | -      |
| value        | 输入值                                       | `string`     | -      |
| placeholder  | 提示文本                                     | `string`     | -      |
| readOnly     | 是否只读                                     | `boolean`    | -      |
