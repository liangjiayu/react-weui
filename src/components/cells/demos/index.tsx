import React from 'react';
import { Cells } from 'react-weui';

const styles: Record<string, React.CSSProperties> = {
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    backgroundColor: '#999',
    borderRadius: '4px',
  },
};

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <Cells title="基础用法">
        <Cells.Item>1</Cells.Item>
        <Cells.Item>2</Cells.Item>
        <Cells.Item>3</Cells.Item>
      </Cells>
      <Cells title="带图标、说明的列表项">
        <Cells.Item prefix={<div style={styles.icon} />} extra="说明文字">
          标题文字
        </Cells.Item>
        <Cells.Item prefix={<div style={styles.icon} />} extra="说明文字">
          标题文字
        </Cells.Item>
      </Cells>
      <Cells title="带图标、说明、跳转的列表项">
        <Cells.Item
          prefix={<div style={styles.icon} />}
          extra={<div style={{ fontSize: 14 }}>说明文字</div>}
          arrow
        >
          标题文字
        </Cells.Item>
        <Cells.Item
          prefix={<div style={styles.icon} />}
          extra={<div style={{ fontSize: 14 }}>说明文字</div>}
          arrow
        >
          标题文字
        </Cells.Item>
      </Cells>
    </div>
  );
};
