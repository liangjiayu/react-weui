import React from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';

export type RowProps = {
  gutter?: number;
  align?: 'top' | 'center' | 'bottom';
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  wrap?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Row: React.FC<RowProps> = (props) => {
  const {
    children,
    align = 'top',
    justify = 'start',
    gutter = 0,
    wrap,
    style,
    className,
    ...others
  } = props;

  const classes = classNames(
    'weui-row',
    `weui-row--align-${align}`,
    `weui-row--justify-${justify}`,
    {
      ['weui-row--nowrap']: wrap === false,
    },
    className
  );

  const rowStyle: React.CSSProperties = {};
  const horizontalGutter = gutter > 0 ? gutter / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  const rowContext = {
    gutter: gutter,
  };

  return (
    <RowContext.Provider value={rowContext}>
      <div {...others} style={{ ...rowStyle, ...style }} className={classes}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

export default Row;
