import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

type ButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'type'
> & {
  type?: 'primary' | 'default' | 'warn';
  size?: 'mini' | 'medium';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
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

  // ============================ Styles ============================
  const classes = classNames(
    'weui-btn',
    {
      [`weui-btn_${type}`]: type,
      [`weui-btn_${size}`]: size,
      'weui-btn_block': block,
      'weui-btn_disabled': disabled,
      'weui-btn_loading': loading,
    },
    className,
  );

  // ============================ Render ============================
  return (
    <a
      {...restProps}
      role="button"
      onClick={onClick}
      className={classes}
      style={style}
    >
      {loading && <i className="weui-mask-loading" />}
      {children}
    </a>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
