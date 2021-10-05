import React from 'react';
import './index.less';

type DemoBlockProps = {
  title: string;
  style?: React.CSSProperties;
  noStyle?: boolean;
};

const DemoBlock: React.FC<DemoBlockProps> = (props) => {
  const { title, children, style, noStyle } = props;

  return (
    <div className="demo-block">
      <div className="demo-block__title">{title}</div>
      {noStyle ? (
        children
      ) : (
        <div className="demo-block__content" style={style}>
          {children}
        </div>
      )}
    </div>
  );
};

export default DemoBlock;
