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
    <div>
      <div className="formula-container">
        <div className="formulaframe">
          <div className="formula">
            <div>
              <RecordsButton />
            </div>
            <div className="formula-div">
              <div>{showexp}</div>
              {bracket[0] &&
                bracket.map((item, index) => (
                  <div key={index} className="bracket">
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="result">{result}</div>
        </div>
      </div>
    </div>
  );
};
