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
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'var(--weui-BG-0)',
        paddingBottom: 80,
      }}
    >
      <div className="p-40">
        <div className="text-20">List</div>
        <div className="text-14">列表</div>
      </div>

      <Cells title="带说明的列表项">
        <Cells.Item extra="说明文字">标题文字</Cells.Item>
        <Cells.Item extra="说明文字">标题文字</Cells.Item>
      </Cells>

      <Cells title="带图标、说明的列表项">
        <Cells.Item extra="说明文字" prefix={<div style={styles.icon} />}>
          标题文字
        </Cells.Item>
        <Cells.Item extra="说明文字" prefix={<div style={styles.icon} />}>
          标题文字
        </Cells.Item>
      </Cells>

      <Cells title="带跳转的列表项">
        <Cells.Item arrow type="a">
          cell standard
        </Cells.Item>
        <Cells.Item arrow type="a">
          cell standard
        </Cells.Item>
      </Cells>

      <Cells title="带说明、跳转的列表项">
        <Cells.Item extra="说明文字" arrow type="a">
          cell standard
        </Cells.Item>
        <Cells.Item extra="说明文字" arrow type="a">
          cell standard
        </Cells.Item>
      </Cells>

      <Cells title="带图标、说明的列表项">
        <Cells.Item
          extra="说明文字"
          prefix={<div style={styles.icon} />}
          arrow
          type="a"
        >
          标题文字
        </Cells.Item>
        <Cells.Item
          extra="说明文字"
          prefix={<div style={styles.icon} />}
          arrow
          type="a"
        >
          标题文字
        </Cells.Item>
      </Cells>
    </div>
  );
};
