import { createContext } from 'react';
import type { CheckboxOptionType } from './index';

type CheckboxGroupContextProps = {
  value: any[];
  disabled?: boolean;
  name?: string;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
  toggleOption: (option: CheckboxOptionType) => void;
};

const Context = createContext<CheckboxGroupContextProps | null>(null);

export default Context;
