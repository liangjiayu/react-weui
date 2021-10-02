import React, { useState } from 'react';
import { Dialog, Button } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

function sleep(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <Button
          onClick={() => {
            Dialog.alert({
              title: '弹窗标题',
              content:
                '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              onOk: () => {
                console.log('onOk');
              },
            });
          }}
        >
          提示弹窗
        </Button>
        <Button
          onClick={() => {
            Dialog.confirm({
              title: '弹窗标题',
              content:
                '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              onOk: () => {
                console.log('onOk');
              },
              onCancel: () => {
                console.log('onCancel');
              },
            });
          }}
        >
          确认弹窗
        </Button>
      </DemoBlock>

      <DemoBlock title="异步关闭">
        <Button
          onClick={() => {
            Dialog.confirm({
              title: '弹窗标题',
              content:
                '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
              onOk: async () => {
                await sleep(1000);
                console.log('onOk');
              },
              onCancel: () => {},
            });
          }}
        >
          异步关闭
        </Button>
      </DemoBlock>

      <DemoBlock title="组件调用">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          组件调用
        </Button>

        <Dialog
          visible={visible}
          title="标题"
          onOk={() => {
            setVisible(false);
          }}
        >
          <img src="https://iph.href.lu/500x500" alt="" />
        </Dialog>
      </DemoBlock>
    </div>
  );
};
