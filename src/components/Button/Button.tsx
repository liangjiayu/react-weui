import React from 'react';
import classNames from 'classnames';
import './style.less';

type ButtonProps = {
  type?: 'primary' | 'default' | 'warn';
  size?: 'mini';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, size, disabled, loading, block, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={classNames('weui-btn', `weui-btn_${type}`, {
        [`weui-btn_mini`]: size === 'mini',
        [`weui-btn_disabled`]: disabled,
        [`weui-btn_block`]: block,
        [`weui-btn_loading`]: loading,
      })}
    >
      {loading ? (
        <>
          <span
            className={classNames('weui-primary-loading', {
              ['weui-primary-loading_transparent']: type === 'primary',
            })}
          >
            <i className="weui-primary-loading__dot"></i>
          </span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
