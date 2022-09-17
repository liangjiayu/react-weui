import React from 'react';
import { Button } from 'react-weui';

export default () => {
  return (
    <div style={{ overflow: 'hidden', backgroundColor: 'var(--weui-BG-0)' }}>
      <div className="p-40">
        <div className="text-20">Button</div>
        <div className="text-14">按钮</div>
      </div>
      <div className="pt-15 pb-15 mt-15 mb-15">
        <Button type="primary">主要操作</Button>
        <Button type="primary" loading>
          主要操作
        </Button>
        <Button type="primary" disabled>
          主要操作
        </Button>
        <Button>次要操作</Button>
        <Button loading>次要操作</Button>
        <Button disabled>次要操作</Button>
        <Button type="warn">警示操作</Button>
        <Button type="warn" loading>
          警示操作
        </Button>
        <Button type="warn" disabled>
          警示操作
        </Button>
      </div>
      <div className="pt-15 pb-15 mt-15 mb-15">
        <Button block>普通行按钮</Button>
        <Button block type="primary">
          强调行按钮
        </Button>
        <Button block type="warn">
          警示行按钮
        </Button>
      </div>
      <div className="p-15 mt-15 mb-15" style={{ textAlign: 'center' }}>
        <Button type="primary" size="mini" className="ml-10 mr-10">
          按钮
        </Button>
        <Button size="mini" className="ml-10 mr-10">
          按钮
        </Button>
        <Button type="warn" size="mini" className="ml-10 mr-10">
          按钮
        </Button>
      </div>
    </div>
  );
};
