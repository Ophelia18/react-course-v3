import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  const next = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prev = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const surprise = () => {
    const rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      surprise();
      return;
    } else setIndex(rand);
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <span className='prev-btn' onClick={prev}>
            <FaChevronLeft />
          </span>
          <span className='next-btn' onClick={next}>
            <FaChevronRight />
          </span>
        </div>
        <button type='button' className='btn-hipster btn' onClick={surprise}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
