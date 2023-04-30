import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from '../features/calculatorSlice';
import { initialCalculate } from '../helpers/iscalculate';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(initialCalculate),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
