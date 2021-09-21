import { createContext, Context } from 'react';

type RowContextState = {
  gutter?: number;
};

const RowContext: Context<RowContextState> = createContext({});

export default RowContext;
