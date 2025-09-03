# Radio 单选框

<code src="./demos/index.tsx"></code>

## API

### Radio

| 参数           | 说明                              | 类型      | 默认值 |
| -------------- | --------------------------------- | --------- | ------ |
| checked        | 指定当前是否选中                  | `boolean` | false  |
| defaultChecked | 初始是否选中                      | `boolean` | false  |
| disabled       | 禁用 Radio                        | `boolean` | false  |
| value          | 根据 value 进行比较，判断是否选中 | `any`     | -      |

### RadioGroup

| 参数         | 说明                                               | 类型          | 默认值 |
| ------------ | -------------------------------------------------- | ------------- | ------ |
| defaultValue | 默认选中的值                                       | `any`         | -      |
| disabled     | 禁选所有子单选器                                   | `boolean`     | false  |
| name         | RadioGroup 下所有 input[type="radio"] 的 name 属性 | `string`      | -      |
| value        | 用于设置当前选中的值                               | `any`         | -      |
| onChange     | 选项变化时的回调函数                               | `(e) => void` | -      |
