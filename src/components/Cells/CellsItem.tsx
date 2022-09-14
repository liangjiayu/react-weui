import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';

export type CellsItemProps = {
  prefix?: ReactNode;
  extra?: ReactNode;
  arrow?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'div' | 'label' | 'a';
};

const CellsItem: React.FC<CellsItemProps> = (props) => {
  const {
    children,
    prefix,
    arrow,
    extra,
    onClick,
    className,
    type = 'div',
    ...restProps
  } = props;

  const classes = classNames(
    'weui-cell',
    { [`weui-cell_access`]: arrow },
    className
  );

  const content = (
    <>
      {prefix && <div className="weui-cell__hd">{prefix}</div>}
      {children && <div className="weui-cell__bd">{children}</div>}
      {(arrow || extra) && <div className="weui-cell__ft">{extra}</div>}
    </>
  );

  return React.createElement(
    type,
    {
      className: classes,
      onClick: onClick,
      ...restProps,
    },
    content
  );
};

export default CellsItem;
