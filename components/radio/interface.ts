import React from 'react';

export interface RadioChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: {
    value: any;
    checked: boolean;
  } & HTMLInputElement;
}

export interface RadioGroupProps {
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: boolean;
  name?: string;
  title?: string;
  children?: React.ReactNode;
  id?: string;
  options?: RadioOptionType[];
}

export interface RadioGroupContextProps {
  value: any;
  onChange: (e: RadioChangeEvent) => void;
  disabled?: boolean;
  name?: string;
}

export interface RadioProps {
  name?: string;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
  required?: boolean;
  title?: string;
  onChange?: (e: RadioChangeEvent) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export interface RadioOptionType {
  label: React.ReactNode;
  value: any;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  title?: string;
  id?: string;
  required?: boolean;
  onChange?: (e: RadioChangeEvent) => void;
}
