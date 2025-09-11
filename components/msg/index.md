---
group:
  title: 数据展示
  order: 2
title: Msg 提示页
---

## 何时使用

文案说明

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基础</code>
<code src="./demo/msg-warn.tsx">失败提示页</code>
<code src="./demo/msg-text-primary.tsx">无图标提示页</code>
<code src="./demo/msg-custom.tsx">自定义提示页</code>

## API

| 参数        | 说明     | 类型                                       | 默认值 |
| ----------- | -------- | ------------------------------------------ | ------ |
| icon        | 图标     | `success` \| `info` \| `warn` \| `waiting` | -      |
| title       | 标题     | `ReactNode`                                | -      |
| description | 描述     | `ReactNode`                                | -      |
| operation   | 操作区域 | `ReactNode`                                | -      |
| tips        | 提示区域 | `ReactNode`                                | -      |
| extra       | 额外区域 | `ReactNode`                                | -      |
