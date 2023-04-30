import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { infixToPostfix } from '../infixtopostfix/infixtopostfix';
import { evalpostfix } from '../evalpostfix/evalpostfix';

export interface State {
  formula: Array<string>;
  resultnumber: number | undefined;
  showexp: Array<string>;
  bracket: Array<string>;
  record: Array<string>;
}

export const initialState: State = {
  formula: [],
  resultnumber: 0,
  showexp: [],
  bracket: [],
  record: [],
};
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,

  reducers: {
    show: (state: State, action: PayloadAction<string>) => {
      state.showexp.push(action.payload);
    },
    add: (state: State, action: PayloadAction<string>) => {
      state.formula.push(action.payload);
    },
    increasebracket: (state: State) => {
      state.bracket.push(')');
    },
    decreasebracket: (state: State) => {
      state.bracket.pop();
    },
    // calculate: (state: State) => {
    //   state.resultnumber = eval(state.formula.join(''));
    // },
    calculate: (state: State) => {
      state.formula = state.formula.concat(state.bracket);
      state.showexp = state.showexp.concat(state.bracket);
      state.showexp.push('=');
      state.bracket = [];

      const postfix = infixToPostfix(state.formula);
      state.resultnumber = evalpostfix(postfix);
      state.record.push(state.showexp.join('') + state.resultnumber);
    },

    initialize: (state: State, action: PayloadAction<undefined>) => {
      return {
        ...initialState,
        record: state.record,
      };
    },
  },
});

export const {
  show,
  add,
  increasebracket,
  decreasebracket,
  calculate,
  initialize,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
