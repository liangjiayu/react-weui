import React from 'react';
import { Button } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="按钮类型">
        <Button type="primary">页面主操作</Button>
        <Button type="default">页面次要操作</Button>
        <Button type="warn">警告类操作</Button>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <Button type="primary" disabled>
          页面主操作
        </Button>
        <Button type="default" disabled>
          页面次要操作
        </Button>
        <Button type="warn" disabled>
          警告类操作
        </Button>
      </DemoBlock>

      <DemoBlock title="加载状态">
        <Button type="primary" loading>
          页面主操作
        </Button>
        <Button type="default" loading>
          页面次要操作
        </Button>
        <Button type="warn" loading>
          警告类操作
        </Button>
      </DemoBlock>

      <DemoBlock title="块级元素">
        <Button type="primary" block>
          页面主操作
        </Button>
        <Button type="default" block>
          页面次要操作
        </Button>
        <Button type="warn" block>
          警告类操作
        </Button>
      </DemoBlock>
      <DemoBlock
        title="mini"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Button type="primary" size="mini">
          按钮
        </Button>
        <Button type="default" size="mini">
          按钮
        </Button>
        <Button type="warn" size="mini">
          按钮
        </Button>
      </DemoBlock>
    </div>
  );
};
