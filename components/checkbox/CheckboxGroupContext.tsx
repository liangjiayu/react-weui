import { createContext } from 'react';
import type { CheckboxGroupContextProps } from './interface';

const Context = createContext<CheckboxGroupContextProps | null>(null);

export default Context;
