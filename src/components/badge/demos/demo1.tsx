import React from 'react';
import { Badge } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

const styles: Record<string, React.CSSProperties> = {
  holeDiv: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: '8px',
  },
  icon: {
    width: 14,
    height: 14,
    border: '2px solid #000',
  },
};

export default () => {
  return (
    <div style={{ padding: '0 0 100px' }}>
      <div className="p-40">
        <div className="text-20">Badge</div>
        <div className="text-14">徽标</div>
      </div>

      <DemoBlock title="基础用法" style={{ display: 'flex' }}>
        <div className="mr-20">
          <Badge count={5}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
        <div className="mr-20">
          <Badge count={0} showZero>
            <div style={styles.holeDiv} />
          </Badge>
        </div>

        <div className="mr-20">
          <Badge dot>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
      </DemoBlock>

      <DemoBlock
        title="独立使用"
        style={{ display: 'flex', alignItems: 'center', fontSize: 0 }}
      >
        <div className="mr-10">
          <Badge count={11} color="#faad14" />
        </div>
        <div className="mr-10">
          <Badge count={25} />
        </div>
        <span className="mr-10">
          <Badge count={<div style={styles.icon} />} />
        </span>
        <div className="mr-10">
          <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
        </div>
      </DemoBlock>

      <DemoBlock title="封顶数字" style={{ display: 'flex' }}>
        <div className="mr-20">
          <Badge count={99}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
        <div className="mr-20">
          <Badge count={100}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
        <div className="mr-20">
          <Badge count={99} overflowCount={10}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
        <div className="mr-20">
          <Badge count={1000} overflowCount={999}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
      </DemoBlock>

      <DemoBlock title="自定义内容" style={{ display: 'flex' }}>
        <div className="mr-20">
          <Badge count={<div style={styles.icon} className="aaa" />}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
        <div className="mr-20">
          <Badge count={'Hot'}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
      </DemoBlock>

      <DemoBlock title="自定义位置偏移" style={{ display: 'flex' }}>
        <div className="mr-20">
          <Badge count={5} offset={[10, 10]}>
            <div style={styles.holeDiv} />
          </Badge>
        </div>
      </DemoBlock>
    </div>
  );
};
