import classNames from 'classnames';
import React from 'react';
import { useMergedState } from '../_utils';
import type { RadioChangeEvent, RadioProps } from './interface';
import RadioGroupContext from './RadioGroupContext';

const Radio: React.FC<RadioProps> = (props) => {
  const { children, ...restProps } = props;
  const groupContext = React.useContext(RadioGroupContext);
  const [checked, setChecked] = useMergedState({
    value: props.checked,
    defaultValue: props.defaultChecked || false,
  });

  const onChange = (e: RadioChangeEvent) => {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
    }
    e.target.value = props.value;

    props.onChange?.(e);
    groupContext?.onChange(e);
  };

  const radioProps: RadioProps = { ...restProps };
  radioProps.onChange = onChange;
  radioProps.checked = checked;

  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }

  // ============================ Render ============================
  return (
    <label
      className={classNames('weui-cell weui-cell_active weui-check__label', {
        'weui-cells_radio': !groupContext,
        'weui-cell_disabled': radioProps.disabled,
      })}
    >
      <div className="weui-cell__bd">{children}</div>
      <div className="weui-cell__ft">
        <input {...radioProps} type="radio" className="weui-check" />
        <i className="weui-icon-checked" />
      </div>
    </label>
  );
};

export default Radio;
