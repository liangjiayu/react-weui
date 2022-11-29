import React, { useMemo } from 'react';
import classNames from 'classnames';
import './style.less';

type BadgeProps = {
  color?: string;
  count?: React.ReactNode;
  dot?: boolean;
  showZero?: boolean;
  overflowCount?: number;
  offset?: [number, number];
  className?: string;
  style?: React.CSSProperties;
};

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

  const displayNode =
    typeof count === 'object'
      ? // @ts-ignore
        React.cloneElement(count, {
          // @ts-ignore
          style: { ...count?.props?.style, ...mergedStyle },
          className: classNames(
            // @ts-ignore
            count?.props?.className,
            {
              'weui-badge--fixed': Boolean(children),
              'weui-badge_dot': dot,
            },
            className
          ),
        })
      : undefined;

  const displayCount = useMemo(() => {
    if (dot) {
      return true;
    }
    if (showZero && count === 0) {
      return '0';
    }
    if (!count) {
      return null;
    }
    if (overflowCount && count > overflowCount) {
      return `${overflowCount}+`;
    }
    return count;
  }, [count, dot, overflowCount, showZero]);

  // ==========  Render ==========
  if (displayNode) {
    return (
      <div className="weui-badge-wrap">
        {children}
        {displayNode}
      </div>
    );
  }

  return (
    <div className="weui-badge-wrap">
      {children}
      {displayCount && (
        <div
          style={{ ...mergedStyle, backgroundColor: color }}
          className={classNames(
            'weui-badge',
            {
              'weui-badge--fixed': Boolean(children),
              'weui-badge_dot': dot,
            },
            className
          )}
        >
          {displayCount}
        </div>
      )}
    </div>
  );
};

export default Badge;
