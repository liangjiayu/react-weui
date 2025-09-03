import React, { useContext } from 'react';
import classNames from 'classnames';
import RowContext from './RowContext';

export type ColProps = {
  span?: number;
  offset?: number;
  flex?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

const Col: React.FC<ColProps> = (props) => {
  const { children, span, offset, flex, style, className, ...others } = props;

  const classes = classNames(
    'weui-col',
    {
      [`weui-col--${span}`]: span !== undefined,
      [`weui-col--offset-${offset}`]: offset,
    },
    className
  );

  const { gutter } = useContext(RowContext);

  const mergedStyle: React.CSSProperties = {};
  if (gutter && gutter > 0) {
    const horizontalGutter = gutter / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  return (
    <div
      {...others}
      style={{ ...mergedStyle, flex: flex, ...style }}
      className={classes}
    >
      {children}
    </div>
  );
};

export default Col;
