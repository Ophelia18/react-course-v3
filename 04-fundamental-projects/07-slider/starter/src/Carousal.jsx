import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { shortList, list, longList } from './data';
const Carousal = () => {
  const [people, setPeople] = useState(longList);
  const [index, setIndex] = useState(0);
  const prev = () => {
    if (index === 0) {
      setIndex(people.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  const next = () => {
    if (index === people.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <section className='slider-container'>
      {people.map((person, i) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            key={id}
            style={{ transform: `translateX(${100 * (i - index)}%)` }}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'> {title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button type='button' className='prev' onClick={prev}>
        <FiChevronLeft />
      </button>
      <button type='button' className='next' onClick={next}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousal;
