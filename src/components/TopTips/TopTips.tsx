import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import classNames from 'classnames';

export type TopTipsProps = {
  type?: 'success' | 'info' | 'warning' | 'warn';
  message: ReactNode;
  duration?: number;
  onClick?: () => void;
  onClose?: () => void;
  className?: string;
};

const TopTips: React.FC<TopTipsProps> = (props) => {
  const {
    type = 'warn',
    message,
    duration = 2000,
    onClick = () => {},
    onClose = () => {},
    className,
  } = props;

  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        onClose();
      }, duration);
    }
  }, []);

  return (
    <div
      role="alert"
      className={classNames('weui-toptips', `weui-toptips_${type}`, className)}
      style={{ display: 'block' }}
      onClick={onClick}
    >
      {message}
    </div>
  );
};

export default TopTips;
