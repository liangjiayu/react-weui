import type { InputHTMLAttributes } from 'react';
import React, { useRef } from 'react';
import { useMergedState } from '../../utils';

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

export type InputProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  defaultValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { clearable, onChange, type = 'text', ...rest } = props;

  const [value, setValue] = useMergedState<string>({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    inputRef.current?.focus();
    setValue('');

    onChange?.({
      type: 'change-clear',
      target: {
        value: '',
      },
    } as any);
  };

  return (
    <div className="weui-flex">
      <input
        {...rest}
        type={type}
        ref={inputRef}
        className="weui-input"
        value={fixControlledValue(value)}
        onChange={handleChange}
      />
      {clearable && (
        <button className="weui-btn_reset weui-btn_icon weui-btn_input-clear">
          <i
            className="weui-icon-clear"
            onClick={handleClear}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
