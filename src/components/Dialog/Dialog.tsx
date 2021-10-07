import classNames from 'classnames';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';

export type DialogProps = {
  title?: ReactNode;
  visible?: boolean;
  content?: ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  cancelText?: string;
  okText?: string;
  hideFooter?: boolean;
  afterClose?: () => void;
  confirmLoading?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    visible,
    title,
    content,
    cancelText = '取消',
    okText = '确定',
    onOk,
    onCancel,
    children,
    hideFooter,
    afterClose,
    confirmLoading,
    className,
    style,
  } = props;

  useEffect(() => {
    if (!visible) {
      afterClose?.();
    }
  }, [visible]);

  const renderFooter = () => {
    if (hideFooter) {
      return null;
    }
    return (
      <div className="weui-dialog__ft">
        {onCancel && (
          <div
            className="weui-dialog__btn weui-dialog__btn_default"
            onClick={() => {
              onCancel();
            }}
          >
            {cancelText}
          </div>
        )}
        {onOk && (
          <div
            className="weui-dialog__btn weui-dialog__btn_primary"
            onClick={() => {
              onOk();
            }}
          >
            {confirmLoading ? (
              <span className="weui-primary-loading">
                <i className="weui-primary-loading__dot" />
              </span>
            ) : (
              okText
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ display: visible ? 'block' : 'none' }}>
      <div className="weui-mask" />
      <div className={classNames('weui-dialog', className)} style={style}>
        {title && (
          <div className="weui-dialog__hd">
            <div className="weui-dialog__title">{title}</div>
          </div>
        )}

        {content && <div className="weui-dialog__bd">{content}</div>}

        {children}

        {renderFooter()}
      </div>
    </div>
  );
};

export default Dialog;
