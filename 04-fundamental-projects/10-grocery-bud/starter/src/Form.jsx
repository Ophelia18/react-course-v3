import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addItem(name);
      setName('');
    }
    toast.error('Please fill the blank name!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className=' form-control'>
        <input
          type='text'
          name=''
          id=''
          className=' form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='btn '>
          Add
        </button>
      </div>
    </form>
  );
};
export default Form;
