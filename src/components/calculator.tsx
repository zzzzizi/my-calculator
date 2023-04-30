import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  show,
  add,
  calculate,
  initialize,
  increasebracket,
  decreasebracket,
} from '../features/calculatorSlice';
import '../css/calculator.css';
import { RootState } from '../store/store';
//import { useInitial } from '../helpers/iscalculate';

export const Calculator = () => {
  const formula = useSelector((state: RootState) => state.calculator.formula);
  const dispatch = useDispatch();
  const [num, setNum] = useState('');

  return (
    <div className="calculator-container">
      <div className="calculator-div">
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              if (num !== '') {
                dispatch(add(num));
                dispatch(add('*'));
                setNum('');
              } else if (!isNaN(parseFloat(formula[formula.length - 1]))) {
                dispatch(add('*'));
              }
              dispatch(show('('));

              dispatch(add('('));
              dispatch(increasebracket());
            }}
          >
            (
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show(')'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
              }
              dispatch(add(')'));
              dispatch(decreasebracket());
            }}
          >
            )
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show('%'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
              }
              dispatch(add('/'));
              dispatch(add('100'));
            }}
          >
            %
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(initialize());
              setNum('');
            }}
          >
            AC
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('7'));
              setNum(num + '7');
            }}
          >
            7
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('8'));
              setNum(num + '8');
            }}
          >
            8
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('9'));
              setNum(num + '9');
            }}
          >
            9
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show('/'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
              }
              dispatch(add('/'));
            }}
          >
            /
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('4'));
              setNum(num + '4');
            }}
          >
            4
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('5'));
              setNum(num + '5');
            }}
          >
            5
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('6'));
              setNum(num + '6');
            }}
          >
            6
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show('*'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
              }
              dispatch(add('*'));
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('1'));
              setNum(num + '1');
            }}
          >
            1
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('2'));
              setNum(num + '2');
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('3'));
              setNum(num + '3');
            }}
          >
            3
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show('-'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
                dispatch(add('-'));
              } else if (formula[formula.length - 1] === ')') {
                dispatch(add('-'));
              } else if (formula[formula.length - 1] === '/') {
                dispatch(add('-1'));
                dispatch(add('/'));
              } else if (!isNaN(parseFloat(formula[formula.length - 1]))) {
                dispatch(add('-'));
              } else {
                dispatch(add('-1'));
                dispatch(add('*'));
              }
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('0'));
              setNum(num + '0');
            }}
          >
            0
          </button>
        </div>
        <div>
          <button
            className="calculator-nunber-button"
            onClick={() => {
              dispatch(show('.'));
              setNum(num + '.');
            }}
          >
            .
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              num !== '' && dispatch(add(num));
              dispatch(calculate());
              setNum('');
            }}
          >
            =
          </button>
        </div>
        <div>
          <button
            className="calculator-button"
            onClick={() => {
              dispatch(show('+'));
              if (num !== '') {
                dispatch(add(num));
                setNum('');
              }
              dispatch(add('+'));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
