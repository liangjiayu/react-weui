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
      <div className="p-4">
        <Button type="primary" block>
          块型按钮
        </Button>
        <Button block>块型按钮</Button>
        <Button type="warn" block>
          块型按钮
        </Button>
      </div>
      <div className="p-4">
        <Button size="medium" type="primary">
          中型按钮
        </Button>
        <Button size="medium">中型按钮</Button>
        <Button size="medium" type="warn">
          中型按钮
        </Button>
      </div>
      <div className="p-4 flex my-4">
        <Button size="mini" type="primary">
          按钮
        </Button>
        <Button size="mini">按钮</Button>
        <Button size="mini" type="warn">
          按钮
        </Button>
      </div>
    </div>
  );
};
