import React from 'react';

export type CellsProps = {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Cells: React.FC<CellsProps> = (props) => {
  const { title, children, className, style } = props;
  return (
    <div className={className} style={style}>
      {title && <div className="weui-cells__title">{title}</div>}
      {children && <div className="weui-cells">{children}</div>}
    </div>
  );
};

export default Cells;
