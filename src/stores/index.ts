import { createContext, useContext } from 'react';

import CalculatorStore from './CalculatorStore';

export interface TStore {
  calculatorStore: CalculatorStore;
};

export const store: TStore = {
  calculatorStore: new CalculatorStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
