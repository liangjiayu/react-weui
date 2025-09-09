import classNames from 'classnames';
import React, { useMemo } from 'react';
import RowContext from './RowContext';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'top' | 'center' | 'bottom';
  gutter?: number | [number, number];
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
  wrap?: boolean;
}

const Row: React.FC<RowProps> = (props) => {
  const { align, gutter = 0, justify, wrap, style, className, children, ...restProps } = props;

  // ============================ Styles ============================
  const gutters = (Array.isArray(gutter) ? gutter : [gutter, undefined]) as [number, number];
  const [gutterH, gutterV] = gutters;

  const rowStyle: React.CSSProperties = {};
  const horizontalGutter = gutterH && gutterH > 0 ? gutterH / -2 : undefined;
  rowStyle.rowGap = gutterV;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  const classes = classNames(
    'weui-row',
    {
      [`weui-row--align-${align}`]: align,
      [`weui-row--justify-${justify}`]: justify,
      'weui-row--nowrap': wrap === false,
    },
    className,
  );

  const rowContext = useMemo(() => {
    return {
      gutter: gutters,
    };
  }, [gutters]);

  // ============================ Render ============================
  return (
    <RowContext.Provider value={rowContext}>
      <div {...restProps} style={{ ...rowStyle, ...style }} className={classes}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Row.displayName = 'Row';
}

export default Row;
