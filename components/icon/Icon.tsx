import classNames from 'classnames';
import React from 'react';
import './style.less';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'success' | 'info' | 'warn' | 'waiting' | 'error';
  size?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = (props) => {
  const { type = 'info', size, color, onClick, className, style, ...restProps } = props;

  const classes = classNames(
    'weui-icon',
    {
      [`weui-icon-${type}`]: type,
    },
    className,
  );

  const mergeStyle: React.CSSProperties = {
    ...style,
    width: size,
    height: size,
    color: color,
  };

  // ============================ Render ============================
  return <i {...restProps} className={classes} onClick={onClick} style={mergeStyle} />;
};

export default Icon;
