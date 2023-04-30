import { useState } from 'react';
import { ShowRecords } from './showrecords';
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
        className="records"
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
