import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className=' form-row'>
        <label htmlFor='name' className=' form-label'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className=' form-row'>
        <label htmlFor='email' className=' form-label'>
          email:
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
