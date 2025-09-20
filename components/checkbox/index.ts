import _Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import type { CheckboxProps } from './interface';

interface CompoundedComponent extends React.FC<CheckboxProps> {
  Group: typeof CheckboxGroup;
}

const Checkbox = _Checkbox as CompoundedComponent;

Checkbox.Group = CheckboxGroup;

export default Checkbox;
