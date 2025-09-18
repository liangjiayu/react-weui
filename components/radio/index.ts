import type { RadioProps } from './interface';
import _Radio from './Radio';
import RadioGroup from './RadioGroup';

interface CompoundedComponent extends React.FC<RadioProps> {
  Group: typeof RadioGroup;
}

const Radio = _Radio as CompoundedComponent;

Radio.Group = RadioGroup;

export default Radio;
