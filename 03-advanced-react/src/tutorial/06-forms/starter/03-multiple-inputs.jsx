import { useState } from 'react';

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.password) {
      console.log(user);
      setUser({ name: '', email: '', password: '' });
    }
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            name='name'
            className='form-input'
            id='name'
            value={user.name}
            onChange={handleInputs}
            required
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            required
            type='email'
            name='email'
            className='form-input'
            id='email'
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            required
            type='password'
            name='password'
            className='form-input'
            id='password'
            value={user.password}
            onChange={handleInputs}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
