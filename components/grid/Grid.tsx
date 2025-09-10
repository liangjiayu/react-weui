import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';

interface GridProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  items: GridItemProp[];
  className?: string;
  style?: React.CSSProperties;
}

interface GridItemProp extends React.HtmlHTMLAttributes<HTMLDivElement> {
  key: React.Key;
  label?: ReactNode;
  icon?: ReactNode;
}

function itemsToNodes(list: GridItemProp[]) {
  return list.map((item) => {
    const { key, label, icon, className, ...restProps } = item;

    return (
      <div className={classNames('weui-grid', className)} key={key} {...restProps}>
        <div className="weui-grid__icon">{icon}</div>
        <div className="weui-grid__label">{label}</div>
      </div>
    );
  });
}

const Grid: React.FC<GridProps> = (props) => {
  const { items = [], className, style, ...restProps } = props;

  const itemsChildren = useMemo(() => {
    return itemsToNodes(items);
  }, [items]);

  const classes = classNames('weui-grids', className);

  // ============================ Render ============================
  return (
    <div {...restProps} className={classes} style={style}>
      {itemsChildren}
    </div>
  );
};

export default Grid;
