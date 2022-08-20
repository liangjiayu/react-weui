import type { InputHTMLAttributes } from 'react';
import React from 'react';
import CheckboxGroupContext from './CheckboxGroupContext';
import { useMergedState } from '@/utils';
import type { CheckboxChangeEvent } from './index';

export type CheckboxProps = {
  name?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { children, ...restProps } = props;
  const groupContext = React.useContext(CheckboxGroupContext);
  const [checked, setChecked] = useMergedState({
    value: props.checked,
    defaultValue: props.defaultChecked || false,
  });

  React.useEffect(() => {
    groupContext?.registerValue(restProps.value);
  }, []);

  const onChange = (e: CheckboxChangeEvent) => {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
    }
    e.target = {
      value: props.value,
      checked: e.target.checked,
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    } as any;

    props.onChange?.(e);
  };

  const checkboxProps: CheckboxProps = { ...restProps };
  checkboxProps.onChange = onChange;
  checkboxProps.checked = checked;

  if (groupContext) {
    checkboxProps.name = groupContext.name;
    checkboxProps.disabled = checkboxProps.disabled || groupContext.disabled;
    checkboxProps.checked = groupContext.value.indexOf(restProps.value) !== -1;
    checkboxProps.onChange = (...args) => {
      if (restProps.onChange) {
        restProps.onChange(...args);
      }
      groupContext?.toggleOption({ label: children, value: restProps.value });
    };
  }

  return (
    <label className="weui-cell weui-cell_active weui-check__label">
      <div className="weui-cell__hd">
        <input {...checkboxProps} type="checkbox" className="weui-check" />
        <i className="weui-icon-checked" />
      </div>
      <div className="weui-cell__bd">{children}</div>
    </label>
  );
};

export default Checkbox;
