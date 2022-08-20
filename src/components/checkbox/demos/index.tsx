import React, { useState } from 'react';
import { Checkbox } from 'react-weui';

export default () => {
  const [value, setValue] = useState<any[]>([1]);

  return (
    <div
      style={{
        paddingTop: 30,
        paddingBottom: 60,
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <Checkbox.Group
        title="基础使用"
        onChange={(checkedValue) => {
          console.log('checkedValue', checkedValue);
        }}
      >
        <Checkbox value={1}>1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3} disabled>
          3
        </Checkbox>
      </Checkbox.Group>

      <Checkbox.Group
        title="受控模式"
        value={value}
        onChange={(checkedValue) => {
          console.log('checkedValue', checkedValue);
          setValue(checkedValue);
        }}
      >
        <Checkbox value={1}>1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3}>3</Checkbox>
      </Checkbox.Group>
    </div>
  );
};
