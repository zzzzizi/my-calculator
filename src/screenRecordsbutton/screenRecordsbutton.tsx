import { useState } from 'react';
import { ShowRecords } from '../showRecords/showRecords';
import './screenRecordsButton.css';
//import { useOutsideClick } from '../hooks/outsideclick';

export const RecordsButton = () => {
  const [toggle, setToggle] = useState(false);

  // const handleClickOutside = () => {
  //   setToggle(false);
  // };
  // const ref = useOutsideClick(handleClickOutside);
  return (
    <div>
      <button
        className="btn__records"
        onClick={(e) => {
          e.stopPropagation();
          setToggle(true);
        }}
      >
        records
      </button>

      <ShowRecords toggle={toggle} setToggle={setToggle} />
    </div>
  );
};
