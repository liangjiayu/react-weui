import React from 'react';
import { Grid } from 'react-weui';
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
} from '@ant-design/icons';

export default () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--weui-BG-0)',
        minHeight: '100vh',
      }}
    >
      <div className="p-40">
        <div className="text-20">Grid</div>
        <div className="text-14">九宫格</div>
      </div>
      <Grid
        items={[
          {
            key: '1',
            icon: <AndroidOutlined />,
            label: 'Grid',
          },
          {
            key: '2',
            icon: <AppleOutlined />,
            label: 'Grid',
            onClick: () => {
              console.log('todo');
            },
          },
          {
            key: '3',
            icon: <WindowsOutlined />,
            label: 'Grid',
          },
          {
            key: '4',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
          {
            key: '5',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
          {
            key: '6',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
          {
            key: '7',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
          {
            key: '8',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
          {
            key: '9',
            icon: <img src="https://weui.io/images/icon_tabbar.png" />,
            label: 'Grid',
          },
        ]}
      />
    </div>
  );
};
