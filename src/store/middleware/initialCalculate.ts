import { initialize } from '../../features/calculatorSlice';
import { Middleware } from '@reduxjs/toolkit';

export const initialCalculate: Middleware = (store) => (next) => (action) => {
  const newstate = store.getState();

  const equalIndex = newstate.calculator.showexp?.findIndex(
    (e: string) => e === '='
  );

  const needInit = action.type === 'calculator/show';

  if (equalIndex !== -1 && needInit) {
    store.dispatch(initialize());

    return next(action);
  }
  return next(action);
};
