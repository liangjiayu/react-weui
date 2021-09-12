import React from 'react';
import './index.less';

type DemoBlockProps = {
  title: string;
  style?: React.CSSProperties;
};

const DemoBlock: React.FC<DemoBlockProps> = (props) => {
  const { title, children, style } = props;

  return (
    <div className="demo-block">
      <div className="demo-block_title">{title}</div>
      <div className="demo-block_content" style={style}>
        {children}
      </div>
    </div>
  );
};

export default DemoBlock;
