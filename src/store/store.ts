import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from '../features/calculatorSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
