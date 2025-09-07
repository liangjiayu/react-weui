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
      <div className="page__hd">
        <div className="page__title">Cells</div>
        <div className="page__desc">单元格</div>
      </div>

      <Cells title="带说明的列表项">
        <Cells.Item suffix="说明文字">标题文字</Cells.Item>
        <Cells.Item suffix="说明文字">标题文字</Cells.Item>
      </Cells>

      <Cells title="带图标、说明的列表项">
        <Cells.Item prefix={<div style={styles.icon} />} suffix="说明文字">
          标题文字
        </Cells.Item>
        <Cells.Item prefix={<div style={styles.icon} />} suffix="说明文字">
          标题文字
        </Cells.Item>
      </Cells>

      <Cells title="带跳转的列表项">
        <Cells.Item description="副标题" arrow>
          标题文字
        </Cells.Item>
        <Cells.Item arrow>标题文字</Cells.Item>
      </Cells>

      <Cells title="带说明、跳转的列表项">
        <Cells.Item suffix="说明文字" arrow>
          标题文字
        </Cells.Item>
        <Cells.Item suffix="说明文字" arrow>
          标题文字
        </Cells.Item>
      </Cells>

      <Cells title="带图标、说明的列表项">
        <Cells.Item prefix={<div style={styles.icon} />} suffix="说明文字" arrow>
          标题文字
        </Cells.Item>
        <Cells.Item prefix={<div style={styles.icon} />} suffix="说明文字" arrow>
          标题文字
        </Cells.Item>
      </Cells>
    </div>
  );
};
