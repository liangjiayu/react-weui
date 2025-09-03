# Checkbox 多选框

<code src="./demos/index.tsx"></code>

## API

### Checkbox

| 参数           | 说明             | 类型          | 默认值 |
| -------------- | ---------------- | ------------- | ------ |
| checked        | 指定当前是否选中 | `boolean`     | false  |
| defaultChecked | 初始是否选中     | `boolean`     | false  |
| disabled       | 失效状态         | `boolean`     | false  |
| value          | 选项值           | `any`         | -      |
| onChange       | 变化时回调函数   | `(e) => void` | -      |

### Checkbox.Group

| 参数         | 说明                                                     | 类型          | 默认值 |
| ------------ | -------------------------------------------------------- | ------------- | ------ |
| defaultValue | 默认选中的选项                                           | `string[]`    | []     |
| disabled     | 整组失效                                                 | `boolean`     | false  |
| name         | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | `string`      | -      |
| value        | 指定选中的选项                                           | `string[]`    | []     |
| onChange     | 变化时回调函数                                           | `(e) => void` | -      |
