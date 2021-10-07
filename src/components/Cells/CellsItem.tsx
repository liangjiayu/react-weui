import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';

export type CellsItemProps = {
  prefix?: ReactNode;
  extra?: ReactNode;
  arrow?: boolean;
  onClick?: () => void;
};

const CellsItem: React.FC<CellsItemProps> = (props) => {
  const { children, prefix, arrow, extra, onClick } = props;

  return (
    <div
      className={classNames('weui-cell', { [`weui-cell_access`]: arrow })}
      onClick={onClick}
    >
      {prefix && <div className="weui-cell__hd">{prefix}</div>}
      {children && <div className="weui-cell__bd">{children}</div>}
      {(arrow || extra) && <div className="weui-cell__ft">{extra}</div>}
    </div>
  );
};

export default CellsItem;
