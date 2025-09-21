import React, { useState } from 'react';
import { Cells, Switch } from 'react-weui';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--weui-BG-2)',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <div className="weui-cells__group weui-cells__group_form">
        <Cells title="基础使用">
          <Cells.Item isSwitch suffix={<Switch />}>
            标题文字
          </Cells.Item>
          <Cells.Item disabled isSwitch suffix={<Switch disabled defaultChecked />}>
            标题文字
          </Cells.Item>
        </Cells>
      </div>

      <div className="weui-cells__group weui-cells__group_form">
        <Cells title="受控模式">
          <Cells.Item
            isSwitch
            suffix={
              <Switch
                checked={value}
                onChange={(v) => {
                  setValue(v);
                }}
              />
            }
          >
            标题文字
          </Cells.Item>
        </Cells>
      </div>
    </div>
  );
};
