import React, { useState } from 'react';
import { useMergedState } from '../_utils';
import Checkbox from './Checkbox';
import CheckboxGroupContext from './CheckboxGroupContext';
import type { CheckboxGroupProps, CheckboxOptionType, CheckboxValueType } from './interface';

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { onChange, title, children, options, disabled } = props;

  const [value, setValue] = useMergedState<CheckboxValueType[]>({
    value: props.value,
    defaultValue: props.defaultValue || [],
  });
  const [registeredValues, setRegisteredValues] = useState<CheckboxValueType[]>([]);

  const cancelValue = (val: string) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
  };

  const registerValue = (val: string) => {
    setRegisteredValues((prevValues) => [...prevValues, val]);
  };

  const toggleOption = (option: CheckboxOptionType) => {
    const optionIndex = value.indexOf(option.value);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (props.value === undefined) {
      setValue(newValue);
    }
    onChange?.(newValue.filter((val) => registeredValues.indexOf(val) !== -1));
  };

  let childrenToRender = children;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      return (
        <Checkbox
          key={`checkbox-group-value-options-${option.value}`}
          disabled={option.disabled || disabled}
          value={option.value}
          checked={value.includes(option.value)}
          onChange={option.onChange}
          title={option.title}
          style={option.style}
          className={option.className}
          id={option.id}
          required={option.required}
        >
          {option.label}
        </Checkbox>
      );
    });
  }

  return (
    <div className="weui-cells__group weui-cells__group_form">
      {title && <div className="weui-cells__title">{title}</div>}
      <div className="weui-cells weui-cells_checkbox">
        <CheckboxGroupContext.Provider
          value={{
            value: value,
            disabled: props.disabled,
            name: props.name,
            cancelValue,
            registerValue,
            toggleOption,
          }}
        >
          {childrenToRender}
        </CheckboxGroupContext.Provider>
      </div>
    </div>
  );
};

export default CheckboxGroup;
