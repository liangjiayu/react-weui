import React, { useState } from 'react';
import { Radio } from 'react-weui';

export default () => {
  const [value, setValue] = useState('1');

  return (
    <div
      style={{
        backgroundColor: 'var(--weui-BG-2)',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <Radio.Group
        title="基础用法"
        defaultValue="1"
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3', disabled: true },
        ]}
      />

      <Radio.Group
        title="受控模式"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
        ]}
      />
    </div>
  );
};
