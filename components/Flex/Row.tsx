import React from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';

export type RowProps = {
  gutter?: number;
  align?: 'top' | 'center' | 'bottom';
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  wrap?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const defaultProps = {
  gutter: 0,
  align: 'top',
  justify: 'start',
} as Required<Pick<RowProps, 'align' | 'justify' | 'gutter'>>;

const Row: React.FC<RowProps> = (props) => {
  const {
    children,
    align,
    justify,
    gutter,
    wrap,
    style,
    className,
    ...others
  } = props as RowProps & typeof defaultProps;

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

Row.defaultProps = defaultProps;

export default Row;
