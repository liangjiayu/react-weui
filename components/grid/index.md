---
group:
  title: 数据展示
  order: 2
title: 九宫格
---

# Grid 九宫格

<code src="./demos/demo1.tsx"></code>

## API

### Grid

| 参数  | 说明     | 类型             | 默认值 |
| ----- | -------- | ---------------- | ------ |
| items | 列表内容 | `GridItemType[]` | [ ]    |

### GridItemType

| 参数    | 说明     | 类型        | 默认值 |
| ------- | -------- | ----------- | ------ |
| key     | key      | `string`    | -      |
| label   | 标题     | `ReactNode` | -      |
| icon    | 图标     | `ReactNode` | -      |
| onClick | 点击回调 | `()=>void`  | -      |
