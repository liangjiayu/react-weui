import React from 'react';
import RadioGroupContext from './RadioGroupContext';
import { useMergedState } from '@/utils';
import type { RadioChangeEvent } from './index';

export type RadioGroupProps = {
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: boolean;
  name?: string;
  title?: string;
  children?: React.ReactNode;
};

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { onChange, title } = props;
  const [value, setValue] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const onRadioChange = (ev: RadioChangeEvent) => {
    const val = ev.target.value;
    if (props.value === undefined) {
      setValue(val);
    }
    if (onChange) {
      onChange(ev);
    }
  };

  return (
    <div className="weui-cells__group weui-cells__group_form">
      {title && <div className="weui-cells__title">{title}</div>}
      <div className="weui-cells">
        <RadioGroupContext.Provider
          value={{
            value: value,
            onChange: onRadioChange,
            disabled: props.disabled,
            name: props.name,
          }}
        >
          {props.children}
        </RadioGroupContext.Provider>
      </div>
    </div>
  );
};

export default RadioGroup;
