import React, { useState } from 'react';
import { Radio } from 'react-weui';

export default () => {
  const [value, setValue] = useState(1);

  return (
    <div
      style={{
        paddingTop: 30,
        paddingBottom: 60,
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <Radio.Group title="基础使用" defaultValue={1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3} disabled>
          C
        </Radio>
      </Radio.Group>
      <Radio.Group
        title="受控模式"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
      </Radio.Group>
    </div>
  );
};
