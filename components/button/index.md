---
group:
  title: 通用
  order: 0
title: Button 按钮
---

## 何时使用

文案说明文案说明文案说明

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基础</code>
<code src="./demo/bottom-suspension.tsx">底部悬浮型</code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoInsertSpace | 我们默认提供两个汉字之间的空格，可以设置 `autoInsertSpace` 为 `false` 关闭 | boolean | `true` |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - |
| color | 设置按钮的颜色 | `default` \| `primary` \| `danger` \| [PresetColors](#presetcolors) | - |
| danger | 语法糖，设置危险按钮。当设置 `color` 时会以后者为准 | boolean | false |
| disabled | 设置按钮失效状态 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| icon | 设置按钮的图标组件 | ReactNode | - |
| iconPosition | 设置按钮图标组件的位置 | `start` \| `end` | `start` |
| loading | 设置按钮载入状态 | boolean \| { delay: number, icon: ReactNode } | false |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| type | 语法糖，设置按钮类型。当设置 `variant` 与 `color` 时以后者为准 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick | 点击按钮时的回调 | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |
| variant | 设置按钮的变体 | `outlined` \| `dashed` \| `solid` \| `filled` \| `text` \| `link` | - |

## 主题变量

<!-- <ComponentTokenTable component="Button"></ComponentTokenTable> -->
