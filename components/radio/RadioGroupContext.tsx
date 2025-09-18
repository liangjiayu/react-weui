import { createContext } from 'react';
import type { RadioGroupContextProps } from './interface';

const RadioContext = createContext<RadioGroupContextProps | null>(null);

export default RadioContext;
