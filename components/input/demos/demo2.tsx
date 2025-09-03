import React from 'react';
import { Input, Cells, Button } from 'react-weui';

export default () => {
  return (
    <div className="form-layout-demo">
      <div className="weui-form">
        <div className="weui-form__control-area">
          <Cells
            title="表单报错：置顶tipsbar报错信息"
            className="weui-cells__group weui-cells__group_form"
          >
            <Cells.Item
              type="label"
              prefix={<span className="weui-label">卡号</span>}
            >
              <Input
                pattern="[0-9]*"
                placeholder="请输入16位数卡号"
                maxLength={16}
                clearable
              />
            </Cells.Item>
            <Cells.Item
              type="label"
              prefix={<span className="weui-label">持卡人</span>}
            >
              <Input placeholder="请输入持卡人姓名" />
            </Cells.Item>
          </Cells>
          <Cells
            title="表单报错：当前项位置报错"
            className="weui-cells__group weui-cells__group_form"
          >
            <Cells.Item
              type="label"
              prefix={<span className="weui-label">金额</span>}
            >
              <Input placeholder="请输入金额" />
            </Cells.Item>
          </Cells>
          <Cells
            title="表单只读、置灰"
            className="weui-cells__group weui-cells__group_form"
          >
            <Cells.Item
              type="label"
              prefix={<span className="weui-label">EMail</span>}
            >
              <Input placeholder="请输入EMail" value="1234567" readOnly />
            </Cells.Item>
            <Cells.Item
              type="label"
              prefix={<span className="weui-label">微信号</span>}
            >
              <Input placeholder="请输入微信号" value="WeUI" disabled />
            </Cells.Item>
          </Cells>
        </div>
        <div className="weui-form__opr-area">
          <Button type="primary">确定</Button>
        </div>
      </div>
    </div>
  );
};
