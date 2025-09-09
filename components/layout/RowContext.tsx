import type { Context } from 'react';
import { createContext } from 'react';

type RowContextState = {
  gutter?: [number, number];
};

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
