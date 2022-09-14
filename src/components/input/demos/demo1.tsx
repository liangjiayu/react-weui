import React, { useState } from 'react';
import { Input } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  const [val, setValue] = useState('');

  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <Input
          onChange={(e) => {
            console.log(e);
          }}
        />
      </DemoBlock>
      <DemoBlock title="受控模式">
        <Input
          value={val}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </DemoBlock>
      <DemoBlock title="清除按钮">
        <Input clearable />
      </DemoBlock>
      <DemoBlock title="支持input属性">
        <Input type="number" placeholder="请输入" />
      </DemoBlock>
    </div>
  );
};
