import React from 'react';
import { Select } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  // const [val, setValue] = useState('');

  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法" style={{ padding: 0 }}>
        <Select />
      </DemoBlock>
    </div>
  );
};
