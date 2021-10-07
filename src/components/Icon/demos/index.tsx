import React from 'react';
import { Icon } from 'react-weui';
import DemoBlock from '@/demos/DemoBlock';

const styles: Record<string, React.CSSProperties> = {
  box: { display: 'flex', alignItems: 'center' },
  word: { fontSize: 13, flex: '1', color: '#666', marginLeft: 5 },
};

export default () => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 60 }}>
      <DemoBlock title="成功">
        <div style={styles.box}>
          <Icon type="success" size="64px" />
          <span style={styles.word}>用于表示操作顺利达成</span>
        </div>
      </DemoBlock>

      <DemoBlock title="提示">
        <div style={styles.box}>
          <Icon type="info" size="64px" />
          <span style={styles.word}>
            用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息
          </span>
        </div>
      </DemoBlock>

      <DemoBlock title="普通警告">
        <div style={styles.box}>
          <Icon type="warn" size="64px" color="#ffc300" />
          <span style={styles.word}>用于表示操作后将引起一定后果的情况</span>
        </div>
      </DemoBlock>

      <DemoBlock title="强烈警告">
        <div style={styles.box}>
          <Icon type="warn" size="64px" />
          <span style={styles.word}>
            用于表示操作后将引起严重的不可挽回的后果的情况
          </span>
        </div>
      </DemoBlock>

      <DemoBlock title="等待">
        <div style={styles.box}>
          <Icon type="waiting" size="64px" />
          <span style={styles.word}>用于表示等待</span>
        </div>
      </DemoBlock>
    </div>
  );
};
