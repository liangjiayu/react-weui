# Toast 轻提示

<code src="./demos/index.tsx"></code>

## API

- `toast.success(content|config)`
- `toast.warn(content|config)`
- `toast.loading(content|config)`
- `toast.text(content|config)`

### Config

| 参数        | 说明                              | 类型              | 默认值  |
| ----------- | --------------------------------- | ----------------- | ------- |
| content     | 提示内容                          | `React.ReactNode` | -       |
| duration    | 展示时长(ms)，值为 0 时，不会消失 | `number`          | 2000    |
| maskVisible | 是否显示遮罩层                    | `boolean`         | `false` |
| onClose     | 关闭时触发的回调函数              | `() => void`      | -       |
