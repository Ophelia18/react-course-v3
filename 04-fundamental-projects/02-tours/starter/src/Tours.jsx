import Tour from './Tour';
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      {tours.length ? (
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='title-underline'></div>
        </div>
      ) : (
        <h2>No tours left</h2>
      )}
      <div className='tours'>
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
