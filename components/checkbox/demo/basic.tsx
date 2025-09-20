import React, { useState } from 'react';
import { Checkbox } from 'react-weui';

export default () => {
  const [values, setValues] = useState(['1']);

  return (
    <div
      style={{
        backgroundColor: 'var(--weui-BG-2)',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <Checkbox.Group
        title="基础用法"
        defaultValue={['2']}
        options={[
          {
            label: '选项1',
            value: '1',
          },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3', disabled: true },
        ]}
      />

      <Checkbox.Group
        title="受控模式"
        value={values}
        onChange={(val) => {
          setValues(val);
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
