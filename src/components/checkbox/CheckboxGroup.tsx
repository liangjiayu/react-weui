import React from 'react';
import CheckboxGroupContext from './CheckboxGroupContext';
import { useMergedState } from '@/utils';
import type { CheckboxValueType, CheckboxOptionType } from './index';

export type CheckboxGroupProps = {
  title?: string;
  name?: string;
  defaultValue?: CheckboxValueType[];
  value?: CheckboxValueType[];
  onChange?: (checkedValue: CheckboxValueType[]) => void;
  disabled?: boolean;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { onChange, title } = props;

  const [value, setValue] = useMergedState<CheckboxValueType[]>({
    value: props.value,
    defaultValue: props.defaultValue || [],
  });
  const [registeredValues, setRegisteredValues] = React.useState<
    CheckboxValueType[]
  >([]);

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
          {props.children}
        </CheckboxGroupContext.Provider>
      </div>
    </div>
  );
};

export default CheckboxGroup;
