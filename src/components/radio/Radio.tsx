import type { InputHTMLAttributes } from 'react';
import React from 'react';
import RadioGroupContext from './RadioGroupContext';
import { useMergedState } from '@/utils';
import type { RadioChangeEvent } from './index';

export type RadioProps = {
  name?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: RadioChangeEvent) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

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

  return (
    <label className="weui-cell weui-cell_active weui-check__label weui-cells_radio">
      <div className="weui-cell__bd">{children}</div>
      <div className="weui-cell__ft">
        <input {...radioProps} type="radio" className="weui-check" />
        <i className="weui-icon-checked" />
      </div>
    </label>
  );
};

export default Radio;
