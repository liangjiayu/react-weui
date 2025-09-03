import type { Context } from 'react';
import { createContext } from 'react';

type RowContextState = {
  gutter?: number;
};

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
