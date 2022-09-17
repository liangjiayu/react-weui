import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  type?: 'primary' | 'default' | 'warn';
  size?: 'mini';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    type = 'default',
    size,
    disabled,
    loading,
    block,
    onClick,
    className,
    style,
    ...restProps
  } = props;

  return (
    <a
      {...restProps}
      role="button"
      onClick={onClick}
      className={classNames(
        block ? 'weui-btn_cell' : 'weui-btn',
        block ? `weui-btn_cell-${type}` : `weui-btn_${type}`,
        {
          [`weui-btn_mini`]: size === 'mini',
          [`weui-wa-hotarea`]: size === 'mini',
          [`weui-btn_disabled`]: disabled,
          [`weui-btn_loading`]: loading,
        },
        className
      )}
      style={style}
    >
      {loading ? (
        <>
          <span
            className={classNames('weui-primary-loading', {
              ['weui-primary-loading_transparent']: type === 'primary',
            })}
          >
            <i className="weui-primary-loading__dot" />
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </a>
  );
};

export default Button;
