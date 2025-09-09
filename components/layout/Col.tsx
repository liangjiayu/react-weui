import classNames from 'classnames';
import React, { useContext } from 'react';
import RowContext from './RowContext';

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: string | number;
  offset?: number;
  span?: number;
}

/**
 * 兼容 flex 样式
 */
function parseFlex(flex: number | string): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col: React.FC<ColProps> = (props) => {
  const { flex, offset, span, className, style, children, ...restProps } = props;
  const { gutter } = useContext(RowContext);

  const classes = classNames(
    'weui-col',
    {
      [`weui-col--${span}`]: span !== undefined,
      [`weui-col--offset-${offset}`]: offset,
    },
    className,
  );

  const mergedStyle: React.CSSProperties = {};
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);
  }

  // ==================== Render =====================
  return (
    <div {...restProps} style={{ ...mergedStyle, ...style }} className={classes}>
      {children}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col';
}

export default Col;
