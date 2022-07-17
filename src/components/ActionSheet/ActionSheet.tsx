import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';

type ActionSheetProps = {
  visible?: boolean;
  actions?: ActionSheetItemProps[];
  title?: ReactNode;
  cancelText?: string;
  closeOnAction?: boolean;
  closeOnMaskClick?: boolean;
  onAction?: (action: ActionSheetItemProps, index: number) => void;
  onClose?: () => void;
};

type ActionSheetItemProps = {
  key?: string;
  name?: string;
  subname?: string;
  disabled?: boolean;
  warn?: boolean;
  onClick?: () => void;
  className?: string;
};

const ActionSheetItem: React.FC<ActionSheetItemProps> = (props) => {
  const {
    name,
    onClick = () => {},
    subname,
    disabled,
    warn,
    className,
  } = props;

  return (
    <div
      role="button"
      className={classNames(
        'weui-actionsheet__cell',
        {
          'weui-actionsheet__cell_disabled': disabled,
          'weui-actionsheet__cell_warn': warn,
        },
        className
      )}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      {name && <div className="weui-actionsheet__name">{name}</div>}
      {subname && <div className="weui-actionsheet__subname">{subname}</div>}
    </div>
  );
};

const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const {
    visible,
    title,
    cancelText,
    onClose = () => {},
    actions = [],
    onAction = () => {},
    closeOnAction,
    closeOnMaskClick = true,
    children,
  } = props;

  return (
    <div>
      <div
        className="weui-mask"
        style={{ display: visible ? 'block' : 'none' }}
        onClick={() => {
          if (closeOnMaskClick) {
            onClose();
          }
        }}
      />

      <div
        role="dialog"
        className={classNames('weui-actionsheet', {
          'weui-actionsheet_toggle': visible,
        })}
      >
        {title && (
          <div className="weui-actionsheet__title">
            <div className="weui-actionsheet__title-text">{title}</div>
          </div>
        )}

        <div className="weui-actionsheet__menu">
          {actions.map((action, index) => {
            return (
              <ActionSheetItem
                key={action.key}
                {...action}
                onClick={() => {
                  action?.onClick?.();
                  onAction(action, index);
                  if (closeOnAction) {
                    onClose();
                  }
                }}
              />
            );
          })}
        </div>

        {children}

        {cancelText && (
          <div className="weui-actionsheet__action">
            <ActionSheetItem
              onClick={() => {
                onClose();
              }}
              name={cancelText}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionSheet;
