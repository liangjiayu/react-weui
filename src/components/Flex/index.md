# Flex 弹性布局

<code src="./demos/index.tsx"></code>

# API

## Row

| 参数    | 说明         | 类型                                                          | 默认值  |
| ------- | ------------ | ------------------------------------------------------------- | ------- |
| align   | 垂直对齐方式 | `top`\|`center`\|`bottom`                                     | `top`   |
| justify | 水平排列方式 | `start` \|`center` \|`end` \|`space-around` \|`space-between` | `start` |
| gutter  | 栅格间隔     | `number`                                                      | `0`     |
| wrap    | 是否自动换行 | `boolean`                                                     | `true`  |

## Col

| 参数   | 说明               | 类型               | 默认值 |
| ------ | ------------------ | ------------------ | ------ |
| span   | 栅格占位格数       | `number`           | -      |
| offset | 栅格左侧的间隔格数 | `number`           | -      |
| flex   | flex 布局属性      | `string`\|`number` | -      |
