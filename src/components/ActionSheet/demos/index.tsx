import React, { useState } from 'react';
import { ActionSheet, Button } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

function BasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        基础用法
      </Button>
      <ActionSheet
        visible={visible}
        actions={[
          { key: '1', name: '选项一' },
          { key: '2', name: '选项二' },
          { key: '3', name: '选项三' },
        ]}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

function CancelDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        展示取消按钮
      </Button>
      <ActionSheet
        visible={visible}
        cancelText="取消"
        actions={[
          { key: '1', name: '选项一' },
          { key: '2', name: '选项二' },
          { key: '3', name: '选项三' },
        ]}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

function OptionDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        选项状态
      </Button>
      <ActionSheet
        visible={visible}
        cancelText="取消"
        title="标题"
        closeOnAction
        actions={[
          {
            key: '1',
            name: '选项一',
            subname: '描述信息',
          },
          { key: '2', name: '选项二', disabled: true },
          { key: '3', name: '选项三', warn: true },
        ]}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

function EventDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        事件处理
      </Button>
      <ActionSheet
        visible={visible}
        onAction={(action, index) => {
          console.log(action, index);
        }}
        cancelText="取消"
        actions={[
          {
            key: '1',
            name: '选项一',
            onClick: () => {
              console.log('选项一 onClick');
            },
          },
          { key: '2', name: '选项二', disabled: true },
          { key: '3', name: '选项三' },
        ]}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

function DiyDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        自定义面板
      </Button>
      <ActionSheet
        visible={visible}
        title="标题"
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ padding: '16px 16px 100px', backgroundColor: '#fff' }}>
          123
        </div>
      </ActionSheet>
    </>
  );
}

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="基础用法">
        <BasicDemo />
        <CancelDemo />
      </DemoBlock>

      <DemoBlock title="选项状态">
        <OptionDemo />
      </DemoBlock>

      <DemoBlock title="事件处理">
        <EventDemo />
      </DemoBlock>

      <DemoBlock title="自定义面板">
        <DiyDemo />
      </DemoBlock>
    </div>
  );
};
