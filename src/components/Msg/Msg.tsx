import React, { ReactNode } from 'react';
import Icon from '../Icon';

type MsgProps = {
  icon?: 'success' | 'info' | 'warn' | 'waiting';
  title?: ReactNode;
  description?: ReactNode;
  operation?: ReactNode;
  tips?: ReactNode;
  extra?: ReactNode;
};

const Msg: React.FC<MsgProps> = (props) => {
  const { icon, title, description, tips, extra, operation, children } = props;

  return (
    <div className="weui-msg">
      {icon && (
        <div className="weui-msg__icon-area">
          <Icon type={icon} className="weui-icon_msg"></Icon>
        </div>
      )}

      <div className="weui-msg__text-area">
        {title && <h2 className="weui-msg__title">{title}</h2>}
        {description && <div className="weui-msg__desc">{description}</div>}
        {children}
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
