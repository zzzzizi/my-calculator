import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useOutsideClick } from '../hooks/outsideclick';
//import { forwardRef } from 'react';

// export const ShowRecords = forwardRef<
//   HTMLDivElement,
//   { toggle: boolean; setToggle: (toggle: boolean) => void }
// >((props, ref) => {
//   const records = useSelector((state: RootState) => state.calculator.record);
//   if (props.toggle) {
//     return (
//       <div className="records-container" ref={ref}>
//         <p className="records-p" onClick={() => props.setToggle(false)}>
//           records
//         </p>
//         <div className="records-div">
//           {records.map((record, index) => (
//             <div key={index}>{record}</div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return null;
// });

export const ShowRecords = (props: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
  const records = useSelector((state: RootState) => state.calculator.record);

  const handleClickOutside = () => {
    props.setToggle(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  if (props.toggle) {
    return (
      <div className="records-container" ref={ref}>
        <p className="records-p" onClick={() => props.setToggle(false)}>
          records
        </p>
        <div className="records-div">
          {records.map((record, index) => (
            <div key={index}>{record}</div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
