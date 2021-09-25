import React from 'react';
import { Button, toast } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <Button
          size="mini"
          onClick={() => {
            toast.success('成功提示');
          }}
        >
          成功提示
        </Button>
        <Button
          size="mini"
          onClick={() => {
            toast.warn('失败提示');
          }}
        >
          失败提示
        </Button>
        <Button
          size="mini"
          onClick={() => {
            toast.loading('加载中');
          }}
        >
          加载中
        </Button>
        <Button
          size="mini"
          onClick={() => {
            toast.text('文字提示');
          }}
        >
          文字提示
        </Button>
      </DemoBlock>
      <DemoBlock title="更多功能">
        <Button
          size="mini"
          onClick={() => {
            toast.success({
              duration: 5000,
              content: (
                <div style={{ fontSize: 12 }}>
                  <div>123</div>
                  <div>456</div>
                </div>
              ),
              onClose: () => {
                console.log(666);
              },
            });
          }}
        >
          提示
        </Button>
      </DemoBlock>

      <DemoBlock title="手动关闭">
        <Button
          size="mini"
          onClick={() => {
            const loading = toast.loading({
              duration: 0,
              maskVisible: true,
              content: '加载中',
            });

            setTimeout(() => {
              loading.clear();
            }, 5000);
          }}
        >
          请求接口
        </Button>
      </DemoBlock>
    </div>
  );
};
