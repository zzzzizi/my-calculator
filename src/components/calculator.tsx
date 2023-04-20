import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { show, add, calculate, initialize } from '../features/calculatorSlice';
import '../css/calculator.css';

export const Calculator = () => {
  const dispatch = useDispatch();
  const [num, setNum] = useState('');

  return (
    <div className="calculator-container">
      <div className="calculator-div">
        <div>
          <button
            onClick={() => {
              dispatch(show('('));

              dispatch(add('('));
            }}
          >
            (
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(show(')'));
              dispatch(add(num));
              dispatch(add(')'));
              setNum('');
            }}
          >
            )
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(show('%'));
              dispatch(add(num));
              dispatch(add('%'));
              setNum('');
            }}
          >
            %
          </button>
        </div>
        <div>
          <button
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
            onClick={() => {
              dispatch(show('/'));
              dispatch(add(num));
              dispatch(add('/'));
              setNum('');
            }}
          >
            /
          </button>
        </div>
        <div>
          <button
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
            onClick={() => {
              dispatch(show('*'));
              dispatch(add(num));
              dispatch(add('*'));
              setNum('');
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
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
            onClick={() => {
              dispatch(show('-'));
              dispatch(add(num));
              dispatch(add('-'));
              setNum('');
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
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
            onClick={() => {
              num !== '' && dispatch(add(num));
              dispatch(show('='));
              dispatch(calculate());
              setNum('');
            }}
          >
            =
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(show('+'));
              dispatch(add(num));
              dispatch(add('+'));
              setNum('');
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
