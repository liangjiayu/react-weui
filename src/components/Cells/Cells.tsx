import React from 'react';

export type CellsProps = {
  title?: string;
};

const Cells: React.FC<CellsProps> = (props) => {
  const { title, children } = props;
  return (
    <div>
      {title && <div className="weui-cells__title">{title}</div>}
      {children && <div className="weui-cells">{children}</div>}
    </div>
  );
};

export default Cells;
