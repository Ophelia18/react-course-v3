import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h1>You clicked {count} times</h1>
      <button type='button' className='btn' onClick={handleClick}>
        {' '}
        click me{' '}
      </button>
    </>
  );
};

export default UseStateBasics;
