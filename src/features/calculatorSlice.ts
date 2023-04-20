import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { infixToPostfix } from '../infixtopostfix/infixtopostfix';
import { evalpostfix } from '../evalpostfix/evalpostfix';

export interface State {
  formula: Array<string>;
  resultnumber: number | undefined;
  showexp: string;
}

export const initialState: State = {
  formula: [],
  resultnumber: 0,
  showexp: '',
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,

  reducers: {
    show: (state: State, action: PayloadAction<string>) => {
      state.showexp += action.payload;
    },
    add: (state: State, action: PayloadAction<string>) => {
      state.formula.push(action.payload);
    },

    // calculate: (state: State) => {
    //   state.resultnumber = eval(state.formula.join(''));
    // },
    calculate: (state: State) => {
      const postfix = infixToPostfix(state.formula);
      state.resultnumber = evalpostfix(postfix);
    },

    initialize: (state: State, action: PayloadAction<undefined>) => {
      return {
        ...initialState,
      };
    },
  },
});

export const { show, add, calculate, initialize } = calculatorSlice.actions;
export default calculatorSlice.reducer;
