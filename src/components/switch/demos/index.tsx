import React, { useState } from 'react';
import DemoBlock from '@/demos/DemoBlock';
import { Switch } from 'react-weui';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <Switch
          onChange={(val, e) => {
            console.log(val, e);
          }}
        />
        <Switch defaultChecked disabled style={{ marginLeft: 10 }} />
      </DemoBlock>

      <DemoBlock title="受控模式">
        <Switch checked={checked} onChange={setChecked} />
      </DemoBlock>
    </div>
  );
};
