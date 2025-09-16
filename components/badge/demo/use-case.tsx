import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Badge, Cells } from 'react-weui';

const styles: Record<string, React.CSSProperties> = {
  holeDiv: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: '8px',
  },
};

export default () => {
  return (
    <div style={{ padding: '20px 0 60px' }}>
      <Cells title="基础" className="p-4 flex gap-5 items-center">
        <Badge count={5}>
          <div style={styles.holeDiv} />
        </Badge>
        <Badge count={0} showZero>
          <div style={styles.holeDiv} />
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
          <div style={styles.holeDiv} />
        </Badge>
      </Cells>

      <Cells title="独立使用" className="p-4 flex gap-5 items-center">
        <Badge count={11} showZero color="#faad14" />
        <Badge count={25} />
        <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />} />
        <Badge className="site-badge-count-109" count={109} color="#52c41a" />
      </Cells>

      <Cells title="封顶数字" className="p-4 flex gap-5 items-center">
        <Badge count={99}>
          <div style={styles.holeDiv} />
        </Badge>
        <Badge count={100}>
          <div style={styles.holeDiv} />
        </Badge>
        <Badge count={99} overflowCount={10}>
          <div style={styles.holeDiv} />
        </Badge>
        <Badge count={1000} overflowCount={999}>
          <div style={styles.holeDiv} />
        </Badge>
      </Cells>

      <Cells title="自定义位置偏移" className="p-4 flex gap-5 items-center">
        <Badge count={5} offset={[10, 10]}>
          <div style={styles.holeDiv} />
        </Badge>
      </Cells>
    </div>
  );
};
