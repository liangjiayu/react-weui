import React from 'react';

export interface CellsProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Cells: React.FC<CellsProps> = (props) => {
  const { title, children, className, style, ...restProps } = props;

  // ============================ Render ============================
  return (
    <div {...restProps} className={className} style={style}>
      {title && <div className="weui-cells__title">{title}</div>}
      {children && <div className="weui-cells">{children}</div>}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Cells.displayName = 'Cells';
}

export default Cells;
