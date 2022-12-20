import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import './style.less';

type GridProps = {
  items: GridItemType[];
  className?: string;
  style?: React.CSSProperties;
};

type GridItemType = {
  key: string;
  label?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  [key: string]: any;
};

function itemsToNodes(list: GridItemType[]) {
  return (list || []).map((i) => {
    const { key, icon, label, ...restProps } = i;
    return (
      <div className="weui-grid" key={key} {...restProps}>
        <div className="weui-grid__icon">{icon}</div>
        <div className="weui-grid__label">{label}</div>
      </div>
    );
  });
}

const Grid: React.FC<GridProps> = (props) => {
  const { items = [], className, style } = props;

  const itemsChildren = useMemo(() => {
    return itemsToNodes(items);
  }, [items]);

  const classes = classNames('weui-grids', className);

  return (
    <div className={classes} style={style}>
      {itemsChildren}
    </div>
  );
};

export default Grid;
