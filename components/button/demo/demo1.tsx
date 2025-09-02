import React from 'react';
import { Button } from 'react-weui';

export default () => {
  return (
    <div style={{ overflow: 'hidden', backgroundColor: 'var(--weui-BG-0)' }}>
      <div className="page__hd">
        <div className="page__title">Button</div>
        <div className="page__desc">按钮</div>
      </div>
      <div className="p-4">
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
      <div className="my-4">
        <Button block>普通行按钮</Button>
        <Button block type="primary">
          强调行按钮
        </Button>
        <Button block type="warn">
          警示行按钮
        </Button>
      </div>
      <div className="flex p-4 my-4">
        <Button type="primary" size="mini">
          按钮
        </Button>
        <Button size="mini">按钮</Button>
        <Button type="warn" size="mini">
          按钮
        </Button>
      </div>
    </div>
  );
};
