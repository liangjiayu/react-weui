import classNames from 'classnames';
import React from 'react';
import { useMergedState } from '../_utils';
import CheckboxGroupContext from './CheckboxGroupContext';
import type { CheckboxChangeEvent, CheckboxProps } from './interface';

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
    e.target.value = props.value;
    setChecked(e.target.checked);
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

  // ============================ Render ============================
  return (
    <label
      className={classNames('weui-cell weui-cell_active weui-check__label', {
        'weui-cell_disabled': checkboxProps.disabled,
        'weui-cells_checkbox': !groupContext,
      })}
    >
      <div className="weui-cell__hd">
        <input {...checkboxProps} type="checkbox" className="weui-check" />
        <i className="weui-icon-checked" />
      </div>
      <div className="weui-cell__bd">{children}</div>
    </label>
  );
};

export default Checkbox;
