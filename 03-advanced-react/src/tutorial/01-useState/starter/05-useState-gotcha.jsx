import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setValue((prev) => {
        return prev + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
