import { useState } from 'react';

const ToggleChallenge = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type='button' className='btn' onClick={() => setShow(!show)}>
        {show ? 'hide' : 'show'}
      </button>
      {show && <h3>Component</h3>}
    </>
  );
};

export default ToggleChallenge;
