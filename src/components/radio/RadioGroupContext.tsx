import { createContext } from 'react';
import type { RadioChangeEvent } from './index';

type RadioGroupContextProps = {
  value: any;
  onChange: (e: RadioChangeEvent) => void;
  disabled?: boolean;
  name?: string;
};

const RowContext = createContext<RadioGroupContextProps | null>(null);

export default RowContext;
