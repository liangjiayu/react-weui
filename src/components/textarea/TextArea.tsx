import type { TextareaHTMLAttributes } from 'react';
import React from 'react';
import classNames from 'classnames';
import { useMergedState } from '../../utils';

export type TextAreaProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
  showCount?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { children, onChange, className, maxLength, showCount, ...restProps } =
    props;

  const [value, setValue] = useMergedState<string>({
    value: props.value,
    defaultValue: props.defaultValue || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const currentLength = e.target.value.length;
    if (maxLength && currentLength > maxLength) {
      return;
    }
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    onChange?.(e);
  };

  const classes = classNames('weui-textarea', className);

  return (
    <>
      <textarea
        {...restProps}
        value={value}
        onChange={handleChange}
        className={classes}
      />
      {showCount && (
        <div className="weui-textarea-counter">
          {value?.length}
          {maxLength ? `/${maxLength}` : null}
        </div>
      )}
    </>
  );
};

export default TextArea;
