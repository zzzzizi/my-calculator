import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Screen = () => {
  const formula = useSelector((state: RootState) => state.calculator.showexp);
  const result = useSelector(
    (state: RootState) => state.calculator.resultnumber
  );

  return (
    <div>
      <div>{formula}</div>
      <div>{result}</div>
    </div>
  );
};
