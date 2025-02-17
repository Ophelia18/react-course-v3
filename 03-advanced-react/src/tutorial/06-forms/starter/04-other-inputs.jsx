import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [frameWork, setFrameWork] = useState('');

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name='checkbox'
            id='shipping'
            onChange={(e) => setShipping(e.target.checked)}
            checked={shipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select
            name='frameworks'
            id='framework'
            value={frameWork}
            onChange={(e) => setFrameWork(e.target.value)}
          >
            {frameworks.map((framework, i) => (
              <option key={i}>{framework}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
