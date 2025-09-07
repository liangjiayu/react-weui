import React from 'react';
import { Icon } from 'react-weui';

const styles: Record<string, React.CSSProperties> = {
  iconContext: {
    flex: 1,
    marginLeft: 18,
  },
  iconDesc: {
    marginTop: 6,
    fontSize: 12,
    color: '#888',
  },
};

export default () => {
  return (
    <div style={{ backgroundColor: 'var(--weui-BG-0)', minHeight: '100vh' }}>
      <div className="page__hd">
        <div className="page__title">Icon</div>
        <div className="page__desc">图标</div>
      </div>
      <div className="px-8">
        <div className="flex items-center mb-6">
          <Icon type="success" size="64px" />
          <div style={styles.iconContext}>
            <div className="text-18px">成功</div>
            <div style={styles.iconDesc}>用于表示操作顺利达成</div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Icon type="info" size="64px" />
          <div style={styles.iconContext}>
            <div className="text-18px">提示</div>
            <div style={styles.iconDesc}>
              用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息
            </div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Icon type="warn" size="64px" />
          <div style={styles.iconContext}>
            <div className="text-18px">普通警告</div>
            <div style={styles.iconDesc}>用于表示操作后将引起一定后果的情况</div>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Icon type="error" size="64px" />
          <div style={styles.iconContext}>
            <div className="text-18px">强烈警告</div>
            <div style={styles.iconDesc}>用于表示操作后将引起严重的不可挽回的后果的情况</div>
          </div>
        </div>
        <div className="flex items-center">
          <Icon type="waiting" size="64px" />
          <div style={styles.iconContext}>
            <div className="text-18px">等待</div>
            <div style={styles.iconDesc}>用于表示等待</div>
          </div>
        </div>
      </div>
    </div>
  );
};
