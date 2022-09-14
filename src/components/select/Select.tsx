import type { SelectHTMLAttributes } from 'react';
import React from 'react';
import classNames from 'classnames';
import { useMergedState } from '../../utils';

export type SelectProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = (props) => {
  const { children, onChange, className, ...restProps } = props;

  const [value, setValue] = useMergedState<string>({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    onChange?.(e);
  };

  const classes = classNames('weui-select', className);

  return (
    <select
      {...restProps}
      className={classes}
      onChange={handleChange}
      value={value}
    >
      {children}
    </select>
  );
};

export default Select;
