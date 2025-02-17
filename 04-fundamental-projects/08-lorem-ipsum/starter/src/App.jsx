import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';
const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, count));
  };

  return (
    <section className=' section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className=' lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className=' lorem-text'>
        {paragraphs.map((paragraph) => (
          <p key={nanoid()}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
