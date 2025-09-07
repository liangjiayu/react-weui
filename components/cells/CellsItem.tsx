import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

export interface CellsItemProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  arrow?: boolean;
  description?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CellsItem: React.FC<CellsItemProps> = (props) => {
  const { prefix, arrow, className, suffix, children, style, onClick, description, ...restProps } =
    props;

  const classes = classNames('weui-cell', { 'weui-cell_access': arrow }, className);

  // ============================ Render ============================
  return (
    <a {...restProps} className={classes} onClick={onClick} style={style}>
      {prefix && <div className="weui-cell__hd">{prefix}</div>}
      <div className="weui-cell__bd">
        {children && <>{children}</>}
        {description && <div className="weui-cell__desc">{description}</div>}
      </div>
      {(arrow || suffix) && <div className="weui-cell__ft">{suffix}</div>}
    </a>
  );
};

export default CellsItem;
