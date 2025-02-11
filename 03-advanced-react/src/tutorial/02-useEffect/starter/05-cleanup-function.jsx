import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button type='button' className='btn' onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle && <Component />}
    </>
  );
};

const Component = () => {
  useEffect(() => {
    const someFunction = () => {};
    window.addEventListener('scroll', someFunction);
    return () => {
      removeEventListener('scroll', someFunction);
    };
  }, []);
  return <div>Hello there!</div>;
};

export default CleanupFunction;
