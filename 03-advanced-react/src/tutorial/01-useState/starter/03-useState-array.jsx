import { data } from '../../../data';
import { useState } from 'react';
const UseStateArray = () => {
  const [arr, setArr] = useState(data);
  const removeItem = (id) => {
    const newArr = arr.filter((item) => item.id !== id);
    setArr(newArr);
  };
  const clearItems = () => {
    setArr([]);
  };
  return (
    <>
      {arr.map((item) => {
        const { id, name } = item;
        return (
          <div>
            <div key={id} className='item'>
              {name}
            </div>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className='btn' onClick={clearItems}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
