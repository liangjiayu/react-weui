# Cells 列表

<code src="./demos/index.tsx"></code>

## API

### Cells

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| title | 分组标题 | `string` | -      |

### Cells.Item

| 参数     | 说明                 | 类型         | 默认值  |
| -------- | -------------------- | ------------ | ------- |
| prefix   | 左侧区域             | `ReactNode`  | -       |
| extra    | 右侧区域             | `ReactNode`  | -       |
| children | 中间区域             | `ReactNode`  | -       |
| arrow    | 是否显示右侧箭头图标 | `boolean`    | `false` |
| onClick  | 点击事件             | `() => void` | -       |
