import React from 'react';
import classNames from 'classnames';
import { useMergedState } from '../../utils';

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Switch: React.FC<SwitchProps> = (props) => {
  const { disabled, className, onClick, style } = props;

  const [checked, setChecked] = useMergedState<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked || false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
    }
    props.onChange?.(e.target.checked, e);
  };

  const classes = classNames('weui-switch', className);

  return (
    <input
      type="checkbox"
      className={classes}
      style={style}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Switch;
