import React from 'react';
import { useMergedState } from '../_utils';
import type { RadioChangeEvent, RadioGroupProps } from './interface';
import Radio from './Radio';
import RadioGroupContext from './RadioGroupContext';

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {
    onChange,
    title,
    children,
    options,
    disabled,
    name,
    value: customizedValue,
    defaultValue,
  } = props;

  const [value, setValue] = useMergedState({
    value: customizedValue,
    defaultValue: defaultValue,
  });

  const onRadioChange = (event: RadioChangeEvent) => {
    const val = event.target.value;
    if (customizedValue === undefined) {
      setValue(val);
    }
    if (onChange) {
      onChange(event);
    }
  };

  // ============================ Render ============================
  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      return (
        <Radio
          key={`radio-group-value-options-${option.value}`}
          disabled={option.disabled || disabled}
          value={option.value}
          checked={value === option.value}
          title={option.title}
          style={option.style}
          className={option.className}
          id={option.id}
          required={option.required}
        >
          {option.label}
        </Radio>
      );
    });
  }

  return (
    <div className="weui-cells__group weui-cells__group_form">
      {title && <div className="weui-cells__title">{title}</div>}
      <div className="weui-cells  weui-cells_radio">
        <RadioGroupContext.Provider
          value={{
            value: value,
            onChange: onRadioChange,
            disabled: disabled,
            name: name,
          }}
        >
          {childrenToRender}
        </RadioGroupContext.Provider>
      </div>
    </div>
  );
};

export default RadioGroup;
