import type { ChangeEvent } from 'react';
import type { RadioProps } from './Radio';
import _Radio from './Radio';
import RadioGroup from './RadioGroup';

interface CompoundedComponent extends React.FC<RadioProps> {
  Group: typeof RadioGroup;
}

// @ts-ignore
export interface RadioChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: {
    value: any;
    checked: boolean;
  };
}

const Radio = _Radio as CompoundedComponent;

Radio.Group = RadioGroup;

export default Radio;
