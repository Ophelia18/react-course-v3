import { useState } from 'react';

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {showMore ? `${info} ` : `${info.slice(0, 200)}... `}
          <button
            type='button'
            onClick={() => setShowMore(!showMore)}
            className='info-btn'
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <button
          type='button'
          className='btn delete-btn btn btn-block'
          onClick={() => deleteTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
