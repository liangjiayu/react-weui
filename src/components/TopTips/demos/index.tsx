import React from 'react';
import { toptips, Button } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <Button
          onClick={() => {
            toptips.open({
              message: '基础用法',
              onClick() {
                console.log('onClick');
              },
              onClose() {
                console.log('onClose');
              },
            });
          }}
        >
          基础用法
        </Button>
        <Button
          onClick={() => {
            const tips = toptips.open({ message: '手动关闭', duration: 0 });
            setTimeout(() => {
              tips.clear();
            }, 5000);
          }}
        >
          手动关闭
        </Button>
      </DemoBlock>
      <DemoBlock title="通知类型">
        <Button
          onClick={() => {
            toptips.open({ message: '成功', type: 'success' });
          }}
        >
          成功
        </Button>
        <Button
          onClick={() => {
            toptips.open({ message: '信息', type: 'info' });
          }}
        >
          信息
        </Button>
        <Button
          onClick={() => {
            toptips.open({ message: '警告', type: 'warning' });
          }}
        >
          警告
        </Button>
        <Button
          onClick={() => {
            toptips.open({ message: '危险', type: 'warn' });
          }}
        >
          危险
        </Button>
      </DemoBlock>
    </div>
  );
};
