import React from 'react';
import { Cells, Button, TextArea } from 'react-weui';

export default () => {
  return (
    <div className="weui-form" style={{ minHeight: '100vh' }}>
      <div className="weui-form__text-area">
        <div className="weui-form__title">文本域</div>
        <div className="weui-form__desc">输入更多内容的输入区域样式展示</div>
      </div>
      <div className="weui-form__control-area">
        <div className="weui-cells__group weui-cells__group_form">
          <Cells title="问题描述">
            <Cells.Item>
              <TextArea
                placeholder="请描述你所发生的问题"
                rows={3}
                showCount
                maxLength={100}
              />
            </Cells.Item>
          </Cells>
        </div>
      </div>
      <div className="weui-form__opr-area">
        <Button type="primary">确定</Button>
      </div>
    </div>
  );
};
