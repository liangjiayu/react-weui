import React from 'react';
import { Cells, Button, Select, Input } from 'react-weui';

export default () => {
  return (
    <div className="weui-form" style={{ minHeight: '100vh' }}>
      <div className="weui-form__text-area">
        <div className="weui-form__title">原生选择框</div>
      </div>
      <div className="weui-form__control-area">
        <Cells className="weui-cells__group weui-cells__group_form">
          <Cells.Item className="weui-cell_select">
            <Select>
              <option value="1">微信号</option>
              <option value="2">QQ号</option>
              <option value="3">Email</option>
            </Select>
          </Cells.Item>
          <Cells.Item
            className="weui-cell_select weui-cell_select-before"
            prefix={
              <Select style={{ width: 60 }}>
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
              </Select>
            }
          >
            <Input type="number" placeholder="请输入号码" pattern="[0-9]*" />
          </Cells.Item>
          <Cells.Item
            className="weui-cell_select weui-cell_select-after"
            prefix={
              <span className="weui-label" style={{ width: 60 }}>
                国家
              </span>
            }
          >
            <Select>
              <option value="1">中国</option>
              <option value="2">美国</option>
              <option value="3">英国</option>
            </Select>
          </Cells.Item>
          <Cells.Item
            className="weui-cell_wrap"
            prefix={
              <span className="weui-label" style={{ width: 60 }}>
                手机号
              </span>
            }
          >
            <div className="weui-flex">
              <span className="weui-cell__control">+86</span>
              <Input
                className="weui-cell__control weui-cell__control_flex"
                type="number"
                placeholder="请输入号码"
                pattern="[0-9]*"
              />
            </div>
          </Cells.Item>
        </Cells>
      </div>
      <div className="weui-form__opr-area">
        <Button type="primary">确定</Button>
      </div>
    </div>
  );
};
