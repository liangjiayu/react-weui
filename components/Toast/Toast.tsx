import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

export type ToastProps = {
  icon?: 'success' | 'warn' | 'loading';
  duration?: number;
  content?: React.ReactNode;
  onClose?: () => void;
  maskVisible?: boolean;
};

let singleToast = () => {};

const Toast: React.FC<ToastProps> = (props) => {
  const {
    icon,
    content,
    duration = 2000,
    onClose = () => {},
    maskVisible,
  } = props;
  const [visible, setVisible] = useState(true);
  let timer = 0;

  useEffect(() => {
    if (duration > 0) {
      // @ts-expect-error
      timer = setTimeout(() => {
        setVisible(false);
        onClose();
        singleToast = () => {};
      }, duration);
    }
    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  // 保持单一实例，清除一个实例
  useEffect(() => {
    singleToast();
    singleToast = onClose;
  }, []);

  return (
    <div role="alert" style={{ display: visible ? 'block' : 'none' }}>
      {maskVisible && <div className="weui-mask_transparent" />}
      <div
        className={classNames('weui-toast', {
          'weui-toast_text': !icon,
        })}
      >
        {icon && (
          <div
            className={classNames('weui-icon_toast', {
              'weui-icon-success-no-circle': icon === 'success',
              'weui-icon-warn': icon === 'warn',
              'weui-primary-loading': icon === 'loading',
            })}
          >
            {icon === 'loading' && <i className="weui-primary-loading__dot" />}
          </div>
        )}

        {content && <div className="weui-toast__content">{content}</div>}
      </div>
    </div>
  );
};

export default Toast;
