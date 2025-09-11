import classNames from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';
import Icon from '../icon';

interface MsgProps {
  icon?: 'success' | 'info' | 'warn' | 'waiting' | 'error';
  title?: ReactNode;
  description?: ReactNode;
  operation?: ReactNode;
  tips?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Msg: React.FC<MsgProps> = (props) => {
  const {
    icon,
    title,
    description,
    tips,
    extra,
    operation,
    children,
    className,
    style,
    ...restProps
  } = props;

  // ============================ Render ============================
  return (
    <div {...restProps} className={classNames('weui-msg', className)} style={style}>
      {icon && (
        <div className="weui-msg__icon-area">
          <Icon type={icon} className="weui-icon_msg" />
        </div>
      )}

      <div className="weui-msg__text-area">
        {title && <h2 className="weui-msg__title">{title}</h2>}
        {description && <div className="weui-msg__desc">{description}</div>}
        {children && <div className="weui-msg__custom-area">{children}</div>}
      </div>

      {operation && <div className="weui-msg__opr-area">{operation}</div>}

      {tips && (
        <div className="weui-msg__tips-area">
          <div className="weui-msg__tips">{tips}</div>
        </div>
      )}

      {extra && <div className="weui-msg__extra-area">{extra}</div>}
    </div>
  );
};

export default Msg;
