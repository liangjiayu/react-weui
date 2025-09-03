# TopTips 顶部提示条

<code src="./demos/index.tsx"></code>

## API

- `toptips.open(Config)`
- `toptips.clear`

### Config

| 参数      | 说明                                              | 类型         | 默认值 |
| --------- | ------------------------------------------------- | ------------ | ------ |
| type      | 类型，可选值为 `success` ` info` `warning` `warn` | `string`     | `warn` |
| message   | 展示文案                                          | `ReactNode`  | -      |
| duration  | 展示时长(ms)，值为 0 `toptips` 不会消失           | `number`     | `2000` |
| onClick   | 点击时的回调函数                                  | `() => void` | -      |
| onClose   | 关闭时的回调函数                                  | `() => void` | -      |
| className | 自定义类名                                        | `string`     | -      |
