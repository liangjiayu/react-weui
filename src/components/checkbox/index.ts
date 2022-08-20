import type { ChangeEvent } from 'react';
import type { CheckboxProps } from './Checkbox';
import _Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

interface CompoundedComponent extends React.FC<CheckboxProps> {
  Group: typeof CheckboxGroup;
}

// @ts-ignore
export interface CheckboxChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: {
    value: any;
    checked: boolean;
  };
}

export type CheckboxValueType = string | number | boolean;
export type CheckboxOptionType = {
  label: React.ReactNode;
  value: CheckboxValueType;
};

const Checkbox = _Checkbox as CompoundedComponent;

Checkbox.Group = CheckboxGroup;

export default Checkbox;
