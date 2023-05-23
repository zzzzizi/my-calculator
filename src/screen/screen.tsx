import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import './screen.css';
import { RecordsButton } from '../screenRecordsbutton/screenRecordsbutton';

export const Screen = () => {
  const formula = useSelector((state: RootState) => state.calculator.showexp);
  const result = useSelector(
    (state: RootState) => state.calculator.resultnumber
  );

  const bracket = useSelector((state: RootState) => state.calculator.bracket);
  const showexp = formula.join('');
  return (
    <div className="screen">
      <div className="screen__top">
        <RecordsButton />
        <div className="screen__formula">
          <div>{showexp}</div>
          {bracket[0] &&
            bracket.map((item, index) => (
              <div key={index} className="screen__bracket">
                {item}
              </div>
            ))}
        </div>
      </div>
      <div className="screen__down">{result}</div>
    </div>
  );
};
