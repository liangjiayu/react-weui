import React from 'react';
import classNames from 'classnames';

type IconProps = {
  type?: 'success' | 'info' | 'warn' | 'waiting';
  size?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
};

const Icon: React.FC<IconProps> = (props) => {
  const { type, size, color, onClick, className } = props;
  return (
    <i
      className={classNames(`weui-icon-${type}`, className)}
      onClick={onClick}
      style={{ width: size, height: size, color: color }}
    ></i>
  );
};

Icon.defaultProps = {
  type: 'success',
};

export default Icon;
