import classNames from 'classnames';
import React from 'react';

export interface CellsProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Cells: React.FC<CellsProps> = (props) => {
  const { title, children, className, style, ...restProps } = props;

  const classes = classNames('weui-cells', className);

  // ============================ Render ============================
  return (
    <div>
      {title && <div className="weui-cells__title">{title}</div>}
      {children && (
        <div {...restProps} className={classes} style={style}>
          {children}
        </div>
      )}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Cells.displayName = 'Cells';
}

export default Cells;
