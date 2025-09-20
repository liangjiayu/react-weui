import type { ChangeEvent } from 'react';

export interface CheckboxChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: {
    value: any;
    checked: boolean;
  } & HTMLInputElement;
}

export type CheckboxValueType = string | number | boolean;

export type CheckboxOptionType = {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  title?: string;
  id?: string;
  required?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
};

export type CheckboxGroupContextProps = {
  value: any[];
  disabled?: boolean;
  name?: string;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
  toggleOption: (option: CheckboxOptionType) => void;
};

export interface CheckboxGroupProps {
  title?: string;
  name?: string;
  defaultValue?: CheckboxValueType[];
  value?: CheckboxValueType[];
  disabled?: boolean;
  children?: React.ReactNode;
  options?: CheckboxOptionType[];
  onChange?: (checkedValue: any[]) => void;
}

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> {
  name?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}
