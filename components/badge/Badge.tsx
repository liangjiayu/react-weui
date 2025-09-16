import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import './style.less';

interface BadgeProps {
  color?: string;
  count?: React.ReactNode;
  dot?: boolean;
  showZero?: boolean;
  overflowCount?: number;
  offset?: [number, number];
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    count,
    dot,
    overflowCount = 99,
    showZero,
    offset,
    color,
    style,
    className,
    children,
  } = props;

  const mergedStyle = useMemo(() => {
    if (!offset) {
      return { ...style };
    }

    const offsetStyle: React.CSSProperties = {
      top: offset!?.[1],
      right: offset!?.[0] * -1,
    };

    return {
      ...offsetStyle,
      ...style,
    };
  }, [style, offset]);

  const displayCount = useMemo(() => {
    if (typeof count === 'object') {
      return count;
    }
    if (dot) {
      return true;
    }
    if (showZero && count === 0) {
      return '0';
    }
    if (!count) {
      return null;
    }
    if (overflowCount && (count as number) > overflowCount) {
      return `${overflowCount}+`;
    }
    return count;
  }, [count, dot, overflowCount, showZero]);

  // ============================ Render ============================
  const classes = classNames(
    {
      'weui-badge': typeof count !== 'object',
      'weui-badge--fixed': Boolean(children),
      'weui-badge_dot': dot,
    },
    className,
  );

  return (
    <div className="weui-badge-wrap">
      {children}
      {displayCount && (
        <div style={{ ...mergedStyle, backgroundColor: color }} className={classes}>
          {displayCount}
        </div>
      )}
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = 'Badge';
}

export default Badge;
