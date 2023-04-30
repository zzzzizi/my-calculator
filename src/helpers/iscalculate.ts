import { initialize } from '../features/calculatorSlice';
import { Middleware } from '@reduxjs/toolkit';

export const initialCalculate: Middleware = (store) => (next) => (action) => {
  const newstate = store.getState();

  const equalIndex = newstate.calculator.showexp?.findIndex(
    (e: string) => e === '='
  );

  const needInit = action.type === 'calculator/show';

  console.log(action.type);

  console.log(newstate.calculator.showexp);
  if (equalIndex !== -1 && needInit) {
    console.log('a');
    store.dispatch(initialize());
    console.log('xxxx');
    return next(action);
  }
  return next(action);
};
