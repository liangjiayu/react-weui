import classNames from 'classnames';
import React from 'react';
import { useMergedState } from '../_utils';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  onChange?: (checked: boolean, event: React.ChangeEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    checked: checkedProp,
    defaultChecked: defaultCheckedProp,
    disabled,
    className,
    style,
    onChange,
    onClick,
    ...restProps
  } = props;

  const [checked, setChecked] = useMergedState<boolean>({
    value: checkedProp,
    defaultValue: defaultCheckedProp ?? false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e.target.checked, e);
  };

  const classes = classNames('weui-switch', className);

  // ============================ Render ============================
  return (
    <input
      type="checkbox"
      className={classes}
      style={style}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      onClick={onClick}
      {...restProps}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = 'Switch';
}

export default Switch;
